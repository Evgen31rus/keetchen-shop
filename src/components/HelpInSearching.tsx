import MainButton from "./MainButton";
import img1 from "../img/main/HelpInSearch/Frame 21202.png";
import img2 from "../img/main/HelpInSearch/Frame 21205.png";
import img3 from "../img/main/HelpInSearch/Frame 21206.png";
import HelpSearchCard from "./HelpSearchCard";
import IHelpSearch from "../HelpSearch";

type propsTypes = {
  props: IHelpSearch[];
};

export default function HelpInSearching({ props }: propsTypes) {
  return (
    <div className={`flex flex-col w-[80%] items-center m-auto `}>
      <div className={`flex flex-col m-5 w-[100%] ml-5`}>
        <h1
          className={`w-[80%]  text-[2.5rem] font-extrabold flex flex-col text-start sm:w-[100%]`}
        >
          Не нашли нужную модель?
          <span className={`block text-[#E3010F]`}>Она у нас точно есть!</span>
        </h1>
        <div
          className={`w-[80%]  h-[5px] items-start
sm:hidden
`}
        >
          <div className={` bg-[#E3010F] w-[5%] h-[100%] items-center`}></div>
        </div>
      </div>

      <div className={`text-[2.0rem] flex flex-col w-[100%] mb-10`}>
        <span>
          Мы установили более <span className={`text-[#E3010F]`}>3000</span>
          кухонь на заказ!
        </span>
        <span>Получите подробный каталог</span>
      </div>

      <div
        className={`flex w-[100%] h-[300px] justify-between 
sm:flex-col sm:h-[1700px]
`}
      >
        {props.map((el, index) => (
          <HelpSearchCard props={el} index={index} />
        ))}
      </div>
    </div>
  );
}
