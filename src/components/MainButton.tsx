import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { HadleIsOpenModal } from "../store/isOpenModalSlice";

type propsTypes = {
  textNotActive: string;
  textActive?: string;
  colorText?: string;
  bgColor?: string;
  isBorder?: boolean;
  width?: number;
  heigt?: number;
  heightMobile?: number;
  heightTablet?: number;
  margin?: number;
  widthMobile?: number;
  hiddenMobile?: boolean;
  mdHidden?: boolean;
  actions?:any,

};

export default function MainButton({
  textActive,
  textNotActive,
  colorText,
  bgColor,
  isBorder,
  width,
  heigt,
  margin,
  heightMobile,
  heightTablet,
  widthMobile,
  hiddenMobile,
  mdHidden,
  actions,

}: propsTypes) {
  const dispatch = useDispatch()
  const state = useSelector((state:RootState) => state)
  return (
    <>
      <button
      onClick={()=>
        dispatch(HadleIsOpenModal(actions))
      }
        className={`
        ${isBorder ? "border-[1px] border-[#E3010F]" : ""}
        icon relative m-${margin} bg-[${bgColor}] w-[${width}%] h-[${heigt}px] text-${colorText} font-bold rounded text-[1.0rem]  opacity-100 z-10 transition-all 
                hover:scale-105
                md:${mdHidden ? "hidden" : "flex"}
                md:h-[${heightTablet}px]
                sm:h-[${heightMobile}px] sm:w-[${widthMobile}%]
                sm:${hiddenMobile ? "hidden" : "felx"}

                `}
                style={{
                  fontSize: `clamp(0.8rem, 3vh, 1.0rem )`
                }}
      >
        {textNotActive}
      </button>
    </>
  );
}
