import IAdditionalSolution from "../IAdditionalSolutions";
import AditionalSolutionsCard from "./AdditionalSolutionsCard";
type propsTypes = {
  props: IAdditionalSolution[];
};

export default function AdditionalSolution({ props }: propsTypes) {
  return (
    <div className={`flex flex-col w-[80%] items-start m-auto mt-`}>
      <h1 className={`  ml-5 w-[80%]  text-[2.5rem] font-extrabold`}>
        Наши{" "}
        <span className={`text-[#E3010F] bold`}>
          {" "}
          дополнительные <br /> решения
        </span>{" "}
        для Вашей кухни
      </h1>
      <div
        className={`w-[80%]  h-[5px] items-start mt-3
sm:hidden
`}
      >
        <div className={` bg-[#E3010F] w-[5%] h-[100%] items-center`}></div>
      </div>

      <div
        className={`flex w-[100%] justify-between mb-10 mt-10 font-semibold  
      sm:flex-col
      `}
      >
        {props.map((el, index) => (
          <AditionalSolutionsCard props={el} index={index} />
        ))}
      </div>
    </div>
  );
}
