import { useState } from "react";
import IHelpSearch from "../HelpSearch";
import MainButton from "./MainButton";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import ModalCostСalculation from "./ModalCostСalculation";
import ModalConsultation from "./ModalConsultation";

type propsTypes = {
  props: IHelpSearch[];
};

export default function Modal({ props }: propsTypes) {
  const state = useSelector((state:RootState) => state.counter)
  return (
    <div
      className={`
    ${state.isOpenCostСalculation||state.isOpenConsultation? ' translate-x-[-50%]  translate-y-[-50%]': 'translate-x-[-300vh]  translate-y-[200vh]'}
    ${state.isOpenCostСalculation? 'w-[50%] h-[95vh]' : 'w-[20%] h-[30vh]'}
        fixed  flex flex-col justify-around items-center z-50 top-[50%] left-[50%]   bg-white rounded-2xl transition ease-out duration-300`}
    >
        {
          state.isOpenCostСalculation&&!state.isOpenConsultation? 
          <ModalCostСalculation props={props}/>
          :
          <ModalConsultation/>
        }
    </div>
  );
}
