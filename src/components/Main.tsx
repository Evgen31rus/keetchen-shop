import IProductsObgect from "../module";
import AdditionalSolution from "./AdditionalSolutions";
import Designers from "./Designers";
import HelpInSearching from "./HelpInSearching";
import InfoWorks from "./InfoWorks";
import KitchenAvertising from "./KitchenAvertising";
import MainButton from "./MainButton";
import KitchenSales from "./kitchenSales";
import ProductCard from "./productCard";
import Reviews from "./Reviews";
import BannerZone from "./BannerZone";
import solutounsIMG from "../img/main/Solutions.png";
import FiveStepsIMG from "../img/main/fiveSteps.png";
import FiveSteps from "./FiveSteps";
import Ibackend from "../Ibackend";
import Questions from "./Questions";
import Contacts from "./Сontacts";

type propsTypes = {
  props: Ibackend;
};

export default function Main({ props }: propsTypes) {
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
    md:flex-nowrap md:w-[500%] 
    sm:flex-col sm:w-[100%] sm:items-center
    `}
          >
            {props.products.map((el, index) => {
              return <ProductCard product={el} id={index} />;
            })}
          </div>
        </div>
        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
          <HelpInSearching props={props.HelpSearch} />
        </div>
        <div
          className={`flex w-[100%]  max-w-[1000px] relative sm:overflow-y-hidden justify-center `}
        >
          <Designers props={props.disainers} />
        </div>

        <div
          className={`flex w-[100%]  max-w-[1000px]  justify-center overflow-hidden
sm:m-0 sm:h-[450px]
`}
        >
          <div className={`w-[80%]`}>
            <p className={`hidden text-[1.9rem] w-[70%] sm:flex mt-10`}>
              Оставьте свой номер телефона и наш дизайнер свяжется с Вами в
              ближайшее время{" "}
            </p>
            <div
              className={`hidden top-menu-shadow w-[100%] h-[200px] rounded flex flex-col items-center p-5 mt-5 
sm:flex sm:flex-col`}
            >
              <input
                type="text"
                placeholder={`Введите номер`}
                className={`top-menu-shadow w-[80%] h-[50px] p-5 border-[1px] rounded `}
              />
              <MainButton
                textNotActive={`Получить консультацию`}
                colorText={`white`}
                width={80}
                heigt={50}
                heightMobile={40}
                bgColor={`#E3010F`}
                margin={5}
              />
              <MainButton
                textNotActive={`Прикрепить свой проект`}
                width={80}
                heigt={50}
                heightMobile={40}
                isBorder={true}
              />
            </div>
          </div>
        </div>
        <div
          className={`w-[100%]  max-w-[1000px] bg-cover bg-center overflow-hidden`}
          style={{
            backgroundImage: `url(${solutounsIMG})`,
          }}
        >
          <AdditionalSolution props={props.additionalSolution} />
        </div>
        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
          <KitchenAvertising />
        </div>
        <div
          className={`w-[100%]  max-w-[1000px] bg-cover bg-center overflow-hidden`}
          style={{
            backgroundImage: `url('${FiveStepsIMG}')`,
          }}
        >
          <FiveSteps props={props} />
        </div>
        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
          <Reviews props={props} />
        </div>

        <div
          className={` header-banner relative flex w-[100%] max-w-[1000px] h-[500px] bg-no-repeat bg-cover bg-center overflow-hidden
        sm:w-[100%] `}
        >
          <BannerZone />
        </div>

        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
          <Questions />
        </div>

        <div
          className={`flex w-[100%]  max-w-[1000px] overflow-hidden bg-cover bg-bottom bg-no-repeat h-[200px] justify-center items-center flex-col relative 
sm:h-[400px] sm:bg-bottom`}
          style={{
            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/8d43/aa40/8afdfc03d4027af29cfb38e095d1eda8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XjDsFGWrfr7uXWownNrXyglbPcAP~1JBdOhxAJLg0E98cedYMAg8c0ItPCZoBGxvdN1xLVfozsjF2ECT4vZAP7COiTaj0r2qOBqBvnK93KYzZFSn9teLKdTX-9NzNIHaz-RUgcM8SuL1-I8Q74GxJ46dEN2m7jmql0PJnU4pT6stXTVECMZJLvoPWiRg~Zqp8Cxg~zoL-aUjjUnWiYZyIdkOVsYQoC-PibN-n4EHzH9o8NVfVGCCpq11JwHfOAwtWvW28wP8CYVG~Fsp2uI3R4c65g8O-PJWTktZtfmlduH77HGHdZXWJazdMnd1CRO87UNS2EOePt6Z6Ywri0BYNg__')`,
          }}
        >
          <div
            className={`absolute w-[100%] h-[100%] bg-white bg-opacity-60 z-20 justify-center items-center flex flex-col`}
          >
            <h2
              className={`w-[55%] flex-wrap justify-center text-center mt-10 font-bold text-[2.0rem]
    sm:w-[90%]`}
            >
              Оставьте свой номер телефона наш дизайнер свяжется с Вами в
              ближайшее время!
            </h2>
            <div
              className={`flex top-menu-shadow w-[100%] h-[200px] rounded flex justify-center items-center  
sm:flex-col sm:text-[1.3rem]
`}
            >
              <input
                type="text"
                placeholder="Введите номер телефона"
                className={` flex w-[20%] h-[30px] p-2 outline-none
sm:w-[90%] sm:h-[50px] sm:rounded-t-2xl sm:text-center sm:font-bold sm:text-[#0C0C0C]`}
              />
              <button
                className={`icon relative bg-[#E3010F] w-[15%] h-[30px] text-white
sm:w-[90%] sm:h-[50px] sm:rounded-b-2xl sm:font-bold`}
              >
                Задать вопрос
              </button>
            </div>
          </div>
        </div>

        <div className={`w-[100%]  max-w-[1000px] overflow-hidden`}>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
