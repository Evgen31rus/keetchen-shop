import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainButton from "./MainButton";
import IHelpSearch from "../HelpSearch";

type propsTypes = {
  props: IHelpSearch;
  index: number;
};

export default function HelpSearchCard({ props, index }: propsTypes) {
  const [TriggerAnimation, setTriggerAnimation] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(`.HelpSearchElementCard${index}`, {
      opacity: 1,
      right: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.HelpSearchElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });

    gsap.to(`.HelpSearchElementCard${index}`, {
      opacity: 1,
      left: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.HelpSearchElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });
  }, [TriggerAnimation]);

  return (
    <div
      className={`HelpSearchElementCard${index} flex flex-col w-[30%] h-[250px] rounded-2xl bg-white m-5 top-menu-shadow
sm:w-[100%]  sm:h-[500px]
`}
      onLoad={() => setTriggerAnimation(true)}
    >
      <div
        className={`w-[100%] h-[35%] bg-center bg-cover rounded-t-2xl
sm:h-[60%]
`}
        style={{
          backgroundImage: `url('${props.photo}')`,
        }}
      ></div>
      <div
        className={` flex flex-col justify-around w-[100%] h-[60%] p-5
sm:h-[40%] 
`}
      >
        <h2
          className={`text-[1.5rem] font-bold ml-5
sm:text-[2.5rem]`}
        >
          {props.title}
        </h2>
        <p
          className={`ml-5 
sm:text-[1.5rem]`}
        >
          {props.description}
        </p>
        <MainButton
          textNotActive={`Подробнее`}
          width={60}
          heigt={40}
          bgColor={`#E3010F`}
          colorText={`white`}
        />
      </div>
    </div>
  );
}
