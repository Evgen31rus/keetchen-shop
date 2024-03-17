import MainButton from "./MainButton";
import img1 from '../img/main/HelpInSearch/Frame 21202.png'
import img2 from '../img/main/HelpInSearch/Frame 21205.png'
import img3 from '../img/main/HelpInSearch/Frame 21206.png'

export default function HelpInSearching(){
    return(
        <div className={`flex flex-col w-[80%] items-center m-auto `}>

<div className={`flex flex-col m-5 w-[100%] `}>
    <h1 className={`w-[80%]  text-[2.5rem] font-extrabold flex flex-col text-start
    sm:text-center`}>
Не нашли нужную модель?
<span className={`block text-[#E3010F]`}>Она у нас точно есть!</span>
</h1>
<div className={`w-[80%]  h-[5px] items-start
sm:hidden
`}>
<div className={` bg-[#E3010F] w-[5%] h-[100%] items-center` }></div>
</div>
</div>

<div className={`text-[2.0rem] flex flex-col w-[100%] mb-10`}>
    <span>Мы установили более <span className={`text-[#E3010F]`}>3000</span>кухонь на заказ!</span>
    <span>Получите подробный каталог</span>
</div>

<div className={`flex w-[100%] h-[300px] justify-between 
sm:flex-col sm:h-[1300px]
`}>

<div className={`w-[30%] h-[250px] bg-white rounded top-menu-shadow
sm:w-[100%] sm:h-[400px] 
`}>

<div className={`w-[100%] h-[55%] bg-cover rounded`}

style={{
    backgroundImage: `url('${img1}')`
}}>

</div>

<h2 className={`text-[1.5rem] font-bold ml-5
sm:text-[2.5rem]
`}>Современные кухни</h2>
<span className={`ml-5 font-bold
sm:text-[1.5rem]
`}>У нас более <span className={`text-[#E3010F] font-extrabold`}>650 </span> моделей</span>
<span className={`ml-5 block font-bold
sm:text-[1.5rem]
`}>современных кухонь.</span>

<MainButton textNotActive={`Получить каталог`} bgColor={`#E3010F`} colorText={`white`} heigt={30} width={50}  margin={5}/>
</div>


<div className={`w-[30%] h-[250px] bg-white rounded top-menu-shadow
sm:w-[100%] sm:h-[400px]
`}>

<div className={`w-[100%] h-[55%] bg-cover rounded`}

style={{
    backgroundImage: `url('${img2}')`
}}>

</div>

<h2 className={`text-[1.5rem] font-bold ml-5
sm:text-[2.5rem]
`}>Кухни Лофт</h2>
<span className={`ml-5 font-bold
sm:text-[1.5rem]
`}>У нас более <span className={`text-[#E3010F] font-extrabold`}>470 </span> моделей кухонь</span>
<span className={`ml-5 block font-bold
sm:text-[1.5rem]
`}>в стиле Лофт.</span>

<MainButton textNotActive={`Получить каталог`} bgColor={`#E3010F`} colorText={`white`} heigt={30} width={50}  margin={5}/>
</div>



<div className={`w-[30%] h-[250px] bg-white rounded top-menu-shadow
sm:w-[100%] sm:h-[400px]
`}>

<div className={`w-[100%] h-[55%] bg-cover rounded`}

style={{
    backgroundImage: `url('${img3}')`
}}>

</div>

<h2 className={`text-[1.5rem] font-bold ml-5
sm:text-[2.5rem]
`}>Классические кухни</h2>
<span className={`ml-5 font-bold 
sm:text-[1.5rem]
`}>У нас более <span className={`text-[#E3010F] font-extrabold`}>730</span> моделей</span>
<span className={`ml-5 block font-bold
sm:text-[1.5rem]
`}>классических кухонь.</span>

<MainButton textNotActive={`Получить каталог`} bgColor={`#E3010F`} colorText={`white`} heigt={30}  heightMobile={100} width={50}  margin={5}/>
</div>

</div>

        </div>
    )
}