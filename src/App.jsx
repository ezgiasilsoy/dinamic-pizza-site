import { useState} from "react";
import logo from '../images/iteration-1-images/logo.svg';
import banner from '../images/iteration-1-images/home-banner.png';
export default function App(){
  const dough = ["S", "M", "L"]
  const topping =["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis","Soğan", "Sucuk","Biber","Kabak","Kanada Jambonu","Domates","Jalepeno","Sucuk"]
  const[size, setSize] =useState()
  const[amount, setAmount] = useState(1)
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
    <form>
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

    onChange={() => setSize(size)}/>{size}</label>
)}
</div>
    </div>
    <div className="flex flex-col">
  <label className="font-[barlow] font-semibold" >Hamur Seç <span className="text-red-500">*</span></label>
  <select
    name="dough"
    className="border rounded-md p-2 w-100 mt-2  bg-[#FAF7F2]"
    
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
    {topping.map((t)=>
    <label key={t} >
    <input 
    type="checkbox"
    value={t} 
    name="topping"/>{t}</label>)
    }
  </div>
    <div className="flex flex-col justify-center ml-50 mt-20 mr-50 gap-5">
    <label>Sipariş Notu</label>
    <textarea placeholder="Siparişinize Eklemek istediğiniz bir not var mı?" className="bg-[#FAF7F2] w-full"/>
    </div>
    <hr className="bg-[#5F5F5F80] mt-20 w-full mx-50 "/>

    <section className="flex flex-row gap-2 m-20 justify-center">
    <div className="flex  ">
    <button  className="w-20 h-20 border rounded bg-yellow-400 text-xl ">-</button>
    <input 
    type="number"
    name="amount"
    value={amount}
    className="w-20 h-20  pl-2 text-center border rounded "/>
    <button  className="w-20 h-20  border rounded bg-yellow-400 text-xl ">+</button>
    </div>
   
   
    <div className="w-180 h-80 bg-[#FAF7F2] gap-2 flex flex-col justify-center">
    <h4 className="font-[barlow] font-bold m-10 text-2xl">Sipariş Toplamı</h4>
    <div className="font-[barlow] font-normal m-10 text-xl">
    <p>Seçimler</p>
    <p></p>
    </div>
    <div>

    <p className="text-red-600 font-[barlow] font-normal m-10 text-xl">Toplam</p>
    <p></p>
    </div>
    </div>
    </section>
    </form>
</div>
)

  
}
