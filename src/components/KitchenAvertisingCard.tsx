import { useLayoutEffect, useState } from "react";
import IkitchenArguments from "../AvertisingCard";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


type propsTypes ={
  backend: IkitchenArguments
  index: number
}


export default function KitchenAvertisingCard({backend, index}:propsTypes) {

  const [TriggerAnimation, setTriggerAnimation] = useState(false)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(()=>{


      gsap.to(`.ArgumentsElementCard${index}`, 
      {  
         opacity:1,
         right: 0,
         duration:2,
          scrollTrigger:{
              trigger:`.ArgumentsElementCard${index}`,
              toggleActions: 'restart none reserve pouse'
          },
   
       }
      )

      gsap.to(`.ArgumentsElementCard${index}`, 
      {  
         opacity:1,
         left: 0,
         duration:2,
          scrollTrigger:{
              trigger:`.ArgumentsElementCard${index}`,
              toggleActions: 'restart none reserve pouse'
          },
   
       }
      )
     
  
  }, [])

  return (
    <>

<div className={`ArgumentsElementCard${index}  w-[30%] min-h-[200px] border-box overflow-hidden flex flex-col mb-5
sm:w-[100%]
`}
onLoad={()=>setTriggerAnimation(true)}
>
    <div className={`w-[100%] h-[40%] bg-cover bg-center rounded-lg`}
    
    style={{
        backgroundImage: `url('${backend.photo}')`
    }}>

    </div>

<h3 className={`text-[1.3rem] font-bold mt-5 mb-5`}>{backend.title}</h3>
<p className={`w-[80%]`}>{backend.description}</p>
</div>

    </>
  );
}
