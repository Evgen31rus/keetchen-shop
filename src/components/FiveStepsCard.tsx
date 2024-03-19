import { useLayoutEffect, useState } from "react"
import IfiveSteps from "../fiveSteps"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type propsTypes ={
    props: IfiveSteps,
    index: number,
}

export default function FiveStepsCard({props, index}:propsTypes){
    const [TriggerAnimation, setTriggerAnimation] = useState(false)
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=>{


        gsap.to(`.FiveElementCard${index}`, 
        {  
           opacity:1,
           right: 0,
           duration:2,
            scrollTrigger:{
                trigger:`.FiveElementCard${index}`,
                toggleActions: 'restart none reserve pouse'
            },
     
         }
        )

        gsap.to(`.FiveElementCard${index}`, 
        {  
           opacity:1,
           left: 0,
           duration:2,
            scrollTrigger:{
                trigger:`.FiveElementCard${index}`,
                toggleActions: 'restart none reserve pouse'
            },
     
         }
        )
       
    
    }, [TriggerAnimation])

return(
<div className={`FiveElementCard${index} flex flex-col w-[30%] h-[250px] rounded-lg bg-white m-5 top-menu-shadow
sm:w-[100%]
`}
onLoad={()=>setTriggerAnimation(true)}
>

    <div className={`w-[100%] h-[35%] rounded-t-lg bg-cover bg-center`}
    style={{
        backgroundImage: `url('${props.photo}')`
    }}
    >    </div>

<div className={`w-[100%] h-[65%] flex flex-col p-5`}>
<div className={`w-[100%] flex items-center mb-5`}>

<div className={`flex w-[30px] h-[30px] rounded-full top-menu-shadow text-[#E3010F] border-[1px] border-[#E3010F] font-black text-[1.3rem] items-center justify-center`}>{index+1}</div>
<h2 className={`text-[1.3rem] font-bold ml-5 `}>{props.title}</h2>

</div>
<p className={`w-[80%]`}>{props.info}</p>

    </div>

</div>
)
}