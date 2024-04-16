import { useSelector } from "react-redux";
import IHelpSearch from "../HelpSearch";
import Ibackend from "../Ibackend"
import MainButton from "./MainButton";
import { RootState } from "../store/store";
import StyleCard from "./StyleCard";
import backend from "../backend";
import FormKitchenCard from "./FormKitchenCard";
import RoomArea from "./RoomArea";

type propsTypes = {
    props: IHelpSearch[];
    propsSVG: string[]
    propsRoomArea: string[]
  };
export default function({props, propsSVG, propsRoomArea}:propsTypes){
    const state = useSelector((state:RootState) => state.counter)
    return(
        <>
<div className={`flex w-[90%]`}>
      <h1
          className={`text-[2.5rem] font-extrabold flex  flex-wrap
          sm:w-[100%] sm:text-[1.3rem]`}
        >
          Узнайте цену
          <span className={` block text-[#E3010F] ml-3 sm:m-0 sm:ml-2` }> вашей кухни</span>
        </h1>
        </div>
      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl  justify-around `}
      >
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5 mb-5 sm:text-[0.9rem]`}>Стиль:</h2>
        <div className={`flex w-[100%] h-[120px] justify-around sm:flex-wrap sm:h-[220px]`}>
          {
          props.map((el, index) => (
         <StyleCard props={el}/>
          ))}
         <StyleCard 
         photo={`https://s3-alpha-sig.figma.com/img/d011/b2ba/eb98478bdae989bd56e986a0f29fbf73?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIYT~vGlGrDG2sP5r54tWr2211zi2-olrACzgcfZ0sAcJE6ev6Hs8PRe20vhGrVLIMBAV2cgprAB8-mY75zZgo9f643qeub9IAmghQDJBKlJ5HD50hOGvQsJtHexvr5qpbDPsg-y9Do0Fb2AQxOfuRIzvudBOxDwyDCKdtxidZZmHg3lT1GIyyCS2eiFO5a65-Tj2mEQHtRjWE9Ms68aJtIhjQYppyqy147t4Kca2Es-6HC5GIjey2-0GNfZH91-xu4Nzs9bAFRoi-SYZ1KIE~t7wKcCbgDfm3ezKpTQtW5rz-EiUy7EgAWJr9ioYpZYxc5cz3KP-AihGaL2ca9ptg__`}
         title={`Другое`}
         />
        </div>
      </div>
   

      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl `}
      >
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5`}>Форма:</h2>
        <div className={`flex w-[100%] h-[80px] justify-around items-center flex-wrap sm:justify-around sm:min-h-[150px]`}>
       
{
  propsSVG.map(svg =>
  <FormKitchenCard props={svg}/>)
}

        </div>
      </div>
        
      
      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl sm:hidden`}
      >
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5`}>Площадь кухни:</h2>
        <div className={` flex w-[100%] h-[65px] justify-around items-center `}>
          {
            propsRoomArea.map(el=><RoomArea props={el}/>)
          }
          
        </div>


      </div>
      <div className={`w-[90%] `}>
        <p className={`w-[60%] text-[1.4rem] sm:hidden`}>
        Оставьте свой номер телефона сейчас и наш дизайнер свяжется с Вами в ближайшее время!
        </p>
        </div>
<div className={`flex w-[90%] sm:w-[100%] justify-center`}>
      <div className={`w-[30%] mr-5 sm:w-[40%]`}><MainButton textNotActive={`Номер телефона`} isBorder={true} width={100} heigt={40} /></div>
      <div className={`w-[30%] sm:w-[40%]`}><MainButton textNotActive={`Рассчитать стоимость`} colorText={`white`} width={100} heigt={40} bgColor={`#E3010F`} actions={state.thisModal.costСalculation}/></div>
      </div>
      </>
    )
}