
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import MainButton from "./MainButton";


export default function ModalConsultation(){
    const state = useSelector((state:RootState) => state.counter)
    return(
        <>
<div className={`flex w-[90%] justify-center`}>
    <p className={`w-[90%] h-[100%] text-[1.6rem] text-center`}>Оставьте свой номер телефона сейчас и наш дизайнер свяжется с Вами в ближайшее время!</p>

        </div>
<div className={`flex flex-col w-[90%] items-center`}>
      <div className={`w-[90%] mb-2`}><MainButton textNotActive={`Ваш телефон`} isBorder={true} width={100} heigt={40} /></div>
      <div className={`w-[90%] `}><MainButton textNotActive={`Получить консультацию`} colorText={`white`} width={100} heigt={40} bgColor={`#E3010F`} actions={state.thisModal.consultation}/></div>
      </div>
      </>
    )
}