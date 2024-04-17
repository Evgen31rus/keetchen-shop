import { RefObject, useRef, useState } from "react";
import Ibackend from "../Ibackend";
import ReviewsCard from "./ReviewsCard";

type propsTypes = {
  props: Ibackend;
};

export default function Reviews({ props }: propsTypes) {
  const SliderLineWidth = useRef(null) as RefObject<HTMLDivElement> | null;
  const SliderRef = useRef(null) as RefObject<HTMLDivElement> | null;
  const [width, setWidth] = useState<number>(0);

  return (
    <div
      className={`flex flex-col w-[80%] min-h-[400px] items-start m-auto 
      sm:h-[650px]
      `}
    >
      <h1 className={`  w-[80%]  text-[2.5rem] font-extrabold`}>
        Нам <span className={`text-[#E3010F] bold`}> благодарны</span>{" "}
      </h1>
      <div
        className={`w-[80%]  h-[5px] items-start mt-3
  sm:hidden
  `}
      >
        <div className={` bg-[#E3010F] w-[5%] h-[100%] items-center`}></div>
      </div>

      <div
        className={`w-[100%] h-[270px] flex items-center relative
        md:h-[300px]
sm:h-[520px]`}
      >
        <div
          className={`z-20 absolute w-[40px] h-[40px] rounded-full bg-[#E3010F] left-[-3%] cursor-pointer transition flex justify-center items-center hover:opacity-80 
sm:top-[15%] sm:left-[-6%]`}
          onClick={() => {
            setWidth((prev) =>
              SliderRef?.current != null
                ? Math.min(prev + SliderRef.current?.offsetWidth, 0)
                : 0
            );
          }}
        >
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.68907 10.9136L2.56454 6.49466L6.68907 2.07571C7.10364 1.63153 7.10364 0.914022 6.68907 0.469849C6.27449 0.0256754 5.60478 0.0256754 5.19021 0.469849L0.310934 5.69743C-0.103645 6.1416 -0.103645 6.85911 0.310934 7.30328L5.19021 12.5309C5.60478 12.975 6.27449 12.975 6.68907 12.5309C7.09301 12.0867 7.10364 11.3578 6.68907 10.9136Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className={`w-[100%] h-[100%] overflow-hidden top-menu-shadow rounded-lg`}
          ref={SliderRef}
        >
          <div
            className={`flex transition duration-300 ease-in-out `}
            ref={SliderLineWidth}
            style={{
              transform: `translateX(${width}px)`,
            }}
          >
            {props.reviews.map((el) => (
              <ReviewsCard props={el} />
            ))}
          </div>
        </div>
        <div
          className={`z-20 absolute w-[40px] h-[40px] rounded-full bg-[#E3010F] right-[-3%] cursor-pointer transition flex justify-center items-center hover:opacity-80 
sm:top-[15%] sm:right-[-6%]`}
          onClick={() => {
            setWidth((prev) =>
              SliderRef?.current != null && SliderLineWidth?.current != null
                ? -SliderLineWidth?.current.offsetWidth *
                    (SliderLineWidth?.current.childNodes.length - 2) <=
                  width
                  ? prev - SliderRef.current?.offsetWidth
                  : prev
                : 0
            );
          }}
        >
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.310934 10.9136L4.43546 6.49466L0.310934 2.07571C-0.103645 1.63153 -0.103645 0.914022 0.310934 0.469849C0.725513 0.0256754 1.39522 0.0256754 1.80979 0.469849L6.68907 5.69743C7.10364 6.1416 7.10364 6.85911 6.68907 7.30328L1.80979 12.5309C1.39522 12.975 0.725513 12.975 0.310934 12.5309C-0.0930144 12.0867 -0.103645 11.3578 0.310934 10.9136Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
