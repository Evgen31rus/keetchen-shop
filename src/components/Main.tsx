import IProductsObgect from "../module"
import AdditionalSolution from "./AdditionalSolutions"
import Designers from "./Designers"
import HelpInSearching from "./HelpInSearching"
import InfoWorks from "./InfoWorks"
import KitchenAvertising from "./KitchenAvertising"
import MainButton from "./MainButton"
import KitchenSales from "./kitchenSales"
import ProductCard from "./productCard"
import Reviews from "./Reviews"
import BannerZone from "./BannerZone"
import solutounsIMG from '../img/main/Solutions.png'
import FiveStepsIMG from '../img/main/fiveSteps.png'
import FiveSteps from "./FiveSteps"
import Ibackend from "../Ibackend"

type propsTypes = {
    props: Ibackend,
  
}

export default function Main({props}: propsTypes){
    return(
        <div className={`flex flex-col items-center justify-center w-[100%] overflow-hidden`}>
<div className={`flex flex-col flex max-w-[1000px] w-[65%] justify-center 
md:w-[100%] md:justify-around 
sm:w-[100%] sm:flex-wrap
`}>
<InfoWorks/>

</div>

<div className={`flex flex-col items-center w-[100%] overflow-hidden `}>


<div className={` main-fon w-[100%]  max-w-[1000px] justify-center overflow-hidden
md:overflow-scroll md:w-[100%] md:absolute
sm:static sm:overflow-visible sm:w-[100%] `}>

    <div>


    </div>

    <div className={`flex flex-wrap w-[100%] justify-center overflow-hidden
    md:flex-nowrap md:w-[500%] 
    sm:flex-col sm:w-[100%] sm:items-center
    `}>
{
props.products.map((el, index) => {
    return <ProductCard product={el} id={index}/>
})
}

</div>





</div>
<div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
<HelpInSearching props={props.HelpSearch}/>
</div>
<div className={`flex w-[100%]  max-w-[1000px] relative sm:overflow-y-hidden justify-center `}>
<Designers/>
</div>

<div className={`flex w-[100%]  max-w-[1000px]  justify-center overflow-hidden
sm:m-0
`}>
    <div className={`w-[80%]`}>
    <p className={`hidden text-[1.9rem] w-[70%] sm:flex mt-10`}>Оставьте свой номер телефона и наш дизайнер свяжется с Вами в ближайшее время 								</p>
    <div className={`hidden top-menu-shadow w-[100%] h-[200px] rounded flex flex-col items-center p-5 mt-5 
sm:flex sm:flex-col`}>

<input type="text" 
placeholder={`Введите номер`}
className={`top-menu-shadow w-[80%] h-[50px] p-5 border-[1px] rounded `}/>
<MainButton textNotActive={`Получить консультацию`} colorText={`white`} width={80} heigt={50} heightMobile={40} bgColor={`#E3010F`} margin={5}/>
<MainButton textNotActive={`Прикрепить свой проект`} width={80}  heigt={50} heightMobile={40} isBorder={true} />
</div>

    </div>

</div>
<div className={`w-[100%]  max-w-[1000px] bg-cover bg-center overflow-hidden`} style={{
    backgroundImage: `url(${solutounsIMG})`
}}>
<AdditionalSolution props={props.additionalSolution}/>
</div>
<div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
<KitchenAvertising/>
</div>
<div className={`w-[100%]  max-w-[1000px] bg-cover bg-center overflow-hidden`}
 style={{
    backgroundImage: `url('${FiveStepsIMG}')`
 }}>
<FiveSteps props={props}/>
</div>
<div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
<Reviews props={props}/>
</div>

<div className={` header-banner relative flex w-[100%] max-w-[1000px] h-[500px] bg-no-repeat bg-cover bg-center overflow-hidden
        sm:w-[100%] ` }>
            <BannerZone/>
 </div>




</div>




 </div>

        

    )
}