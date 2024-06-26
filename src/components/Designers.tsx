import { RefObject, useLayoutEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import DisainersCard from "./DisainersCard";
import IDisainers from "../IDisainers";
import Form from "./Form";

type propsTypes = {
  props: IDisainers[];
};

export default function Designers({ props }: propsTypes) {
  const SliderLineWidth = useRef(null) as RefObject<HTMLDivElement> | null;
  const SliderRef = useRef(null) as RefObject<HTMLDivElement> | null;
  const [width, setWidth] = useState<number>(0);
  const [TriggerAnimation, setTriggerAnimation] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(".leftElementDisainers", {
      opacity: 1,
      left: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".leftElementDisainers",
        toggleActions: "restart none reserve pouse",
      },
    });

    gsap.to(".rightElementDisainers", {
      opacity: 1,
      right: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".rightElementDisainers",
        toggleActions: "restart none reserve pouse",
      },
    });
  }, [TriggerAnimation]);
  return (
    <div
      className={`ml-5 flex flex-col w-[80%] h-[700px] sm:h-[900px] relative `}
      onLoad={() => setTriggerAnimation(true)}
    >
      <div className={`flex flex-col  w-[100%] `}>
        <h1
          className={`w-[80%]  text-[2.5rem] font-extrabold flex flex-col text-start
    sm:text-start sm:w-[100%]`}
        >
          Не знаете какой выбрать
          <span className={`block text-[#E3010F]`}>дизайн кухни?</span>
        </h1>
        <div
          className={`w-[80%]  h-[5px] items-start
`}
        >
          <div className={` bg-[#E3010F] w-[15%] h-[100%] items-center`}></div>
        </div>
      </div>

      <div
        className={` w-[100%] flex justify-around h-[500px]  sm:flex-col-reverse sm:h-[700px]`}
      >
        <div
          className={`leftElementDisainers  flex left-[-400px] opacity-0  w-[45%] relative  
        sm:w-[100%] sm:h-[100%] sm:mt-5`}
          ref={SliderRef}
        >
          <div
            className={`top-menu-shadow w-[40px] h-[40px] absolute flex justify-center items-center bg-white rounded-full top-[50%] left-[-5%] cursor-pointer z-20`}
            onClick={() => {
              setWidth((prev) =>
                SliderRef?.current != null
                  ? Math.min(prev + SliderRef.current?.offsetWidth, 0)
                  : 0
              );
            }}
          >
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2324 0.347056C12.4806 0.118642 12.809 -0.00570926 13.1482 0.000201458C13.4875 0.00611218 13.8112 0.141824 14.0511 0.378743C14.291 0.615662 14.4285 0.935291 14.4345 1.27029C14.4405 1.6053 14.3145 1.92951 14.0832 2.17464L3.65922 12.4677L14.0832 22.7608C14.2119 22.8792 14.3151 23.022 14.3866 23.1806C14.4582 23.3392 14.4967 23.5105 14.4998 23.6841C14.5029 23.8577 14.4706 24.0302 14.4047 24.1912C14.3388 24.3522 14.2408 24.4985 14.1164 24.6213C13.9921 24.7441 13.844 24.8409 13.6809 24.9059C13.5178 24.9709 13.3432 25.0029 13.1674 24.9998C12.9915 24.9967 12.8181 24.9587 12.6575 24.8881C12.4968 24.8174 12.3523 24.7155 12.2324 24.5884L0.882978 13.3815C0.637744 13.1391 0.5 12.8104 0.5 12.4677C0.5 12.1251 0.637744 11.7964 0.882978 11.554L12.2324 0.347056Z"
                fill="#E3010F"
              />
            </svg>
          </div>
          <div
            className={`top-menu-shadow cursor-pointer absolute font-bold  text-[2rem] w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full right-[-5%] top-[50%]  z-20`}
            onClick={() => {
              setWidth((prev) =>
                SliderRef?.current != null && SliderLineWidth?.current != null
                  ? (-SliderLineWidth?.current.offsetWidth /
                      SliderLineWidth?.current.childNodes.length) *
                      SliderLineWidth?.current.childNodes.length <=
                    width
                    ? prev - SliderRef.current?.offsetWidth
                    : prev
                  : 0
              );
            }}
          >
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.76762 0.347056C2.51938 0.118642 2.19104 -0.00570926 1.85178 0.000201458C1.51252 0.00611218 1.18882 0.141824 0.94889 0.378743C0.708958 0.615662 0.571521 0.935291 0.565535 1.27029C0.559549 1.6053 0.685482 1.92951 0.9168 2.17464L11.3408 12.4677L0.9168 22.7608C0.788139 22.8792 0.684942 23.022 0.613367 23.1806C0.541793 23.3392 0.503306 23.5105 0.500204 23.6841C0.497101 23.8577 0.529447 24.0302 0.59531 24.1912C0.661173 24.3522 0.759206 24.4985 0.883558 24.6213C1.00791 24.7441 1.15603 24.8409 1.3191 24.9059C1.48216 24.9709 1.65681 25.0029 1.83265 24.9998C2.00848 24.9967 2.18189 24.9587 2.34253 24.8881C2.50316 24.8174 2.64774 24.7155 2.76762 24.5884L14.117 13.3815C14.3623 13.1391 14.5 12.8104 14.5 12.4677C14.5 12.1251 14.3623 11.7964 14.117 11.554L2.76762 0.347056Z"
                fill="#E3010F"
              />
            </svg>
          </div>
          <div
            className={`  relative flex top-menu-shadow flex  w-[100%] h-[100%] bg-white rounded  items-center overflow-x-hidden`}
          >
            <div
              ref={SliderLineWidth}
              className={`flex h-[100%] transition duration-300 ease-in-out`}
              style={{
                transform: `translateX(${width}px)`,
                minWidth: `${
                  SliderLineWidth?.current
                    ? width * SliderLineWidth?.current?.childNodes.length
                    : null
                }px`,
              }}
            >
              {props.map((el) => (
                <DisainersCard props={el} />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`rightElementDisainers relative right-[-400px] opacity-0 w-[40%] flex flex-col 
sm:w-[100%]
`}
        >
          <h2
            className={` text-[1.8rem] font-extrabold uppercase mb-5 w-[80%]  font-extrabold flex flex-col text-start
    sm:text-start sm:mt-5`}
          >
            Обратитесь к нашим{" "}
            <span className={`text-[#E3010F]`}>дизайнерам!</span>
          </h2>
          <p className={`mb-5 text-[1.2rem] w-[70%] sm:w-[100%]`}>
            Более 3000 клиентов благодарны нашим дизайнерам за:
          </p>
          <ul
            className={`flex flex-col text-[1.1rem] w-[80%] items-center sm:w-[100%]`}
          >
            <li className={"flex mb-3 w-[100%] h-[50px] items-center "}>
              <div>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`mr-3 w-[40px] h-[40px]`}
                >
                  <path
                    d="M12.0002 17.9999C11.8686 18.0007 11.7381 17.9755 11.6163 17.9257C11.4944 17.8759 11.3836 17.8026 11.2902 17.7099L7.29018 13.7099C7.10188 13.5216 6.99609 13.2662 6.99609 12.9999C6.99609 12.7336 7.10188 12.4782 7.29018 12.2899C7.47849 12.1016 7.73388 11.9958 8.00019 11.9958C8.26649 11.9958 8.52188 12.1016 8.71019 12.2899L12.0002 15.5899L18.2902 9.28994C18.4785 9.10164 18.7339 8.99585 19.0002 8.99585C19.2665 8.99585 19.5219 9.10164 19.7102 9.28994C19.8985 9.47824 20.0043 9.73364 20.0043 9.99994C20.0043 10.2662 19.8985 10.5216 19.7102 10.7099L12.7102 17.7099C12.6167 17.8026 12.5059 17.8759 12.3841 17.9257C12.2623 17.9755 12.1318 18.0007 12.0002 17.9999Z"
                    fill="#E3010F"
                  />
                  <path
                    d="M13 26C10.4288 26 7.91543 25.2376 5.77759 23.8091C3.63975 22.3807 1.97351 20.3503 0.989572 17.9749C0.0056327 15.5995 -0.251811 12.9856 0.249797 10.4638C0.751405 7.94208 1.98953 5.6257 3.80762 3.80762C5.6257 1.98953 7.94208 0.751405 10.4638 0.249797C12.9856 -0.251811 15.5995 0.0056327 17.9749 0.989572C20.3503 1.97351 22.3807 3.63975 23.8091 5.77759C25.2376 7.91543 26 10.4288 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26ZM13 2.00001C10.8244 2.00001 8.69767 2.64514 6.88873 3.85384C5.07979 5.06254 3.66989 6.7805 2.83733 8.79049C2.00477 10.8005 1.78693 13.0122 2.21137 15.146C2.63581 17.2798 3.68345 19.2398 5.22183 20.7782C6.76021 22.3166 8.72022 23.3642 10.854 23.7886C12.9878 24.2131 15.1995 23.9952 17.2095 23.1627C19.2195 22.3301 20.9375 20.9202 22.1462 19.1113C23.3549 17.3023 24 15.1756 24 13C24 10.0826 22.8411 7.28473 20.7782 5.22183C18.7153 3.15893 15.9174 2.00001 13 2.00001Z"
                    fill="#E3010F"
                  />
                </svg>
              </div>
              Скрупулезную и терпеливую работу по созданию проекта идеальной
              кухни.
            </li>
            <li className={"flex mb-3 w-[100%] h-[50px] items-center"}>
              <div>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`mr-3 w-[40px] h-[40px]`}
                >
                  <path
                    d="M12.0002 17.9999C11.8686 18.0007 11.7381 17.9755 11.6163 17.9257C11.4944 17.8759 11.3836 17.8026 11.2902 17.7099L7.29018 13.7099C7.10188 13.5216 6.99609 13.2662 6.99609 12.9999C6.99609 12.7336 7.10188 12.4782 7.29018 12.2899C7.47849 12.1016 7.73388 11.9958 8.00019 11.9958C8.26649 11.9958 8.52188 12.1016 8.71019 12.2899L12.0002 15.5899L18.2902 9.28994C18.4785 9.10164 18.7339 8.99585 19.0002 8.99585C19.2665 8.99585 19.5219 9.10164 19.7102 9.28994C19.8985 9.47824 20.0043 9.73364 20.0043 9.99994C20.0043 10.2662 19.8985 10.5216 19.7102 10.7099L12.7102 17.7099C12.6167 17.8026 12.5059 17.8759 12.3841 17.9257C12.2623 17.9755 12.1318 18.0007 12.0002 17.9999Z"
                    fill="#E3010F"
                  />
                  <path
                    d="M13 26C10.4288 26 7.91543 25.2376 5.77759 23.8091C3.63975 22.3807 1.97351 20.3503 0.989572 17.9749C0.0056327 15.5995 -0.251811 12.9856 0.249797 10.4638C0.751405 7.94208 1.98953 5.6257 3.80762 3.80762C5.6257 1.98953 7.94208 0.751405 10.4638 0.249797C12.9856 -0.251811 15.5995 0.0056327 17.9749 0.989572C20.3503 1.97351 22.3807 3.63975 23.8091 5.77759C25.2376 7.91543 26 10.4288 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26ZM13 2.00001C10.8244 2.00001 8.69767 2.64514 6.88873 3.85384C5.07979 5.06254 3.66989 6.7805 2.83733 8.79049C2.00477 10.8005 1.78693 13.0122 2.21137 15.146C2.63581 17.2798 3.68345 19.2398 5.22183 20.7782C6.76021 22.3166 8.72022 23.3642 10.854 23.7886C12.9878 24.2131 15.1995 23.9952 17.2095 23.1627C19.2195 22.3301 20.9375 20.9202 22.1462 19.1113C23.3549 17.3023 24 15.1756 24 13C24 10.0826 22.8411 7.28473 20.7782 5.22183C18.7153 3.15893 15.9174 2.00001 13 2.00001Z"
                    fill="#E3010F"
                  />
                </svg>
              </div>
              Подбор материалов с экономией до 60% без потери качества.{" "}
            </li>
            <li className={"flex mb-3 w-[100%] h-[50px] items-center"}>
              <div>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`mr-3 w-[40px] h-[40px]`}
                >
                  <path
                    d="M12.0002 17.9999C11.8686 18.0007 11.7381 17.9755 11.6163 17.9257C11.4944 17.8759 11.3836 17.8026 11.2902 17.7099L7.29018 13.7099C7.10188 13.5216 6.99609 13.2662 6.99609 12.9999C6.99609 12.7336 7.10188 12.4782 7.29018 12.2899C7.47849 12.1016 7.73388 11.9958 8.00019 11.9958C8.26649 11.9958 8.52188 12.1016 8.71019 12.2899L12.0002 15.5899L18.2902 9.28994C18.4785 9.10164 18.7339 8.99585 19.0002 8.99585C19.2665 8.99585 19.5219 9.10164 19.7102 9.28994C19.8985 9.47824 20.0043 9.73364 20.0043 9.99994C20.0043 10.2662 19.8985 10.5216 19.7102 10.7099L12.7102 17.7099C12.6167 17.8026 12.5059 17.8759 12.3841 17.9257C12.2623 17.9755 12.1318 18.0007 12.0002 17.9999Z"
                    fill="#E3010F"
                  />
                  <path
                    d="M13 26C10.4288 26 7.91543 25.2376 5.77759 23.8091C3.63975 22.3807 1.97351 20.3503 0.989572 17.9749C0.0056327 15.5995 -0.251811 12.9856 0.249797 10.4638C0.751405 7.94208 1.98953 5.6257 3.80762 3.80762C5.6257 1.98953 7.94208 0.751405 10.4638 0.249797C12.9856 -0.251811 15.5995 0.0056327 17.9749 0.989572C20.3503 1.97351 22.3807 3.63975 23.8091 5.77759C25.2376 7.91543 26 10.4288 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26ZM13 2.00001C10.8244 2.00001 8.69767 2.64514 6.88873 3.85384C5.07979 5.06254 3.66989 6.7805 2.83733 8.79049C2.00477 10.8005 1.78693 13.0122 2.21137 15.146C2.63581 17.2798 3.68345 19.2398 5.22183 20.7782C6.76021 22.3166 8.72022 23.3642 10.854 23.7886C12.9878 24.2131 15.1995 23.9952 17.2095 23.1627C19.2195 22.3301 20.9375 20.9202 22.1462 19.1113C23.3549 17.3023 24 15.1756 24 13C24 10.0826 22.8411 7.28473 20.7782 5.22183C18.7153 3.15893 15.9174 2.00001 13 2.00001Z"
                    fill="#E3010F"
                  />
                </svg>
              </div>
              100% соответствие дизайн-проекта с реальностью.{" "}
            </li>
          </ul>
          <Form MobileVisible={false} textVisible={true} bannerZone={false} />
        </div>
      </div>

      {/* 
      <div
        className={`flex m-5 w-[100%] justify-between
sm:flex-col-reverse
`}
      >

          <div
            className={`leftElementDisainers flex   p-5 top-menu-shadow flex w-[40%] h-[80px] bg-white rounded mt-10 items-center sm:w-[100%] sm:text-[1.7rem]`}
          >
            {props.map((el) => (
              <DisainersCard props={el} />
            ))}
      
        </div>
      </div>

 */}
    </div>
  );
}
