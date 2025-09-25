import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Order({ setOrderData }) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: [],
    ozelNotlar: '',
    adet: 1
  });
  const [errors, setErrors] = useState({})

  const dough = ["S", "M", "L"];
  const topping = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Baharat", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno", "Sucuk"];

  const basePrice = 85.5;
  const toppingPrice = 5;
  const topQ = formData.malzemeler.length * toppingPrice;
  const total = basePrice * formData.adet + topQ;

  const isValid = () => {
    return formData.isim.length >= 3 &&
      formData.boyut &&
      formData.hamur &&
      formData.malzemeler.length >= 4 &&
      formData.malzemeler.length <= 10 &&
      Object.keys(errors).length === 0;
  };

  function onToppingsChange(value) {
    let newMalzemeler = [...formData.malzemeler];
    if (newMalzemeler.includes(value)) {
      newMalzemeler = newMalzemeler.filter((item) => item !== value);
    } else if (newMalzemeler.length < 10) {
      newMalzemeler.push(value);
    }
    setFormData({ ...formData, malzemeler: newMalzemeler });
    validateField({ target: { name: "malzemeler", value: newMalzemeler } });
  }

  const validateField = (event) => {
    const { name, value } = event.target;
    const newErrors = { ...errors };

    if (name === "isim") {
      if (value.length < 3) newErrors.isim = "İsim en az 3 karakter olmalıdır";
      else delete newErrors.isim;
    }

    if (name === "boyut") {
      if (!value) newErrors.boyut = "Pizza boyutu seçiniz";
      else delete newErrors.boyut;
    }

    if (name === "hamur") {
      if (!value) newErrors.hamur = "Hamur kalınlığı seçiniz";
      else delete newErrors.hamur;
    }

    if (name === "malzemeler") {
      if (value.length < 4) newErrors.malzemeler = "En az 4 malzeme seçiniz";
      else if (value.length > 10) newErrors.malzemeler = "En fazla 10 malzeme seçebilirsiniz";
      else delete newErrors.malzemeler;
    }

    setErrors(newErrors);
  };

 const handleSubmit =  (e) => {
  e.preventDefault();

  
  if (formData.isim.length < 3 || !formData.boyut || !formData.hamur || formData.malzemeler.length < 4) {
    alert("Lütfen formu doğru doldurun!");
    return;
  }

  try {
    const response =  axios.post(" https://reqres.in/api/pizza", formData);

  
    console.log("Sipariş Özeti:");
    console.log({
      ...formData,
      toplam: total,
      secimler: topQ,
      response: response.data
    });

    
    setOrderData({
      ...formData,
      toplam: total,
      secimler: topQ,
      response: response.data
    });

    history.push("/success");
  } catch (err) {
    console.error("Sipariş başarısız:", err);
  }
};
  return (
    <div>
     <header className="flex flex-col justify-center items-center bg-[#FAF7F2]">
  <div className="bg-red-700 w-full h-20 flex justify-center items-center">
    <img className="h-10" src="images/iteration-1-images/logo.svg" />
  </div>
  <div className="flex flex-col justify-center w-full max-w-6xl mx-auto">
    <img
      className="w-full object-cover max-h-60 md:max-h-96 rounded-md"
      src="images/iteration-2-images/pictures/form-banner.png"
      alt="Banner"
    />
    <div className="flex flex-col justify-center mt-20 gap-10 px-4 md:px-8 lg:px-0">
      <p className="text-sm">
        Anasayfa-Seçenekler-
        <span className="text-red-600">Sipariş Oluştur</span>
      </p>
      <p className="text-xl font-semibold">Position Absolute Acı Pizza</p>
      <div className="flex flex-col md:flex-row md:gap-20 font-[barlow] gap-4">
        <h3 className="font-bold text-2xl">85.50₺</h3>
        <div className="flex flex-row gap-5 text-sm">
          <p>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <div className="mt-10 font-[barlow] text-l mb-10 text-sm md:text-base">
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          <br />
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
          <br />
          daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
          <br />
          genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          <br />
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  </div>
</header>


      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-80 justify-center mt-10 md:mt-20 px-4 md:px-0">
          <div className="flex  flex-col gap-2">
            <label className="font-[barlow] font-semibold text-l">Boyut Seç<span className="text-red-500">*</span></label>
            <div className="flex flex-wrap md:flex-row gap-4 md:gap-5">
              {dough.map((size) =>
                <label key={size} className="h-10 md:h-15 font-[barlow] text-thin flex items-center justify-center border rounded-full w-10 md:w-15 bg-[#FAF7F2]">
                  <input
                    type="radio"
                    name="boyut"
                    value={size}
                    checked={formData.boyut === size}
                    onChange={(e) => {
                      setFormData({ ...formData, boyut: e.target.value });
                      validateField({ target: { name: "boyut", value: e.target.value } });
                    }}
                  />
                  {size}
                </label>
              )}
            </div>
            {errors.boyut && <span className="text-red-500">{errors.boyut}</span>}
          </div>

          <div className="flex flex-col">
            <label className="font-[barlow] font-semibold">Hamur Seç <span className="text-red-500">*</span></label>
            <select
              name="hamur"
              className="border  rounded-md p-2 w-full md:w-100 mt-2 bg-[#FAF7F2]"
              onChange={(e) => {
                setFormData({ ...formData, hamur: e.target.value });
                validateField({ target: { name: "hamur", value: e.target.value } });
              }}
              value={formData.hamur}
            >
              <option value="" disabled>-- Hamur Kalınlığı Seç --</option>
              <option value="font-thin">İnce</option>
              <option value="font-medium">Orta</option>
              <option value="font-bold">Kalın</option>
            </select>
            {errors.hamur && <span className="text-red-500">{errors.hamur}</span>}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 mt-10 px-4 md:px-50">
          <label className="font-[barlow] text-xl font-semibold">Ek Malzemeler</label>
          <p className="font-normal text-l font-[barlow]">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 px-4 md:px-50 mt-4 text-l font-[barlow] font-medium">
          {topping.map((t) => {
            const isChecked = formData.malzemeler.includes(t);
            const disableUncheck = isChecked && formData.malzemeler.length <= 4;
            const disableCheck = !isChecked && formData.malzemeler.length >= 10;

            return (
              <label key={t} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={t}
                  checked={isChecked}
                  onChange={() => onToppingsChange(t)}
                  disabled={disableUncheck || disableCheck}
                  name="malzemeler"
                />
                {t}
              </label>
            );
          })}
          {errors.malzemeler && <span className="text-red-500">{errors.malzemeler}</span>}
        </div>

        <div className="flex flex-col justify-center gap-5 mt-10 px-4 md:px-50">
          <label>İsim</label>
          <textarea
            name="isim"
            onChange={(e) => {
              setFormData({ ...formData, isim: e.target.value });
              validateField({ target: { name: "isim", value: e.target.value } });
            }}
            value={formData.isim}
            placeholder="İsminizi Giriniz"
            className="bg-[#FAF7F2] w-full"
          />
          {errors.isim && <span className="text-red-500">{errors.isim}</span>}
          <label>Sipariş Notu</label>
          <textarea
            onChange={(e) => setFormData({ ...formData, ozelNotlar: e.target.value })}
            value={formData.ozelNotlar}
            placeholder="Siparişinize Eklemek istediğiniz bir not var mı?"
            className="bg-[#FAF7F2] w-full"
            name="ozelNotlar"
          />
        </div>

        <hr className="bg-[#5F5F5F80] mt-10 w-full px-4 md:px-50" />

        <section className="flex flex-col md:flex-row gap-4 md:gap-2 m-4 md:m-20 justify-center">
          <div className="flex justify-center gap-2 md:gap-2 flex-wrap">
            <button
              className="w-16 h-16 md:w-20 md:h-20 border rounded bg-yellow-400 text-xl"
              type="button"
              onClick={() => setFormData({ ...formData, adet: Math.max(1, formData.adet - 1) })}
            >-</button>

            <input
              type="number"
              name="adet"
              value={formData.adet}
              readOnly
              className="w-16 h-16 md:w-20 md:h-20 pl-2 text-center border rounded"
            />

            <button
              className="w-16 h-16 md:w-20 md:h-20 border rounded bg-yellow-400 text-xl"
              type="button"
              onClick={() => setFormData({ ...formData, adet: formData.adet + 1 })}
            >+</button>
          </div>

          <div className="w-full md:w-180 h-auto md:h-80 bg-[#FAF7F2] gap-2 flex flex-col justify-center mt-4 md:mt-0 md:ml-10 px-4 md:px-0">
            <h4 className="font-[barlow] font-bold text-2xl mb-4 md:m-10">Sipariş Toplamı</h4>
            <div className="font-[barlow] flex flex-row justify-between md:gap-120 font-normal mb-2 md:m-10 text-xl">
              <p>Seçimler</p>
              <p>{topQ}₺</p>
            </div>
            <div className="flex flex-row justify-between md:gap-120 mb-2 md:m-10">
              <p className="text-red-600 font-[barlow] font-normal text-xl">Toplam</p>
              <p>{total.toFixed(2)}₺</p>
            </div>
            <button  type="submit" className="bg-yellow-400 h-10 mt-2 p-2 w-full md:w-auto">Sipariş Ver</button>
          </div>
        </section>
      </form>

       <footer >
        <div className="flex flex-col md:flex-row justify-center items-center bg-[#1A1A1A] gap-50 p-20 ">
          <div className="flex flex-col  justify-center">
            <div className="mb-15">
            <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="Logo" className="footer-logo" />
            </div>
            <div className="flex flex-col justify-center gap-10 font-[barlow] ">
              <p className="text-white flex flex-row"><img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Address" /> 341 Londonderry Road, Istanbul Türkiye</p>
              <p  className="text-white flex flex-row"><img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Email" /> aciktim@teknolojikyemekler.com</p>
              <p  className="text-white flex flex-row"><img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Phone" /> +90 216 123 45 67</p>
            </div>
          </div>
          
          <div className="flex flex-col text-white">
            <h4 className="mb-10 text-2xl">HOT MENU</h4>
            <ul className="flex flex-col justify-center gap-3 text-l">
              <li >Terminal Pizza</li>
              <li >5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center m-10 ">
            <h4 className="text-white text-2xl ">INSTAGRAM</h4>
            <div className="flex flex-row gap-12 mt-20 flex-wrap">
              <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Instagram 1" />
              <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Instagram 2" />
              <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Instagram 3" />
              <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Instagram 4" />
              <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Instagram 5" />
              <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Instagram 6" />
            </div>
          </div>
        </div>
        
        <div className=" bg-[#1A1A1A]">
          <p className="ml-20 text-white">© 2023 Teknolojik Yemekler</p>
        </div>
      </footer>
    </div>
  )
}
