import Ibackend from "../Ibackend";
import FiveStepsCard from "./FiveStepsCard";

type propsTypes = {
  props: Ibackend
}

export default function FiveSteps({props}:propsTypes){
    return(
<div className={`flex flex-col w-[80%] items-start m-auto mt-`}>
          
          <h1 className={`  w-[80%]  text-[2.5rem] font-extrabold`}>5 шагов к Вашей <span className={`text-[#E3010F] bold`}> идеальной кухне</span> </h1>
  <div className={`w-[80%]  h-[5px] items-start mt-3
  sm:hidden
  `}>

    <div className={`w-[100%] h-[70%]`}></div>
  <div className={` bg-[#E3010F] w-[5%] h-[100%] items-center` }></div>
  </div>
<div className={`w-[100%] flex flex-wrap mt-5 justify-center`}>
  {
 props.fiveSteps.map((el, i) =>
  <FiveStepsCard props={el} index={i}/>
 )
  }
  </div>
      </div>
    )
}