export default function Success({ orderData }) {
  if (!orderData) {
    return <p>Henüz sipariş verilmedi!</p>;
  }

  const { isim, boyut, hamur, malzemeler, ozelNotlar, adet, toplam, secimler } = orderData;

  return (
    <div className="bg-red-700 min-h-screen flex flex-col items-center justify-center text-white">
      <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="mb-10" />

      <h3 className="text-yellow-400 font-thin font-[satisfy] text-xl">lezzetin yolda</h3>
      <h1 className="text-6xl font-thin font-[RobotoCondensed] mt-5">SİPARİŞ ALINDI</h1>

      <hr className="my-5 w-2/3 border-gray-200" />
    <section className="flex justify-center flex-col gap-1.5">
      <h2 className="text-2xl mb-4 font-[Barlow]">Position Absolute Acı Pizza</h2>
       <p className="font-thin font-[Barlow]">İsim: <span className="text-white font-bold">{isim}</span></p>
      <p className="font-thin font-[Barlow]">Boyut: <span className="text-white font-bold">{boyut}</span></p>
      <p className="font-thin font-[Barlow]">Hamur: <span className="text-white font-bold">{hamur}</span></p>
      <p className="font-thin font-[Barlow]">
        Ek Malzemeler:{" "}
        <span className="font-bold">
          {malzemeler.join(", ")}
        </span>
      </p>
      {ozelNotlar && <p className="mt-2 italic">Not: {ozelNotlar}</p>}
    </section>
      <div className="bg-transparent border p-5 mt-10 rounded-md w-72 text-center">
        <h3 className="font-bold text-lg mb-2">Sipariş Toplamı</h3>
        <p>Seçimler: {secimler}₺</p>
        <p className="text-xl text-yellow-400">Toplam: {toplam}₺</p>
      </div>
    </div>
  );
}
