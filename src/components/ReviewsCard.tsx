import { useLayoutEffect, useState } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MainButton from "./MainButton"
import IReviews from "../IReviews"
import {ReactComponent as star} from '../img/star.svg'

type propsTypes = {
props: IReviews,
}

export default function ReviewsCard({props }:propsTypes){

    
    const starsCount = () =>{
        const count = []
        for (let index = 0; index < props.rating; index++) {
            count.push(1);   
        }
        return count
    }

    return(
        <div className={` flex
        top-menu-shadow max-w-[98%] min-w-[98%] h-[260px] bg-white m-5 rounded-lg p-10 items-center justify-center
        sm:flex-col sm:h-[600px] sm:max-w-[95%] sm:min-w-[95%] sm:justify-around
        `}>

            <div className={`w-[50%] h-[100%] flex flex-col justify-around
            sm:w-[100%]`}>

<p className={`text-[#818181] text-[0.9rem] `}>{props.data} </p>
<div className={`flex items-center`}>
    <div className={`w-[50px] h-[50px] rounded-full bg-cover bg-center hidden mr-5
    sm:flex`}
    style={{
        backgroundImage: `url(${props.userPhoto})`
    }}
    > </div>
    <div className={`flex flex-col`}>
    <h3 className={`text-[#0C0C0C] text-[1.5rem] font-extrabold`}>{props.userName} {props.userLastName}</h3>
    <p className={`text-[#E3010F] hidden sm:flex`}>{starsCount().map(el=> el)} </p>
    </div>
</div>

<p className={`text-[#E3010F] sm:hidden`}>{starsCount().map(el=> el)} </p>
<p className={`text-[1rem] mb-5`}>{props.reviews} </p>
<MainButton textNotActive={`Получить дизайн проект`} bgColor={`#E3010F`} colorText={`white`} width={70} heigt={30} hiddenMobile={true}/>

            </div>
          
          
          
            <div className={`flex w-[50%] h-[100%] justify-around items-end
            sm:w-[100%]`}>

<div 
className={`w-[40%] h-[75%] bg-center bg-cover rounded-lg
sm:hidden`}
style={{
    backgroundImage: `url('${props.userPhoto}')`
}}></div>
<div 
className={`w-[40%] h-[75%] bg-center bg-cover rounded-lg
sm:w-[100%]`}
style={{
    backgroundImage: `url('${props.productPhoto}')`
}}></div>
            </div>
<div className={`hidden sm:flex w-[100%] h-[100px]`}>
<MainButton textNotActive={`Получить дизайн проект`} bgColor={`#E3010F`} colorText={`white`} width={70} heigt={50} mdHidden={true} />

</div>

        </div>
    )
}