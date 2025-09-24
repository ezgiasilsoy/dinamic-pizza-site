import { useState} from "react";
import logo from '../images/iteration-1-images/logo.svg';
import banner from '../images/iteration-1-images/home-banner.png';
export default function App(){
  
return(

    <header className="flex flex-col justify-center items-center">
      <div  className="bg-red-700 w-full  h-20 flex justify-center items-center">
      <img className="h-10 "src="images\iteration-1-images\logo.svg"/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className=""src="images\iteration-2-images\pictures\form-banner.png"/>
      <p className="mt-20">Anasayfa-Seçenekler-<span className="text-red-600">Sipariş Oluştur</span></p>
      <p>Position Absolute Acı Pizza</p>
      </div>
    </header>

)

  
}
