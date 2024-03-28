import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IProductsObgect from "../module";
import MainButton from "./MainButton";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

type propsTypes = {
  product: IProductsObgect;
  id: number;
};

export default function ProductCard({ product, id }: propsTypes) {
  const state = useSelector((state:RootState) => state.counter)
  const [TriggerAnimation, setTriggerAnimation] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(`.ElementCard${id}`, {
      opacity: 1,
      right: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.ElementCard${id}`,
        toggleActions: "restart none reserve pouse",
      },
    });

    gsap.to(`.ElementCard${id}`, {
      opacity: 1,
      left: 0,
      duration: 2,
      scrollTrigger: {
        trigger: `.ElementCard${id}`,
        toggleActions: "restart none reserve pouse",
      },
    });
  }, [TriggerAnimation]);


  return (
    
    <div
      className={` 
        ElementCard${id}
        top-menu-shadow w-[25%] h-[500px] bg-white m-5 rounded 
        md:w-[30%] md:m-0 md:ml-5
        sm:w-[80%] sm:h-[490px] sm:rounded-3xl sm:mb-10
        `}
    >
      <div
        className={`w-[100%] h-[40%] bg-cover bg-center rounded `}
        style={{
          backgroundImage: `url('${product.productPhoto}')`,
        }}
      ></div>
      <div className={`w-[100%] h-[60%] flex flex-col text-[1.5rem] p-5`}>
        <div className={`h-[30%] flex-col items-center mb-10`}>
          <div>
            <span className={`text-[#4B4B4B] `}>материал фасадов:</span>
            <span className={`font-semibold`}> {product.facadeMaterial}</span>
          </div>
          <div>
            <span className={`text-[#4B4B4B] mt-2 mb-2`}>фурнитура:</span>
            <span className={`font-semibold`}> {product.furniture}</span>
          </div>
          <div>
            <span className={`text-[#4B4B4B]`}>столешница:</span>
            <span className={`font-semibold`}> {product.tableTop}</span>
          </div>
        </div>

        <div>
          <span className={`text-[#4B4B4B]`}>Цена:</span>
          <span className={`font-semibold`}>
            {" "}
            от <span className={`line-through`}>{product.price}</span>
          </span>
          <span className={`ml-2 text-[1.8rem] text-[#E3010F] font-bold`}>
            {product.priceSale} &#8381; м./п.
          </span>
        </div>
        <div className={`w-[100%] h-[120px] flex flex-col justify-around`}>
          <MainButton
            textNotActive={`Получить каталог`}
            bgColor={`#FFFFF`}
            colorText={`black`}
            isBorder={true}
            margin={2}
            width={70}
            heigt={50}
            heightMobile={50}
            actions={state.thisModal.consultation}
          />
          <MainButton
            textNotActive={`Рассчитать стоимость`}
            bgColor={`#E3010F`}
            colorText={`white`}
            margin={2}
            width={70}
            heigt={50}
            actions={state.thisModal.costСalculation}
          />
        </div>
      </div>
    </div>
  );
}
