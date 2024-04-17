import { useState } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

type propsTypes = {
  props: string;
};
export default function RoomArea({ props }: propsTypes) {
  const state = useSelector((state: RootState) => state.counter);
  const [isClick, setIsClick] = useState<boolean>(false);
  const HandleIsClick = () => setIsClick(!isClick);
  return (
    <div
      className={`
        ${isClick ? "bg-[#D3D3D3]" : ""}
        cursor-pointer transition-all duration-500 flex justify-center items-center text-[1.1rem] font-bold text-[#E3010F] top-menu-shadow flex w-[90px] h-[40px]  rounded-full`}
      onClick={HandleIsClick}
    >
      {props}
    </div>
  );
}
