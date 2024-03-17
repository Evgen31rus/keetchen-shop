import Nav from "./Nav";
import NavMobile from "./NavMobile";
import headerBg from '../img/header/header.png'
import BannerZone from "./BannerZone";
import SaleZone from "./SaleZone";

export default function Header(){
    return(
        <div className={`relative  w-[100%] justify-center flex
        sm:flex-col
        `}>
        <div className={` top-menu-shadow absolute z-10 flex justify-center w-[100%]  bg-white bg-opacity-75
        sm:static`}>
            <Nav/>
            <NavMobile/>
        </div>
        <div className={` header-banner relative flex w-[100%] max-w-[1000px] h-[500px] bg-no-repeat bg-cover bg-center 
        sm:w-[100%] ` }>
            <BannerZone/>
         </div>
             <SaleZone/>

        </div>

    )
}