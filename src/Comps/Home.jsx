import { useHistory } from "react-router-dom";


export default function Home(){
     const goOrder = useHistory()
    function order(){
        goOrder.push("/order")

    }

    return (
      <div className="bg-[#FAF7F2]">
            <section className="min-h-screen  bg-no-repeat bg-cover bg-center flex flex-col  bg-[url('images/iteration-1-images/home-banner.png')] ">
            <div className="m-15 flex flex-col  justify-center items-center">
            <header >
               <img src="./images/iteration-1-images/logo.svg" alt="Logo" />
            </header>
            
            <main>
              <h4 className="text-[#FDC913] font-[Satisfy] flex justify-center text-2xl items-center mt-10">fırsatı kaçırma</h4>
              <h1 className="text-7xl font-[RobotoCondensed] font-thin text-white text-center ">
                KOD ACIKTIRIR <br />
                PİZZA, DOYURUR
              </h1>
              <button  onClick={order} className="mx-auto block m-10 bg-yellow-500 rounded-4xl w-32 font-[Barlow] h-10 p-2 text-center">ACIKTIM</button>
            </main>
            </div>
             </section>

              {/* İcons  */}
              <section className=" gap-20 justify-center h-20 items-center flex-row flex bg-white">
              <div className="flex-row flex ">
          
            <img src="/images/iteration-2-images/icons/1.svg" alt="YENİ! Kore" />
            <span className="flex items-center">YENİ! Kore</span>
            </div>
         
           <div  className="flex-row flex ">
            <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
            <span className="flex items-center">Pizza</span>
               </div>
            <div  className="flex-row flex ">
            <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
            <span className="flex items-center">Burger</span>
             </div>
            <div  className="flex-row flex ">
            <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
            <span className="flex items-center">Kızartmalar</span>
            </div>
             <div  className="flex-row flex " >
            <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food" />
            <span className="flex items-center">Fast food</span>
          </div>
          <div className="flex-row flex ">
            <img src="/images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek" />
            <span className="flex items-center">Gazlı İçecek</span>
          </div>
       
      </section>

               {/* Cards  */}
      <section className="flex flex-row justify-center items-center gap-2 mt-15" >
        
          
            <div className="bg-no-repeat bg-cover bg-[url(/images/iteration-2-images/cta/kart-1.png)] w-100 h-80">
              <h3 className="text-white text-5xl pt-7 pl-7">Özel <br />Lezzetus</h3>
              <p className="text-white text-l pt-3 pl-7">Position: Absolute Acı Burger</p>
              <button  onClick={order} className="ml-7 mt-2 bg-white rounded-4xl w-32 font-[Barlow] h-10 text-center text-xs text-red-500">SİPARİŞ VER</button>
            </div>
          
          
          
              <div className="flex flex-col justify-center items-center">
              <div className="bg-no-repeat bg-cover ml-0 bg-[url(/images/iteration-2-images/cta/kart-2.png)] h-40 w-100">
                <h3 className="text-white  text-xl pt-7 pl-7">Hackathlon <br /> Burger Menü</h3>
                <button  onClick={order} className="ml-7 mt-2 bg-white rounded-4xl w-22 font-[Barlow] h-8 text-center text-xs text-red-500">SİPARİŞ VER</button>
            </div>
            
              <div className="bg-no-repeat bg-cover bg-[url(/images/iteration-2-images/cta/kart-3.png)] h-40 w-100">
                <h3 className="text-black text-xl pt-7 pl-7"><span className="text-red-600">Çooooook</span> hızlı <br/> npm gibi kurye</h3>
                <button   onClick={order} className="ml-7 mt-2 bg-white rounded-4xl w-22 font-[Barlow] h-8 text-center text-xs text-red-500">SİPARİŞ VER</button>
            </div>
          </div>
        
      </section>

        {/* Metin */}
        <div className="mt-15">
        <p className="text-red-500 text-center text-2xl font-[satisfy]">en çok paketlenen menüler</p>
        <p className="text-black text-center text-4xl font-[barlow] font-medium">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>

         {/* Buttons*/}
          <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-row gap-5"> 
          <button className="ml-7 mt-2 bg-white rounded-4xl font-[Barlow] text-center text-l text-black flex flex-row w-40 h-15 items-center">
            <img className="pl-5" src="/images/iteration-2-images/icons/1.svg" alt="Ramen" />
            <span className="pl-2">Ramen</span>
          </button >
          <button className="ml-7 mt-2 bg-[#292929] rounded-4xl font-[Barlow] text-center text-l text-black flex flex-row w-40 h-15 items-center">
            <img className="pl-5" src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
            <span className="pl-2 text-white">Pizza</span>
          </button>
          <button className="ml-7 mt-2 bg-white rounded-4xl font-[Barlow] text-center text-l text-black flex flex-row w-40 h-15 items-center">
            <img className="pl-5" src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
            <span className="pl-2">Burger</span>
          </button>
          <button className="ml-7 mt-2 bg-white rounded-4xl font-[Barlow] text-center text-l text-black flex flex-row w-40 h-15 items-center">
            <img className="pl-5" src="/images/iteration-2-images/icons/4.svg" alt="French fries" />
            <span className="pl-2">French fries</span>
          </button>
          <button className="ml-7 mt-2 bg-white rounded-4xl font-[Barlow] text-center text-l text-black flex flex-row w-40 h-15 items-center">
            <img className="pl-5" src="/images/iteration-2-images/icons/5.svg" alt="Fast food" />
            <span className="pl-2">Fast food</span>
          </button>
          <button className="ml-7 mt-2 bg-white rounded-4xl font-[Barlow] text-center text-l text-black flex flex-row w-40 h-15 items-center">
            <img className="pl-5" src="/images/iteration-2-images/icons/6.svg" alt="Soft drinks" />
            <span className="pl-1">Soft drinks</span>
          </button>
        </div>
        </section>

        {/* rates*/}
        <section>
        <div className="flex flex-row justify-center items-center my-15 gap-10">
          <div className="flex  flex-col justify-center items-center rounded-3xl bg-white w-90 h-100">
            <img src="/images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
            <h4 className="font-semibold font-[barlow]">Terminal Pizza</h4>
            <div className="flex flex-row gap-15 mt-5">
              <span className="rating">4.9</span>
              <span className="reviews">(200)</span>
              <span className="price">60₺</span>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center rounded-3xl bg-white w-90 h-100">
            <img src="/images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
            <h4 className="font-semibold font-[barlow]">Position Absolute Acı Pizza</h4>
            <div className="flex flex-row gap-15 mt-5">
              <span className="rating">4.9</span>
              <span className="reviews">(928)</span>
              <span className="price">85₺</span>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center rounded-3xl bg-white w-90 h-100">
            <img src="/images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
            <h4 className="font-semibold font-[barlow]">useEffect Tavuklu Burger</h4>
            <div className="flex flex-row gap-15 mt-5">
              <span className="rating">4.9</span>
              <span className="reviews">(462)</span>
              <span className="price">75₺</span>
            </div>
          </div>
        </div>
      </section>
      {/*footer*/}
       <footer >
        <div className="flex flex-row justify-center items-center bg-[#1A1A1A] gap-50 p-20 ">
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