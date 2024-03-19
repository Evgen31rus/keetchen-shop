import MainButton from "./MainButton";
import ImgFerstCard from '../img/main/AditionalSolutions/img-3.png'
import ImgSecondCard from '../img/main/AditionalSolutions/img-1.png'
import ImgThirdCard from '../img/main/AditionalSolutions/img-2.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useState } from "react";

export default function AdditionalSolution() {
  // const [TriggerAnimation, setTriggerAnimation] = useState(false)
  //   gsap.registerPlugin(ScrollTrigger)
  //   useLayoutEffect(()=>{


  //       gsap.to(`.FiveElementCard${index}`, 
  //       {  
  //          opacity:1,
  //          right: 0,
  //          duration:2,
  //           scrollTrigger:{
  //               trigger:`.FiveElementCard${index}`,
  //               toggleActions: 'restart none reserve pouse'
  //           },
     
  //        }
  //       )

  //       gsap.to(`.FiveElementCard${index}`, 
  //       {  
  //          opacity:1,
  //          left: 0,
  //          duration:2,
  //           scrollTrigger:{
  //               trigger:`.FiveElementCard${index}`,
  //               toggleActions: 'restart none reserve pouse'
  //           },
     
  //        }
  //       )
       
    
  //   }, [TriggerAnimation])


  return (
    <div className={`flex flex-col w-[80%] items-start m-auto mt-`}>
        
        <h1 className={`  w-[80%]  text-[2.5rem] font-extrabold`}>Наши <span className={`text-[#E3010F] bold`}> дополнительные <br/> решения</span> для Вашей кухни</h1>
<div className={`w-[80%]  h-[5px] items-start mt-3
sm:hidden
`}>
<div className={` bg-[#E3010F] w-[5%] h-[100%] items-center` }></div>
</div>


      <div className={`flex w-[100%] justify-between mb-10 mt-10 font-semibold  
      sm:flex-col
      `}>

        <div className={`top-menu-shadow w-[30%] h-[250px] fex-col items-center rounded-lg 
        sm:w-[100%] sm:mb-10`}>
          <div className={`w-[100%] h-[60%] bg-center bg-cover rounded-t-lg`} style={{
            backgroundImage: `url(${ImgFerstCard})`
          }}></div>
          <h3 className={`text-[1.3rem] pl-5 pt-5`}>Подключение техники для кухни</h3>
          <MainButton textNotActive={`Получить консультацию`} width={80} heigt={30} bgColor={`#E3010F`} colorText={`white`} margin={5} />
        </div>

        <div className={`top-menu-shadow w-[30%] h-[250px] fex-col items-center rounded-lg
         sm:w-[100%] sm:mb-10
        `}>
        <div className={`w-[100%] h-[60%] bg-center bg-cover rounded-t-lg `} style={{
            backgroundImage: `url(${ImgSecondCard})`
          }}></div>
          <h3 className={`text-[1.3rem] pl-5 pt-5`}>Подключение освещения</h3>
          <MainButton textNotActive={`Получить консультацию`} width={80} heigt={30} bgColor={`#E3010F`} colorText={`white`} margin={5} />
        </div>
        <div className={`top-menu-shadow w-[30%] h-[250px] fex-col items-center rounded-lg
         sm:w-[100%] sm:mb-10
        `}>
        <div className={`w-[100%] h-[60%] bg-center bg-cover rounded-t-lg`} style={{
            backgroundImage: `url(${ImgThirdCard})`
          }}></div>
          <h3 className={`text-[1.3rem] pl-5 pt-5`}>Подключение сантехники</h3>
          <MainButton textNotActive={`Получить консультацию`} width={80} heigt={30} bgColor={`#E3010F`} colorText={`white`} margin={5} />
        </div>

      </div>

    </div>
  );
}
