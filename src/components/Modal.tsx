import { useState } from "react";
import IHelpSearch from "../HelpSearch";
import MainButton from "./MainButton";

type propsTypes = {
  props: IHelpSearch[];
};

export default function Modal({ props }: propsTypes) {
  return (
    <div
      className={`fixed  flex flex-col justify-around items-center z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[95vh] bg-white rounded-2xl`}
    >
        <div className={`flex w-[90%]`}>
      <h1
          className={`text-[2.5rem] font-extrabold flex  sm:w-[100%]`}
        >
          Узнайте цену
          <span className={` block text-[#E3010F] ml-3`}> вашей кухни</span>
        </h1>
        </div>
      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl  justify-around`}
      >
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5 mb-5`}>Стиль:</h2>
        <div className={`flex w-[100%] h-[120px] justify-around `}>
          {
          props.map((el, index) => (
            <div
              className={`cursor-pointer top-menu-shadow flex flex-col w-[20%] h-[90px] rounded-2xl justify-around`}
            >
              <div
                className={`w-[100%] h-[70%] rounded-t-2xl bg-cover bg-center z-30`}
                style={{
                  backgroundImage: `url('${el.photo}')`,
                }}
              ></div>
              <div className={`h-[30%]`}>
                <h2 className={`flex w-[100%] h-[100%] justify-center items-center text-[1rem] font-semibold`}>{el.title}</h2>
              </div>
            </div>
          ))}
          <div
            className={`cursor-pointer top-menu-shadow flex flex-col w-[20%] h-[90px] rounded-2xl `}
          >
            <div
              className={`w-[100%] h-[70%] rounded-t-2xl bg-cover bg-center z-30`}
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/d011/b2ba/eb98478bdae989bd56e986a0f29fbf73?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIYT~vGlGrDG2sP5r54tWr2211zi2-olrACzgcfZ0sAcJE6ev6Hs8PRe20vhGrVLIMBAV2cgprAB8-mY75zZgo9f643qeub9IAmghQDJBKlJ5HD50hOGvQsJtHexvr5qpbDPsg-y9Do0Fb2AQxOfuRIzvudBOxDwyDCKdtxidZZmHg3lT1GIyyCS2eiFO5a65-Tj2mEQHtRjWE9Ms68aJtIhjQYppyqy147t4Kca2Es-6HC5GIjey2-0GNfZH91-xu4Nzs9bAFRoi-SYZ1KIE~t7wKcCbgDfm3ezKpTQtW5rz-EiUy7EgAWJr9ioYpZYxc5cz3KP-AihGaL2ca9ptg__')`,
              }}
            ></div>
            <div className={`h-[30%]`}>
            <h2 className={`flex w-[100%] h-[100%] justify-center items-center text-[1rem] font-semibold`}>Другое</h2>
            </div>
          </div>
        </div>
      </div>
   

      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl `}
      >
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5`}>Форма:</h2>
        <div className={`flex w-[100%] h-[80px] justify-around items-center `}>
       
       <div className={`cursor-pointer top-menu-shadow flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full`}>
       <svg width="29" height="4" viewBox="0 0 29 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="29" width="4" height="29" rx="1" transform="rotate(90 29 0)" fill="#E3010F"/>
</svg>

       </div>
       <div className={`cursor-pointer top-menu-shadow flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full`}>
       <svg width="29" height="14" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="4" width="4" height="29" rx="1" transform="rotate(-90 0 4)" fill="#E3010F"/>
<rect width="4" height="14" rx="1" fill="#E3010F"/>
</svg>

       </div>
       <div className={`cursor-pointer top-menu-shadow flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full`}>
       <svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="4" height="14" rx="1" fill="#E3010F"/>
<rect x="26" width="4" height="14" rx="1" fill="#E3010F"/>
<rect y="4" width="4" height="30" rx="1" transform="rotate(-90 0 4)" fill="#E3010F"/>
</svg>

       </div>
       <div className={`cursor-pointer top-menu-shadow flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full`}>
       <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="14" width="4" height="30" rx="1" transform="rotate(-90 0.5 14)" fill="#E3010F"/>
<rect x="0.5" y="4" width="4" height="30" rx="1" transform="rotate(-90 0.5 4)" fill="#E3010F"/>
</svg>

       </div>
       <div className={`cursor-pointer top-menu-shadow flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full`}>

       <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="14" width="4" height="19" rx="1" transform="rotate(-90 0.5 14)" fill="#E3010F"/>
<rect x="26.5" width="4" height="14" rx="1" fill="#E3010F"/>
<rect x="0.5" y="4" width="4" height="30" rx="1" transform="rotate(-90 0.5 4)" fill="#E3010F"/>
</svg>

       </div>
       <div className={`cursor-pointer top-menu-shadow flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full`}>
       <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="19.5" y="14" width="4" height="10" rx="1" transform="rotate(-90 19.5 14)" fill="#E3010F"/>
<rect x="4.5" y="14" width="4" height="14" rx="1" transform="rotate(180 4.5 14)" fill="#E3010F"/>
<rect x="27" width="4" height="14" rx="1" fill="#E3010F"/>
<rect x="1" y="4" width="4" height="30" rx="1" transform="rotate(-90 1 4)" fill="#E3010F"/>
</svg>

       </div>
         
        </div>
      </div>
        
      
      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl`}
      >
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5`}>Площадь кухни:</h2>
        <div className={` flex w-[100%] h-[65px] justify-around items-center `}>
        <div className={`cursor-pointer flex justify-center items-center text-[1.1rem] font-bold text-[#E3010F] top-menu-shadow flex w-[90px] h-[40px] bg-white rounded-full`}>До 5 м²</div>
        <div className={`cursor-pointer flex justify-center items-center text-[1.1rem] font-bold text-[#E3010F] top-menu-shadow flex w-[90px] h-[40px] bg-white rounded-full`}>До 8 м²</div>
        <div className={`cursor-pointer flex justify-center items-center text-[1.1rem] font-bold text-[#E3010F] top-menu-shadow flex w-[90px] h-[40px] bg-white rounded-full`}>До 15 м²</div>
        <div className={`cursor-pointer flex justify-center items-center text-[1.1rem] font-bold text-[#E3010F] top-menu-shadow flex w-[90px] h-[40px] bg-white rounded-full`}>Другое</div>
         
        </div>


      </div>
      <div className={`w-[90%] `}>
        <p className={`w-[60%] text-[1.4rem]`}>
        Оставьте свой номер телефона сейчас и наш дизайнер свяжется с Вами в ближайшее время!
        </p>
        </div>
<div className={`flex w-[90%] `}>
      <div className={`w-[30%] mr-5`}><MainButton textNotActive={`Номер телефона`} isBorder={true} width={100} heigt={40} /></div>
      <div className={`w-[30%] `}><MainButton textNotActive={`Рассчитать стоимость`} colorText={`white`} width={100} heigt={40} bgColor={`#E3010F`} /></div>
      </div>
    </div>
  );
}
