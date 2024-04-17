import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";


type propsTypes = {
  props: string;
};
export default function FormKitchenCard({ props }: propsTypes) {
  const state = useSelector((state: RootState) => state.counter);
  const [isClick, setIsClick] = useState<boolean>(false);
  const HandleIsClick = () => setIsClick(!isClick);

  return (
    <div
      className={`
       ${isClick ? "bg-[#DCDCDC]" : "bg-white"}
       cursor-pointer top-menu-shadow flex justify-center items-center w-[50px] h-[50px]  rounded-full transition-all duration-500 sm:w-[60px] sm:h-[60px] sm:m-2`}
      onClick={HandleIsClick}
      dangerouslySetInnerHTML={{ __html: props }}
    ></div>
  );
}
