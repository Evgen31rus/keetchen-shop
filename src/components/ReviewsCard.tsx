import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainButton from "./MainButton";
import IReviews from "../IReviews";
import Star from "./Star";

type propsTypes = {
  props: IReviews;
};

export default function ReviewsCard({ props }: propsTypes) {
  const starsCount = () => {
    const count = [];
    for (let index = 0; index < props.rating; index++) {
      count.push(1);
    }
    return count;
  };

  return (
    <div
      className={` flex
         max-w-[100%] min-w-[100%] h-[260px] bg-white rounded-lg p-10 items-center justify-center
         md:h-[300px]
        sm:flex-col sm:h-[500px] sm:justify-around
        `}
    >
      <div
        className={`w-[50%] h-[100%] flex flex-col justify-around
            sm:w-[100%]`}
      >
        <p className={`text-[#818181] text-[0.9rem] mb-5`}>{props.data} </p>
        <div
          className={`flex items-center 
sm:mb-10`}
        >
          <div
            className={`w-[50px] h-[50px] rounded-full bg-cover bg-center hidden mr-5
    sm:flex`}
            style={{
              backgroundImage: `url(${props.userPhoto})`,
            }}
          >
            {" "}
          </div>
          <div className={`flex flex-col`}>
            <h3 className={`text-[#0C0C0C] text-[1.5rem] font-extrabold`}>
              {props.userName} {props.userLastName}
            </h3>
            <p className={`text-[#E3010F] hidden sm:flex`}>
              {starsCount().map((el) => (
                <Star />
              ))}{" "}
            </p>
          </div>
        </div>

        <p className={`flex mb-5 text-[#E3010F] sm:hidden`}>
          {starsCount().map((el) => (
            <Star />
          ))}{" "}
        </p>
        <p className={`text-[1rem] mb-5 md:overflow-y-scroll`}>{props.reviews} </p>
        <MainButton
          textNotActive={`Получить дизайн проект`}
          bgColor={`#E3010F`}
          colorText={`white`}
          width={70}
          heigt={30}
          hiddenMobile={true}
        />
      </div>

      <div
        className={`flex w-[50%] h-[100%] justify-around items-end
            sm:w-[100%]`}
      >
        <div
          className={`w-[40%] h-[80%] bg-center bg-cover rounded-lg
sm:hidden`}
          style={{
            backgroundImage: `url('${props.userPhoto}')`,
          }}
        ></div>
        <div
          className={`w-[40%] h-[80%] bg-center bg-cover rounded-2xl
sm:w-[100%]`}
          style={{
            backgroundImage: `url('${props.productPhoto}')`,
          }}
        ></div>
      </div>
      <div
        className={`hidden sm:flex w-[70%] h-[100px] pt-10 
sm:w-[100%]`}
      >
        <MainButton
          textNotActive={`Получить дизайн проект`}
          bgColor={`#E3010F`}
          colorText={`white`}
          width={100}
          heigt={50}
          mdHidden={true}
        />
      </div>
    </div>
  );
}
