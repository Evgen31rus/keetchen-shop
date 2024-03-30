import { useLayoutEffect, useState } from "react";
import IfiveSteps from "../fiveSteps";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainButton from "./MainButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type propsTypes = {
  props: IfiveSteps;
  index: number;
};

export default function FiveStepsCard({ props, index }: propsTypes) {
  const state = useSelector((state:RootState) => state.counter)
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [TriggerAnimation, setTriggerAnimation] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(`.FiveElementCard${index}`, {
      opacity: 1,
      right: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.FiveElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });

    gsap.to(`.FiveElementCard${index}`, {
      opacity: 1,
      left: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.FiveElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });
  }, [TriggerAnimation]);

  return (
    <div
      className={`FiveElementCard${index} flex flex-col w-[30%] h-[250px] rounded-lg bg-white m-5 top-menu-shadow
sm:w-[100%]
`}
      onLoad={() => setTriggerAnimation(true)}
    >
      <div
        className={`w-[100%] h-[35%] rounded-t-lg bg-cover bg-center relative cursor-pointer overflow-hidden`}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        style={{
          backgroundImage: `url('${props.photo}')`,
        }}
      >
        <div
          className={`${
            isMouseOver ? "  bg-white bg-opacity-65" : ""
          } flex absolute justify-center items-center w-[100%] h-[100%] transition duration-300 ease-in-out `}
        >
          <div
            className={`${
              !isMouseOver ? "translate-x-[200%] " : "translate-x-[0px]"
            } absolute flex w-[40%] transition duration-300 ease-in-out`}
          >
            <MainButton
              textNotActive={`Подробнее`}
              bgColor={`#E3010F`}
              colorText={`white`}
              width={100}
              heigt={40}
              actions={state.thisModal.consultation}
            />
          </div>
        </div>
      </div>

      <div className={`w-[100%] h-[65%] flex flex-col p-5 md:min-h-[70%]`}>
        <div className={`w-[100%] flex items-center mb-5`}>
          <div
            className={`flex w-[30px] h-[30px] rounded-full top-menu-shadow text-[#E3010F] border-[1px] border-[#E3010F] font-black text-[1.3rem] items-center justify-center
            md:w-[25px] md:h-[25px]
            `}
          >
            {index + 1}
          </div>
          <h2 className={`text-[1.3rem] font-bold ml-5 w-[80%] `}>
            {props.title}
          </h2>
        </div>
        <p className={`w-[80%] md:w-[100%] md:overflow-y-scroll`}>{props.info}</p>
      </div>
    </div>
  );
}
