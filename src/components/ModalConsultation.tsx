
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import MainButton from "./MainButton";
import { ChangeEvent, useState } from "react";
import { Root } from "react-dom/client";
import { HadleIsSearchForm } from "../store/validFormSlice";



export default function ModalConsultation(){
    const dispatch = useDispatch()
    useSelector((state:RootState) => state.counter)
    const [isClick, setIsClick]=useState<boolean>(false)
    const [valueInput, setValueInput]=useState<number>(8)
    const [validForm, setValidForm]=useState({
        numberLength: true,
    })
    const state = useSelector((state:RootState) => state)
    return(
        <>
        {
            !state.validFormSlice.isValidForm?
<>
            <div className={`flex w-[90%] justify-center`}>
    <p className={`w-[90%] h-[100%] text-[1.6rem] text-center`}>Оставьте свой номер телефона сейчас и наш дизайнер свяжется с Вами в ближайшее время!</p>

        </div>
<div className={`flex flex-col w-[90%] items-center`}>
    <div 
    className={`${!isClick? 'hidden':'flex'} w-[90%] mb-2  flex-col`}>
<p className={`${validForm.numberLength? 'h-[0px]':'h-[15px]'} text-[#E3010F] mb-1 transition-all` }>
    {!validForm.numberLength? 'Номер менее 10 цифр ': ''}
    </p>
        <input type="text" className={`w-[100%] h-[40px] border-[2px] border-[#E3010F] rounded text-[2rem] outline-0 pl-5 pr-5 text-center `}
        value={valueInput}
        onChange={(event:ChangeEvent<HTMLInputElement>)=>{

            if(Array.from(event.currentTarget.value).length<=10){
         
                setValueInput(Number(event.currentTarget.value))
                setValidForm({
                    numberLength: true
                })
            } 
            if(isNaN(Number(event.currentTarget.value))||event.currentTarget.value.toString().split('')[0]!='8'){
         
                setValueInput(8)
            }

            
            
        }
            }
        />
    </div>
      <div className={`${isClick? 'hidden':'flex'} w-[90%] mb-2`}
      onClick={()=>setIsClick(!isClick)}
      ><MainButton textNotActive={`Ваш телефон`} isBorder={true} width={100} heigt={40} /></div>
      <div className={`w-[90%] `}
      onClick={()=>{
        if(valueInput.toString().split('').length<10){
setValidForm({
    numberLength: false,
}
)

        }else{
            dispatch(HadleIsSearchForm(valueInput))
        }
      }}
      ><MainButton textNotActive={`Получить консультацию`} colorText={`white`} width={100} heigt={40} bgColor={`#E3010F`} /></div>
      </div>
      </>

            :
            <div className={`flex flex-col justify-around items-center`}>
               <p className={`w-[100%] h-[50%] text-[1.6rem] text-center p-10`}>Заявка отправленна скоро с вами свяжется наш специолист</p> 
               <div className={`w-[60%] h-[40%] flex mt-10 z-10`}>
               <MainButton textNotActive={`Вернуться на сайт`} colorText={`white`} width={100} heigt={40} bgColor={`#E3010F`}  actions={state.counter.thisModal.consultation}/>
               </div>
            </div>



        }

      </>
    )
}