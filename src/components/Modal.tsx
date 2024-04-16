import { useState } from "react";
import IHelpSearch from "../HelpSearch";
import MainButton from "./MainButton";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import ModalCostСalculation from "./ModalCostСalculation";
import ModalConsultation from "./ModalConsultation";
import ModileMenu from "./MobileMenu";
import Ibackend from "../Ibackend";
import { HadleIsOpenModal } from "../store/isOpenModalSlice";

type propsTypes = {
  props: IHelpSearch[];
  propsMobile: Ibackend
};

export default function Modal({ props, propsMobile }: propsTypes) {
  const state = useSelector((state:RootState) => state.counter)
  const dispatch = useDispatch()
  return (
    <div
      className={`
    
    ${state.isOpenCostСalculation||state.isOpenConsultation||state.isOpenMobileMenu? ' translate-x-[-50%]  translate-y-[-50%]': 'translate-x-[-180%]  translate-y-[200vh]'}
    ${state.isOpenCostСalculation||state.isOpenMobileMenu? 'w-[70%] max-w-[800px] h-[95vh] sm:w-[90%]' : 'w-[30%] h-[30vh] md:w-[90%] sm:w-[90%] sm:h-[35vh]'}
     
        fixed  flex flex-col justify-around items-center z-50 top-[50%] left-[50%]   bg-white rounded-2xl transition ease-out duration-500`}

  
   >
{
  !state.isOpenMobileMenu?
        
          state.isOpenCostСalculation&&!state.isOpenConsultation? 
          <ModalCostСalculation props={props} propsSVG={propsMobile.svg} propsRoomArea={propsMobile.roomArea}/>
          :
          <ModalConsultation/>
        
        
          :
          <ModileMenu props={propsMobile}/>
        }
            <svg width="69" height="64" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg"
            className={`absolute top-[-20px] right-[-20px] cursor-pointer`}
            onClick={()=>dispatch(HadleIsOpenModal(state.thisModal.modal))}
            >
<path d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z" fill="#E3010F"/>
</svg>

    </div>
  );
}
