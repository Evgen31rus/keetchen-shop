
import AdditionalSolution from "./AdditionalSolutions";
import Designers from "./Designers";
import HelpInSearching from "./HelpInSearching";
import InfoWorks from "./InfoWorks";
import KitchenAvertising from "./KitchenAvertising";
import ProductCard from "./productCard";
import Reviews from "./Reviews";
import BannerZone from "./BannerZone";
import solutounsIMG from "../img/main/Solutions.png";
import FiveStepsIMG from "../img/main/fiveSteps.png";
import FiveSteps from "./FiveSteps";
import Ibackend from "../Ibackend";
import Questions from "./Questions";
import Contacts from "./Сontacts";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import backend from "../backend";
import Form from "./Form";

type propsTypes = {
  props: Ibackend;
};

export default function Main({ props }: propsTypes) {
  const state = useSelector((state:RootState) => state.counter)
  return (
    <div
      className={`flex flex-col items-center justify-center w-[100%] overflow-hidden`}
    >
      <div
        className={`flex flex-col flex max-w-[1000px] w-[65%] justify-center 
md:w-[100%] md:justify-around 
sm:w-[100%] sm:flex-wrap
`}
      >
        <InfoWorks />
      </div>

      <div className={`flex flex-col items-center w-[100%] overflow-hidden `}>
        <div
          className={` main-fon w-[100%]  max-w-[1000px] justify-center overflow-hidden
md:overflow-scroll md:w-[100%] md:absolute
sm:static sm:overflow-visible sm:w-[100%] `}
        >
          <div></div>

          <div
            className={`flex flex-wrap w-[100%] justify-center overflow-hidden
    md:hidden
    sm:flex sm:flex-col sm:w-[100%] sm:items-center
    `}
    id={backend.menu[0]}
          >
                      <h1
            className={`ml-10 w-[80%]  text-[2.5rem] font-extrabold flex flex-col text-start 
    sm:w-[100%]`}
          >
            Какие кухни
            <span className={`block text-[#E3010F]`}>мы производим?</span>
          </h1>
            {props.products.map((el, index) => {
              return <ProductCard product={el} id={index} />;
            })}
          </div>
        </div>
        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}
       id={backend.menu[1]}
        >
          <HelpInSearching props={props.HelpSearch} />
        </div>
        <div
          className={`flex w-[100%]  max-w-[1000px] relative sm:overflow-y-hidden justify-center 
          md:hidden sm:hidden`}
        >
          <Designers props={props.disainers} />
        </div>

        
        <div
          className={`w-[100%]  max-w-[1000px] bg-cover bg-center overflow-hidden`}
          id={backend.menu[2]}
          style={{
            backgroundImage: `url(${solutounsIMG})`,
          }}
        >
          <AdditionalSolution props={props.additionalSolution} />
        </div>
        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}
         id={backend.menu[3]}>
          <KitchenAvertising />
        </div>
        <div
          className={`w-[100%]  max-w-[1000px] bg-cover bg-center overflow-hidden`}
          id={backend.menu[4]}
          style={{
            backgroundImage: `url('${FiveStepsIMG}')`,
          }}
        >
          <FiveSteps props={props} />
        </div>
        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}
        id={backend.menu[5]}>
          <Reviews props={props} />
        </div>


        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
          <Questions />
        </div>

 

        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}
        id={backend.menu[6]}>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
