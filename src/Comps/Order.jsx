import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export default function Order(){
const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: [],
    ozelNotlar: '',
    adet: 1
  });
  const[errors, setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  const dough = ["S", "M", "L"]
  const topping =["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis","Soğan", "Baharat","Biber","Kabak","Kanada Jambonu","Domates","Jalepeno","Sucuk"]

  const isValid = () => {
    return formData.isim.length >= 3 &&
      formData.boyut &&
      formData.hamur &&
      formData.malzemeler.length >= 4 &&
      formData.malzemeler.length <= 10 &&
      Object.keys(errors).length === 0;
  };

   const basePrice = 85.5;
  const toppingPrice = 5;
 const total = basePrice * formData.adet + formData.malzemeler.length * toppingPrice;
const topQ = formData.malzemeler.length * toppingPrice;

function onToppingsChange(value) {
  let newMalzemeler = [...formData.malzemeler];

  if (newMalzemeler.includes(value)) {
    newMalzemeler = newMalzemeler.filter((item) => item !== value);
  } else if (newMalzemeler.length < 10) {
    newMalzemeler.push(value);
  }

  setFormData({ ...formData, malzemeler: newMalzemeler });
}




  const validateField = (event) => {
  const{name, value} = event.target
  const newErrors = { ...errors };

  if (name === "name") {
    if (value.length < 3) {
      newErrors.isim = "İsim en az 3 karakter olmalıdır";
    } else {
      delete newErrors.isim;
    }
  } 
  
  else if (name === "size") {
    if (!value) {
      newErrors.boyut = "Pizza boyutu seçiniz";
    } else {
      delete newErrors.boyut;
    }
  } 
  
  else if (name === "dough") {
    if (!value) {
      newErrors.hamur = "Hamur kalınlığı seçiniz";
    } else {
      delete newErrors.hamur;
    }
  } 
  
  else if (name === "toppings") {
    if (value.length < 4) {
      newErrors.malzemeler = "En az 4 malzeme seçiniz";
    } else if (value.length > 10) {
      newErrors.malzemeler = "En fazla 10 malzeme seçebilirsiniz";
    } else {
      delete newErrors.malzemeler;
    }
  }

  setErrors(newErrors);
};
const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/pizza", formData);

      // gelen datayı Success sayfasına gönder
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



return(
    <div>
    <header className="flex flex-col justify-center items-center bg-[#FAF7F2]">
      <div  className="bg-red-700 w-full  h-20 flex justify-center items-center">
      <img className="h-10 "src="images\iteration-1-images\logo.svg"/>
      </div>
      <div className="flex flex-col justify-center ">
      <img className=""src="images\iteration-2-images\pictures\form-banner.png"/>
      <div  className="flex flex-col justify-center mt-20 gap-10">
      <p className="text-sm">Anasayfa-Seçenekler-<span className="text-red-600">Sipariş Oluştur</span></p>
      <p className="text-xl font-semibold">Position Absolute Acı Pizza</p>
      <div className="flex flex-row gap-150 font-[barlow]">
        <h3 className="font-bold text-2xl">85.50₺</h3>
        <div className="flex flex-row gap-30 text-sm">
        <p>4.9</p>
        <p>(200)</p>
        </div>
        </div>
        <div className="mt-20 font-[barlow] text-l mb-10" >
        <p >Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.<br/> 
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, <br/>
        daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, <br/>
        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli <br/>
         lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        </div>
     
      
      </div>
    </header>
    
    {/*form*/}
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row gap-80 justify-center mt-20">
      <div className="flex flex-col gap-2">
    <label className="font-[barlow] font-semibold text-l">Boyut Seç<span className="text-red-500">*</span></label>
    <div className="flex flex-row gap-5">
    {dough.map((size)=>
    <label key={size} className={`h-15 font-[barlow] text-thin flex items-center justify-center border rounded-full w-15 
            bg-[#FAF7F2]
          `}>
    <input type="radio"
    name="size"
    value={size}
       checked={formData.boyut === size}
     onChange={(e) =>
        setFormData({ ...formData, boyut: e.target.value })
      }/>{size}</label>
)}
</div>
    </div>
    <div className="flex flex-col">
  <label className="font-[barlow] font-semibold" >Hamur Seç <span className="text-red-500">*</span></label>
  <select
    name="dough"
    className="border rounded-md p-2 w-100 mt-2  bg-[#FAF7F2]"
    onChange={(e) =>
    setFormData({ ...formData, hamur: e.target.value })
  }
    value={formData.hamur} 

  >
      <option value="" disabled>-- Hamur Kalınlığı Seç --</option>
    <option value="ince">İnce</option>
    <option value="orta">Orta</option>
    <option value="kalin">Kalın</option>
  </select>
</div>
</div>

  <div className="flex flex-col justify-center ml-50 gap-5 mt-10">
    <label className="font-[barlow] text-xl font-semibold">Ek Malzemeler</label>
    <p className="font-normal text-l font-[barlow]">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
    </div>
    <div className="grid grid-cols-3 gap-10 flex justify-center ml-50 mt-10 text-l font-[barlow] font-medium">
   {topping.map((t) => {
  const isChecked = toppings.includes(t);

 
  const disableUncheck = isChecked && toppings.length <= 4;
  const disableCheck = !isChecked && toppings.length >= 10;

  return (
    <label key={t} className="flex items-center gap-2">
      <input
        type="checkbox"
        value={t}
        checked={isChecked}
        onChange={() => onToppingsChange(t)}
        disabled={disableUncheck || disableCheck}
        name="toppings"
      />
      {t}
    </label>
  );
})}

  </div>
    <div className="flex flex-col justify-center ml-50 mt-20 mr-50 gap-5">
    <label>İsim</label>
    <textarea   onChange={(e) => setFormData({...formData, isim: e.target.value})}   value={formData.isim} name="name" placeholder="İsminizi Giriniz" className="bg-[#FAF7F2] w-70"/>
      <label>Sipariş Notu</label>
    <textarea onChange={(e) => setFormData({...formData, ozelNotlar: e.target.value})}   value={formData.ozelNotlar} name="notes"  placeholder="Siparişinize Eklemek istediğiniz bir not var mı?" className="bg-[#FAF7F2] w-full"/>
    </div> 
    <hr className="bg-[#5F5F5F80] mt-20 w-full mx-50 "/>

    <section className="flex flex-row gap-2 m-20 justify-center">
    <div className="flex  ">
    <button  className="w-20 h-20 border rounded bg-yellow-400 text-xl" type="button" onClick={() => setFormData({...formData, adet: Math.max(1, formData.adet - 1)})} >-</button>
    <input 
    type="number"
    name="amount"
    value={amount}
    className="w-20 h-20  pl-2 text-center border rounded "/>
    <button  className="w-20 h-20  border rounded bg-yellow-400 text-xl "  type="button"  onClick={() => setFormData({...formData, adet: formData.adet + 1})}>+</button>
    </div>
   
   
    <div className="w-180 h-80 bg-[#FAF7F2] gap-2 flex flex-col justify-center">
    <h4 className="font-[barlow] font-bold m-10 text-2xl">Sipariş Toplamı</h4>
    <div className="font-[barlow] flex flex-row gap-120 font-normal m-10 text-xl">
    <p>Seçimler</p>
    <p>{topQ}</p>
    </div>
    <div className="flex flex-row gap-120 m-10">
  <p className="text-red-600 font-[barlow] font-normal text-xl">Toplam</p>
    <p>{total}</p>
    </div>
     <button  disabled={!isValid()} className="bg-yellow-400 h-100 mt-0">Sipariş Ver</button>
    </div>
   
    </section>
    </form>
</div>
)





}