describe("Pizza Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order"); 
  });

  it("Inputa metin girilebiliyor", () => {
    cy.get('textarea[name="isim"]').type("Ezgi").should("have.value", "Ezgi");
  });

  it("Birden fazla malzeme seçilebiliyor", () => {
    cy.get('input[type="checkbox"][value="Mısır"]').check().should("be.checked");
    cy.get('input[type="checkbox"][value="Sucuk"]').check().should("be.checked");
  });

  it("Form gönderilebiliyor", () => {
    cy.get('textarea[name="isim"]').type("Ezgi");
    cy.get('input[type="radio"][value="M"]').check().should("be.checked");
    cy.get('select[name="hamur"]').select("İnce").should("have.value", "font-thin");
    cy.get('input[type="checkbox"][value="Soğan"]').check().should("be.checked");
    cy.get('textarea[name="ozelNotlar"]').type("Bol malzeme olsun");
    cy.get('button[type="submit"]').click();
    
  });

  it("Adet artırma ve azaltma butonları çalışıyor", () => {
    cy.get('input[name="adet"]').should('have.value', '1');
    cy.get('button').contains('+').click();
    cy.get('input[name="adet"]').should('have.value', '2');
    cy.get('button').contains('-').click();
    cy.get('input[name="adet"]').should('have.value', '1');
    cy.get('button').contains('-').click();
    cy.get('input[name="adet"]').should('have.value', '1');
  });
});
