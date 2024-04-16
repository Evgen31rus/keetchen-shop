import { useState } from "react";
import IHelpSearch from "../HelpSearch";

type propsTypes ={
    props?: IHelpSearch
    title?:string,
    photo?:string
}

export default function StyleCard({props, title,  photo}:propsTypes) {
    const [isClick, setIsClick] = useState<boolean>(false)
    const HandleIsClick = () => setIsClick(!isClick)
  return (
    props? 
    <div
    className={`
    ${isClick? 'bg-[#D3D3D3]' : ''}
    cursor-pointer top-menu-shadow flex flex-col w-[20%] h-[90px] transition-all duration-500 rounded-2xl justify-around sm:w-[40%] `}
    onClick={HandleIsClick}
  >
    <div
      className={`w-[100%] h-[70%] rounded-t-2xl bg-cover bg-center z-30`}
      style={{
        backgroundImage: `url('${props.photo}')`,
      }}
    ></div>
    <div className={`h-[30%]`}>
      <h2 className={`flex w-[100%] h-[100%] justify-center items-center text-[1rem] font-semibold sm:text-[0.8rem]`}>{props.title}</h2>
    </div>
  </div>
  :
  <div
  className={`
  ${isClick? 'bg-[#D3D3D3]' : ''}
  cursor-pointer top-menu-shadow flex flex-col w-[20%] h-[90px] transition-all duration-500 rounded-2xl justify-around sm:w-[40%] `}
  onClick={HandleIsClick}
>
  <div
    className={`w-[100%] h-[70%] rounded-t-2xl bg-cover bg-center z-30`}
    style={{
      backgroundImage: `url('${photo}')`,
    }}
  ></div>
  <div className={`h-[30%]`}>
    <h2 className={`flex w-[100%] h-[100%] justify-center items-center text-[1rem] font-semibold sm:text-[0.8rem]`}>{title}</h2>
  </div>
</div>
  );
}
