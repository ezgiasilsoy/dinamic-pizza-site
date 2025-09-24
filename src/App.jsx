import { useState} from "react";
import logo from '../images/iteration-1-images/logo.svg';
import banner from '../images/iteration-1-images/home-banner.png';
export default function App(){
  
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
        <div className="mt-20 font-[barlow] text-l" >
        <p >Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.<br/> 
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, <br/>
        daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, <br/>
        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli <br/>
         lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        </div>
     
      
      </div>
    </header>
    
    <section></section>

)

  
}
