import MainButton from "./MainButton";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useState } from "react";
import { HadleIsSearchForm } from "../store/validFormSlice";

type propsTypes = {
    MobileVisible: boolean
    textVisible:boolean
    bannerZone:boolean

}

export default function Form ({MobileVisible, textVisible, bannerZone}:propsTypes){
    const dispatch = useDispatch()
    useSelector((state:RootState) => state.counter)
    const [isClick, setIsClick]=useState<boolean>(false)
    const [valueInput, setValueInput]=useState<number>(8)
    const [validForm, setValidForm]=useState({
        numberLength: true,
    })
    const state = useSelector((state:RootState) => state)
return(
    <div className={` w-[100%]  h-[100%] justify-center rounded-2xl  
    ${!MobileVisible? 'flex ' : 'hidden'}`}
    >
        {
state.validFormSlice.isValidForm?
<div>
<div
      className={`flex  w-[100%]  h-[100%] rounded flex flex-col items-center p-5 mt-5 
sm:flex sm:flex-col
${bannerZone? 'items-center' : ''}
`}
    >
<p className={` flex text-[1.2rem] w-[90%] sm:flex  sm:w-[80%] text-center

`}
    >Заявка оформленна, скоро с вами свяжется наш специолист.</p>
<div className={`flex justify-center items-center rounded-full w-[100px] h-[100px]  top-menu-shadow mt-5
${bannerZone? 'hidden' : 'flex'}
`}>
<svg width="60" height="60" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.00019 8.99994C4.86858 9.0007 4.73812 8.97548 4.61628 8.92571C4.49444 8.87595 4.38363 8.80262 4.29018 8.70994L0.290185 4.70994C0.101881 4.52164 -0.00390625 4.26624 -0.00390625 3.99994C-0.00390625 3.73364 0.101881 3.47824 0.290185 3.28994C0.478489 3.10164 0.733883 2.99585 1.00019 2.99585C1.26649 2.99585 1.52188 3.10164 1.71019 3.28994L5.00019 6.58994L11.2902 0.289941C11.4785 0.101637 11.7339 -0.00415039 12.0002 -0.00415039C12.2665 -0.00415039 12.5219 0.101637 12.7102 0.289941C12.8985 0.478245 13.0043 0.733639 13.0043 0.999941C13.0043 1.26624 12.8985 1.52164 12.7102 1.70994L5.71019 8.70994C5.61674 8.80262 5.50593 8.87595 5.38409 8.92571C5.26225 8.97548 5.13179 9.0007 5.00019 8.99994Z" fill="#E3010F"/>
</svg>
</div>
    </div>
    </div>
:
<div className={`  justify-around  h-[100%] rounded-2xl items-center  ${!MobileVisible? 'flex flex-col' : 'hidden'}

`
}>
<p
      className={` text-[1.2rem] w-[90%]  mt-10 
      ${textVisible? 'flex' : 'hidden'}
      `}
    >
      Оставьте свой номер телефона и наш дизайнер свяжется с Вами в
      ближайшее время{" "}
    </p>
    
    <div className={`flex w-[80%] `}>
    <div className={`  border-[#E3010F] border-2   flex items-center justify-around rounded
    ${bannerZone? 'w-[60px] h-[25] text-[1.2rem]': 'w-[90px] h-[40px] text-[2rem]'}
    `}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="20" height="25" className={` border-[1.5px] border-black
    ${bannerZone? 'h-[17px] w-[25px]': 'h-[21px] w-[30px]'}
    `}>
        <rect fill="#fff" width="9" height="3"/><rect fill="#d52b1e" y="3" width="9" height="3"/>
        <rect fill="#0039a6" y="2" width="9" height="2"/>
        </svg>
        
        +7

    </div>
        <input type="text" className={`w-[80%]  border-[2px] border-l-0 border-[#E3010F]   rounded outline-0 pl-5 pr-5 text-center 
        ${bannerZone? 'h-[25] text-[1.2rem]': 'h-[40px] text-[2rem]'}
        `}
        value={valueInput!=8&&valueInput!=0? valueInput : ''}
        placeholder={`(XXX)-XX-XX`}
        onChange={(event:ChangeEvent<HTMLInputElement>)=>{

            if(Array.from(event.currentTarget.value).length<=10){
         
                setValueInput(Number(event.currentTarget.value))
                setValidForm({
                    numberLength: true
                })
            } 
            if(isNaN(Number(event.currentTarget.value))){
         
                setValueInput(8) 
            }

            
            
        }
            }
        />
         
</div>
<div className={`flex w-[80%] justify-center`}
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
      ><MainButton textNotActive={`Получить консультацию`} colorText={`white`} width={100} heigt={bannerZone? 30 : 40} bgColor={`#E3010F`} /></div>
      </div>
        
  
        }
    
  </div>
)
}