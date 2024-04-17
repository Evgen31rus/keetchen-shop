import MainButton from "./MainButton";
import backend from "../backend";
import KitchenAvertisingCard from "./KitchenAvertisingCard";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function KitchenAvertising() {
  const state = useSelector((state: RootState) => state.counter);
  return (
    <div className={`flex flex-col w-[80%] items-start m-auto mt-`}>
      <h1 className={`  w-[80%]  text-[2.5rem] font-extrabold`}>
        Почему выбирают{" "}
        <span className={`text-[#E3010F] bold`}> наши кухни?</span>{" "}
      </h1>
      <div
        className={`w-[80%]  h-[5px] items-start mt-3
sm:hidden
`}
      >
        <div className={` bg-[#E3010F] w-[5%] h-[100%] items-center`}></div>
      </div>

      <div
        className={`w-[100%] h-[600px]
sm:h-[1500px]
`}
      >
        <div className={`flex flex-wrap w-[100%] mt-10 justify-between`}>
          {backend.kitchenArguments.map((el, index) => (
            <KitchenAvertisingCard backend={el} index={index} />
          ))}
        </div>
        <div
          className={`flex w-[100%] justify-center items-center
sm:flex-col
`}
        >
          <MainButton
            textNotActive={`Рассчитать стоимость`}
            width={30}
            widthMobile={80}
            heigt={40}
            heightMobile={50}
            bgColor={`#E3010F`}
            colorText={`white`}
            margin={5}
            actions={state.thisModal.costСalculation}
          />
          <MainButton
            textNotActive={`Получить весь каталог`}
            width={30}
            widthMobile={80}
            heigt={40}
            heightMobile={50}
            isBorder={true}
            margin={5}
            actions={state.thisModal.consultation}
          />
        </div>
      </div>
    </div>
  );
}
