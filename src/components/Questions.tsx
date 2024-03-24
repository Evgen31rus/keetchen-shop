import { RefObject, useRef, useState } from "react";
import Ibackend from "../Ibackend";
import ReviewsCard from "./ReviewsCard";

export default function Questions() {
  return (
    <div
      className={`flex flex-col w-[80%] h-[400px] items-center justify-between m-auto mt-10
      sm:h-[530px]
      `}
    >
      <h1 className={` text-center w-[70%]  text-[2.5rem] font-extrabold`}>
        Остались вопросы? —<br />
        <span className={`text-[#E3010F] bold`}>
          {" "}
          С радостью ответим на них
        </span>{" "}
      </h1>
      <div
        className={`w-[80%]  h-[5px] items-start mt-3
  sm:hidden
  `}
      >
        <div
          className={` bg-[#E3010F] w-[5%] h-[100%] items-center m-auto`}
        ></div>
      </div>

      <div
        className={`w-[100%] h-[100%] flex justify-around items-center sm:flex-col `}
      >
        <div
          className={`w-[25%] h-[70%] flex flex-col justify-around items-center sm:hidden`}
        >
          <div
            className={` top-menu-shadow flex rounded-2xl h-[40%] p-5 justify-between font-semibold items-center`}
          >
            <svg
              width="30"
              height="31"
              viewBox="0 0 42 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 0C9.725 0 0.5 9.225 0.5 20.5C0.5 31.775 9.725 41 21 41C32.275 41 41.5 31.775 41.5 20.5C41.5 9.225 32.275 0 21 0ZM21 36.9C11.98 36.9 4.6 29.52 4.6 20.5C4.6 11.48 11.98 4.1 21 4.1C30.02 4.1 37.4 11.48 37.4 20.5C37.4 29.52 30.02 36.9 21 36.9Z"
                fill="#E3010F"
              />
              <path
                d="M22.0242 10.25H18.9492V22.55L29.6092 29.11L31.2492 26.445L22.0242 20.91V10.25Z"
                fill="#E3010F"
              />
            </svg>

            <p className={`w-[70%]`}>
              Отвечаем на звонки с 9:00 до 21:00 без выходных!
            </p>
          </div>

          <div
            className={`top-menu-shadow flex rounded-2xl h-[40%] p-5 justify-between font-semibold items-center`}
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.7856 29.0278C35.6111 28.9687 35.4267 28.9448 35.2429 28.9574C35.0591 28.97 34.8796 29.0189 34.7148 29.1013C34.55 29.1837 34.4032 29.2979 34.2829 29.4374C34.1625 29.5769 34.071 29.7388 34.0136 29.9139C33.9562 30.0889 33.9341 30.2736 33.9485 30.4573C33.9629 30.641 34.0136 30.8199 34.0976 30.9839C34.1817 31.1479 34.2973 31.2935 34.438 31.4125C34.5787 31.5315 34.7415 31.6214 34.9171 31.6771C38.1061 32.7226 39.5335 33.971 39.5335 34.7429C39.5335 36.6856 32.3052 39.6221 21.4108 39.6221C10.5164 39.6221 3.28811 36.6856 3.28811 34.7429C3.28811 33.971 4.71552 32.7226 7.90454 31.6771C8.08016 31.6214 8.243 31.5315 8.38366 31.4125C8.52431 31.2935 8.63999 31.1479 8.72401 30.9839C8.80802 30.8199 8.8587 30.641 8.87313 30.4573C8.88755 30.2736 8.86543 30.0889 8.80804 29.9139C8.75065 29.7388 8.65913 29.5769 8.53878 29.4374C8.41842 29.2979 8.27161 29.1837 8.10684 29.1013C7.94206 29.0189 7.76259 28.97 7.5788 28.9574C7.395 28.9448 7.21053 28.9687 7.03605 29.0278C1.63403 30.799 0.5 33.1133 0.5 34.7429C0.5 39.7759 11.0194 42.4102 21.4108 42.4102C31.8022 42.4102 42.3216 39.7759 42.3216 34.7429C42.3216 33.1133 41.1876 30.799 35.7856 29.0278Z"
                fill="#E3010F"
              />
              <path
                d="M20.5407 36.5294C20.7879 36.7268 21.0949 36.8343 21.4113 36.8343C21.7276 36.8343 22.0346 36.7268 22.2818 36.5294C22.7917 36.1209 34.7541 26.4075 34.7541 13.9318C34.7541 10.393 33.3484 6.99919 30.8461 4.49691C28.3438 1.99463 24.95 0.588867 21.4112 0.588867C17.8725 0.588867 14.4787 1.99463 11.9764 4.49691C9.47412 6.99919 8.06836 10.393 8.06836 13.9318C8.06839 26.4075 20.0308 36.1209 20.5407 36.5294ZM16.6316 13.9318C16.6317 12.9864 16.912 12.0624 17.4373 11.2764C17.9625 10.4904 18.709 9.87783 19.5823 9.51611C20.4557 9.15438 21.4167 9.05976 22.3439 9.24421C23.271 9.42866 24.1226 9.88389 24.7911 10.5523C25.4595 11.2208 25.9147 12.0724 26.0991 12.9996C26.2835 13.9268 26.1888 14.8878 25.8271 15.7611C25.4653 16.6345 24.8527 17.3809 24.0667 17.9061C23.2807 18.4313 22.3566 18.7116 21.4113 18.7116C20.1436 18.7116 18.9279 18.208 18.0315 17.3116C17.1352 16.4152 16.6316 15.1995 16.6316 13.9318V13.9318Z"
                fill="#E3010F"
              />
            </svg>

            <p className={`w-[70%] `}>
              г. Краснодар, ул. Красных Партизан, 483
            </p>
          </div>
        </div>

        <div
          className={`w-[25%]  bg-cover rounded-full  h-[200px]
sm:w-[200px] sm:h-[200px]`}
          style={{
            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/cb7d/4096/c74601928a8af03203b67d50e784a035?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFUbJUdSYmGnVlQjT-ztZL51N8gyDY3eUxz-WMQ0fWrDYhz~gWZbJyG8CS-5UGpZTXE~TX9oCPBogt50FKI9JsTBYpmEVp--oVp7XECMc8DxC~BvvcmsKkBL66BqfwSPioryIcdkivCGPVgEEp-~D7pX2leYrVtpvp4JjMHIdnLawz29psIkmTk8bY4YRctJaU2rcAuU~FNShKBDm78-Ai620pbBUpqPb3MdFgQRmLwUgi8fbIlDHQeA7rnmccqiLDmKbAVcE55A4umfH~aA-CMohuknbGdLV8jq~kFDZGYv-BqJcbQXGACEibYa4-ql8DB8gR-uZR2sEPeOIsJ4Cw__')`,
          }}
        ></div>

        <div
          className={`w-[30%] top-menu-shadow  flex rounded-2xl p-5 items-center text-[1.5rem] justify-around font-semibold
sm:w-[90%]`}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3.0625C30.8896 3.0625 38.9375 11.1104 38.9375 21C38.9375 30.8896 30.8896 38.9375 21 38.9375C11.1104 38.9375 3.0625 30.8896 3.0625 21C3.0625 11.1104 11.1104 3.0625 21 3.0625ZM21 0.5C9.67896 0.5 0.5 9.67896 0.5 21C0.5 32.321 9.67896 41.5 21 41.5C32.321 41.5 41.5 32.321 41.5 21C41.5 9.67896 32.321 0.5 21 0.5ZM32.4287 27.8542L32.3135 27.5039C32.0433 26.6981 31.1524 25.8573 30.3316 25.632L27.3012 24.8037C26.4804 24.581 25.3092 24.8813 24.7063 25.4844L23.6101 26.5805C19.6263 25.5019 16.5007 22.3764 15.4246 18.3925L16.5208 17.2964C17.1213 16.6958 17.4216 15.5247 17.1989 14.7014L16.373 11.6709C16.1503 10.8501 15.3044 9.95923 14.4987 9.68896L14.1533 9.57381C13.345 9.30355 12.1914 9.57629 11.5908 10.1794L9.94922 11.821C9.65645 12.1113 9.46875 12.9446 9.46875 12.9472C9.41366 18.1573 11.4557 23.1747 15.1393 26.8608C18.8129 30.5343 23.8128 32.5739 29.0053 32.5288C29.0329 32.5288 29.8912 32.3461 30.184 32.0533L31.8256 30.4117C32.4262 29.8136 32.6964 28.66 32.4287 27.8542Z"
              fill="#E3010F"
            />
          </svg>
          <p>+7 (989) 277-94-30</p>
        </div>
      </div>
    </div>
  );
}
