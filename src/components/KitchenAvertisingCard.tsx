import { useLayoutEffect, useState } from "react";
import IkitchenArguments from "../AvertisingCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainButton from "./MainButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type propsTypes = {
  backend: IkitchenArguments;
  index: number;
};

export default function KitchenAvertisingCard({ backend, index }: propsTypes) {
  const state = useSelector((state:RootState) => state.counter)
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [TriggerAnimation, setTriggerAnimation] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(`.ArgumentsElementCard${index}`, {
      opacity: 1,
      right: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.ArgumentsElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });

    gsap.to(`.ArgumentsElementCard${index}`, {
      opacity: 1,
      left: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.ArgumentsElementCard${index}`,
        toggleActions: "restart none reserve pouse",
      },
    });
  }, []);

  return (
    <>
      <div
        className={`ArgumentsElementCard${index}  w-[30%] min-h-[200px] border-box overflow-hidden flex flex-col mb-5 rounded-2xl
sm:w-[100%]
`}
        onLoad={() => setTriggerAnimation(true)}
      >
        <div
          className={`w-[100%] h-[40%] bg-cover bg-center rounded-t-2xl relative cursor-pointer overflow-hidden`}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
          style={{
            backgroundImage: `url('${backend.photo}')`,
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

        <h3 className={`text-[1.3rem] font-bold mt-5 mb-5 md:w-[100%]`}>{backend.title}</h3>
        <p className={`w-[80%] md:w-[100%]`}>{backend.description}</p>
      </div>
    </>
  );
}
