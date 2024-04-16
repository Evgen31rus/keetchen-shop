import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainButton from "./MainButton";
import IAdditionalSolution from "../IAdditionalSolutions";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type propsTypes = {
  props: IAdditionalSolution;
  index: number;
};

export default function AditionalSolutionsCard({ props, index }: propsTypes) {
  const state = useSelector((state:RootState) => state.counter)
  const [TriggerAnimation, setTriggerAnimation] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(`.AdditionalSolutionsElementCard${index}`, {
      opacity: 1,
      right: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.AdditionalSolutionsElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });

    gsap.to(`.AdditionalSolutionsElementCard${index}`, {
      opacity: 1,
      left: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.AdditionalSolutionsElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });
  }, [TriggerAnimation]);

  return (
    <div
      className={`AdditionalSolutionsElementCard${index} flex flex-col w-[30%] h-[250px]  bg-white m-5 top-menu-shadow rounded-2xl
sm:w-[100%]  sm:h-[400px] md:h-[300px]
`}
      onLoad={() => setTriggerAnimation(true)}
    >
      <div
        className={`w-[100%] h-[60%] bg-center bg-cover rounded-t-2xl`}
        style={{
          backgroundImage: `url(${props.photo})`,
        }}
      ></div>
      <div
        className={`top-menu-shadow w-[100%] h-[40%] flex flex-col  rounded-lg  justify-around
        sm:w-[100%] `}
      >
        <h3
          className={`text-[1.3rem] pl-5 pt-5 
          sm:text-[1.8rem]`}
        >
          {props.title}
        </h3>
        <div className={`w-[100%] `}>
        <MainButton
          textNotActive={`Получить консультацию`}
          width={80}
          heigt={40}
          bgColor={`#E3010F`}
          colorText={`white`}
          margin={5}
          actions={state.thisModal.consultation}
          
        />
        </div>
      </div>
    </div>
  );
}
