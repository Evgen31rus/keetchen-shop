import { useDispatch, useSelector } from "react-redux";
import IHelpSearch from "../HelpSearch";
import MainButton from "./MainButton";
import { RootState } from "../store/store";
import StyleCard from "./StyleCard";
import FormKitchenCard from "./FormKitchenCard";
import RoomArea from "./RoomArea";
import { ChangeEvent, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

type propsTypes = {
  props: IHelpSearch[];
  propsSVG: string[];
  propsRoomArea: string[];
};
export default function ({ props, propsSVG, propsRoomArea }: propsTypes) {
  const dispatch = useDispatch();
  useSelector((state: RootState) => state.counter);
  const modalRef = useRef(null);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<number>(8);
  const [validForm, setValidForm] = useState({
    numberLength: true,
  });

  return (
    <>
      <div className={`flex w-[90%]`}>
        <h1
          className={`text-[2.5rem] font-extrabold flex  flex-wrap
          sm:w-[100%] sm:text-[1.3rem]`}
        >
          Узнайте цену
          <span className={` block text-[#E3010F] ml-3 sm:m-0 sm:ml-2`}>
            {" "}
            вашей кухни
          </span>
        </h1>
      </div>
      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl  justify-around `}
      >
        <h2
          className={`flex text-[1.2rem]  font-semibold ml-5 mt-5 mb-5 sm:text-[0.9rem]`}
        >
          Стиль:
        </h2>
        <div
          className={`flex w-[100%] h-[120px] justify-around sm:flex-wrap sm:h-[220px]`}
        >
          {props.map((el, index) => (
            <StyleCard props={el} />
          ))}
          <StyleCard
            photo="https://s3-alpha-sig.figma.com/img/d011/b2ba/eb98478bdae989bd56e986a0f29fbf73?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hh2w3rVM0QSdS7aiyYGTEd~BjzarJTRdZQQXs9m2wEKF3jVz7VdIin69Pj5hicGeAtMwpbJSVWvm2vnIF602YLHXynJ1HGr57Spsvg9ijssH9nphbj3pCa5-yJcHb~jS5c5fOMxpvV-ZxIFvAydhln~SC36dFOTCCwdCHA-INJLAQHJqF0vn1KDnKOwo9CcujSb9ezUDaP2VwNROOLW8RU9RbRtlWRMl6VMuOTWeZRq2CyDpjLtGY-DEkpKb4uZcbKU7AuUKgnxQy~aGr5mQiNwNmE9hcy7N8p-i1y-SlFSj~2Zh0peopcp55Rtgmc-AyxdaA1D1thCM6Us2VUylVw__"
            title="Другое"
          />
        </div>
      </div>

      <div className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl `}>
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5`}>
          Форма:
        </h2>
        <div
          className={`flex w-[100%] h-[80px] justify-around items-center flex-wrap sm:justify-around sm:min-h-[150px]`}
        >
          {propsSVG.map((svg) => (
            <FormKitchenCard props={svg} />
          ))}
        </div>
      </div>

      <div
        className={`top-menu-shadow flex flex-col w-[90%] rounded-2xl sm:hidden`}
      >
        <h2 className={`flex text-[1.2rem]  font-semibold ml-5 mt-5`}>
          Площадь кухни:
        </h2>
        <div className={` flex w-[100%] h-[65px] justify-around items-center `}>
          {propsRoomArea.map((el) => (
            <RoomArea props={el} />
          ))}
        </div>
      </div>
      <div className={`w-[90%] `}>
        <p className={`w-[60%] text-[1.4rem] sm:hidden`}>
          Оставьте свой номер телефона сейчас и наш дизайнер свяжется с Вами в
          ближайшее время!
        </p>
      </div>
      <div className={`flex w-[90%] sm:w-[100%] justify-center`}>
        {!isClick ? (
          <div
            className={`w-[30%] mr-5 sm:w-[40%]`}
            onClick={() => setIsClick(!isClick)}
          >
            <MainButton
              textNotActive={`Номер телефона`}
              isBorder={true}
              width={100}
              heigt={40}
            />
          </div>
        ) : (
          <CSSTransition
            in={isClick}
            nodeRef={modalRef}
            timeout={300}
            classNames="alert"
          >
            <div className={`flex w-[30%] sm:w-[50%] mr-8`} ref={modalRef}>
              <div
                className={`  w-[30%] flex text-[1.5rem] border-[#E3010F] border-2   flex items-center justify-around rounded
    
      `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 9 6"
                  width="20"
                  height="25"
                  className={` border-[1.5px] border-black
    
      `}
                >
                  <rect fill="#fff" width="9" height="3" />
                  <rect fill="#d52b1e" y="3" width="9" height="3" />
                  <rect fill="#0039a6" y="2" width="9" height="2" />
                </svg>
                +7
              </div>
              <input
                type="text"
                className={`w-[70%] text-[1.5rem] border-[2px] border-l-0 border-[#E3010F]  rounded outline-0 pl-5 pr-5 text-center 
          
          `}
                value={valueInput != 8 && valueInput != 0 ? valueInput : ""}
                placeholder={`(XXX)-XX-XX`}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (Array.from(event.currentTarget.value).length <= 10) {
                    setValueInput(Number(event.currentTarget.value));
                    setValidForm({
                      numberLength: true,
                    });
                  }
                  if (isNaN(Number(event.currentTarget.value))) {
                    setValueInput(8);
                  }
                }}
              />
            </div>
          </CSSTransition>
        )}

        <div className={`w-[30%] sm:w-[40%]`}>
          <MainButton
            textNotActive={`Рассчитать стоимость`}
            colorText={`white`}
            width={100}
            heigt={40}
            bgColor={`#E3010F`}
          />
        </div>
      </div>
    </>
  );
}
