import { useRef, useState } from "react"
import { MouseEvent } from "react"
import backend from "../backend"
import MainButton from "./MainButton"

export default function Nav(){

    const [isClick, setIsClick]=useState<string|undefined>()
    const UlRef = useRef<HTMLUListElement|null>(null)

    const HandlerClickMenu = (e:MouseEvent<HTMLLIElement>) => {
setIsClick(e.currentTarget.textContent? e.currentTarget.textContent : undefined )
}

    


    return(
        <div className={` flex-col  `}>
        <div className={`flex w-[100%]  justify-center sm:hidden`}>
            <div className={`flex flex-col p-5  w-1/5 items-center `}>
                
                <svg width="133" height="44" viewBox="0 0 133 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-[195px]
                md:w-[133px]
                `}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M91.6523 40.9401V4.22852H113.88V40.9401H91.6523ZM94.7319 37.9416V7.22703H110.8V37.9416H94.7319Z" fill="#E3010F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M91.6523 40.9444C93.4058 35.9223 95.1616 30.8879 96.92 25.8413C98.6783 20.7946 100.451 15.7111 102.239 10.5908L113.445 10.624L124.632 10.6571C122.827 15.748 121.027 20.8204 119.232 25.8744L113.88 40.9554H91.6523V40.9444ZM95.5939 38.4873C97.0673 34.283 98.5408 30.0652 100.014 25.8339C101.488 21.6026 102.972 17.3541 104.468 13.0884L112.572 13.1141L120.676 13.1362C119.171 17.3921 117.669 21.6333 116.171 25.8597C114.673 30.0861 113.182 34.2965 111.699 38.491H95.5939V38.4873Z" fill="#E3010F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M91.6523 40.9439L99.3218 30.5965L106.906 20.3632L117.917 20.1864L129.13 20.0059C126.615 23.4612 124.088 26.9312 121.549 30.416L113.88 40.9439H91.6523ZM95.9401 39.2421L102.353 30.5743L108.704 21.9877L116.687 21.8698L124.769 21.7482C122.662 24.6412 120.546 27.5402 118.422 30.4454L112.008 39.2236H103.904H95.9217L95.9401 39.2421Z" fill="#E3010F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M91.6523 40.944L96.6768 37.7097C98.3382 36.6341 99.9922 35.5695 101.646 34.5086L106.505 31.3812L111.294 28.2832H132.766C131.226 29.311 129.69 30.3424 128.143 31.3812L123.476 34.5086L118.687 37.7097L113.854 40.944H91.6523ZM96.3711 39.8794L100.537 37.183L104.67 34.5086L108.723 31.8858L112.738 29.3073H128.298L124.4 31.9079L120.459 34.5086L116.447 37.183L112.395 39.8794H96.3748H96.3711Z" fill="#E3010F"/>
                    <path d="M5.46087 4.28413H8.96037V19.984H5.46087V13.7917H3.53431V19.984H0.0348076V4.28413H3.53431V10.3843H5.46087V4.28413ZM17.827 7.69153H14.5301V10.3843H17.6023V13.7917H14.5301V16.5766H17.827V19.9877H11.0306V4.28413H17.827V7.69153ZM27.7287 4.28413H32.0792V19.984H28.5576V12.3588L26.852 19.984H24.7449L23.0394 12.3588V19.984H19.5252V4.28413H23.8756L25.7874 14.0385L27.7177 4.28413H27.7287ZM40.7432 7.69153H37.4279V10.3843H40.5222V13.7917H37.45V16.5766H40.7653V19.9877H33.9468V4.28413H40.7432V7.69153ZM51.2012 16.5324H52.3063V22.5884H48.7847V19.9656H42.2756V4.28413H45.7751V16.5508H47.7053V4.28413H51.2048V16.5508L51.2012 16.5324ZM63.6152 19.9656H59.891L57.4929 14.941V19.9656H53.8571V4.28413H57.4929V9.10607L59.7326 4.28413H63.4568L60.182 12.0641L63.6152 19.984V19.9656ZM71.653 4.2657H75.1046V19.9656H71.583V11.6625L68.636 19.984H65.1807V4.28413H68.7023V12.5798L71.6493 4.28413L71.653 4.2657ZM82.5825 0H85.0505C85.0297 0.824835 84.6826 1.60775 84.0854 2.17706C83.6437 2.60453 83.0874 2.89462 82.4841 3.0121C81.8807 3.12959 81.2562 3.06943 80.6864 2.83893C80.1166 2.60842 79.6259 2.21747 79.2739 1.71354C78.922 1.20961 78.7238 0.61435 78.7036 0H81.1679C81.181 0.173481 81.2617 0.334886 81.3926 0.44941C81.5266 0.565526 81.6979 0.629446 81.8752 0.629446C82.0525 0.629446 82.2238 0.565526 82.3578 0.44941C82.4887 0.334886 82.5694 0.173481 82.5825 0ZM83.3671 4.28413H86.8224V19.984H83.3008V11.6625L80.3538 19.984H76.9022V4.28413H80.4201V12.5798L83.3671 4.28413ZM0.00164457 35.6433V30.313C-0.0169788 29.4188 0.122695 28.5284 0.414215 27.6829C0.630423 27.0228 1.01067 26.4283 1.51932 25.9552C1.95036 25.5685 2.45017 25.2661 2.99279 25.0638C4.08615 24.688 5.2737 24.688 6.36706 25.0638C6.90943 25.2564 7.40968 25.5515 7.84053 25.9331C8.35072 26.3946 8.73165 26.9812 8.94564 27.635C9.23115 28.4785 9.3743 29.3636 9.36925 30.2541V30.7809H5.77766V30.3462C5.73345 28.9574 5.37983 28.2649 4.72413 28.2649C4.55297 28.2607 4.38482 28.3104 4.24339 28.4069C4.10196 28.5034 3.99438 28.6418 3.93582 28.8027C3.74875 29.3344 3.66742 29.8975 3.69639 30.4604V35.4923C3.66868 36.0599 3.74994 36.6276 3.93582 37.1647C3.99252 37.3276 4.0993 37.4685 4.24089 37.5671C4.38248 37.6656 4.55163 37.7169 4.72413 37.7136C5.39456 37.7136 5.74819 37.0026 5.77766 35.5844V35.1718H9.36925V35.7207C9.37499 36.6112 9.23182 37.4965 8.94564 38.3398C8.73068 38.9942 8.34996 39.5817 7.84053 40.0453C7.40968 40.4269 6.90943 40.7221 6.36706 40.9147C5.2737 41.2905 4.08615 41.2905 2.99279 40.9147C2.45085 40.711 1.95129 40.4087 1.51932 40.0232C1.01067 39.5502 0.630423 38.9557 0.414215 38.2956C0.122695 37.45 -0.0169788 36.5596 0.00164457 35.6654V35.6433ZM19.1126 24.9827V28.4601H16.6629V40.9847H13.0971V28.4601H10.6843V24.9827H19.1126ZM26.3731 40.9957L25.8464 37.883H23.6361L23.0873 40.9957H19.5252L22.4279 24.9827H27.0288L29.9574 40.9957H26.3731ZM23.9935 34.3172H25.4191L24.7118 29.009L23.9751 34.3172H23.9935ZM37.1553 24.9827H40.7248V40.9957H37.1553V34.6819H35.1882V40.9957H31.6187V24.9827H35.1882V31.2045H37.1553V24.9827ZM53.2677 37.5073H54.3728V43.7695H50.7812V41.0252H45.8819V43.7695H42.2903V37.5073H42.7692C43.727 37.3943 44.2058 36.6797 44.2058 35.3634V24.9827H53.2677V37.5073ZM47.3738 37.5073H49.6872V28.4822H47.779V35.4812C47.7978 36.1756 47.6566 36.8651 47.3665 37.4962L47.3738 37.5073ZM62.5727 41.0068L62.0459 37.8941H59.8357L59.2868 41.0068H55.7174L58.6238 24.9938H63.221L66.1496 41.0068H62.5727ZM60.193 34.3282H61.637L60.9261 29.0201L60.1894 34.3282H60.193ZM67.8882 24.9938H71.6125C72.1174 24.9909 72.6216 25.0328 73.1191 25.119C73.6098 25.2083 74.0867 25.3619 74.5373 25.5758C74.9885 25.7809 75.4 26.064 75.7529 26.412C76.1116 26.7849 76.3878 27.2293 76.5633 27.716C76.7776 28.2946 76.8825 28.9079 76.8727 29.5247V30.6298C76.8876 31.3346 76.7468 32.0339 76.4602 32.678C76.2171 33.2291 75.8366 33.7085 75.3551 34.0704C74.8894 34.4112 74.372 34.6748 73.8227 34.8513C73.2429 35.0302 72.6423 35.133 72.0361 35.1571H71.4651V40.992H67.8956V24.9827L67.8882 24.9938ZM73.4138 30.1878V30.0036C73.4447 29.5782 73.3131 29.1569 73.0454 28.8248C72.9365 28.7062 72.8037 28.612 72.6558 28.5485C72.5078 28.485 72.3481 28.4537 72.1871 28.4565H71.4504V31.7276H72.1871C72.3482 31.7311 72.5082 31.7 72.6562 31.6365C72.8043 31.5729 72.937 31.4784 73.0454 31.3592C73.3111 31.0361 73.4429 30.6235 73.4138 30.2062V30.1878ZM86.804 24.9938V28.4712H84.358V40.9957H80.7885V28.4712H78.3646V24.9938H86.804Z" fill="#E3010F"/>
                </svg>

                <span className={`text-[0.9rem]`}>Кухни на заказ в Краснодаре</span>
            
            </div>

            <div className={`border-r-[1px] border-[#E3010F] h-[50px] m-auto`}></div>

            <div className={`p-5 flex  w-1/5 items-center`}>
                <span className={`text-[1.0rem] 
                md:text-[0.8rem]`}>Отвечаем на звонки с 9:00 до 21:00 без выходных</span>
                
            </div>

            <div className={`border-r-[1px] border-[#E3010F] h-[50px] m-auto`}></div>

            <div className={`flex p-5  w-1/5 items-center`}>
                    <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.2856 31.1474C35.1111 31.0883 34.9267 31.0644 34.7429 31.077C34.5591 31.0896 34.3796 31.1385 34.2148 31.2209C34.05 31.3033 33.9032 31.4176 33.7829 31.557C33.6625 31.6965 33.571 31.8585 33.5136 32.0335C33.4562 32.2086 33.4341 32.3933 33.4485 32.5769C33.4629 32.7606 33.5136 32.9396 33.5976 33.1035C33.6817 33.2675 33.7973 33.4132 33.938 33.5321C34.0787 33.6511 34.2415 33.741 34.4171 33.7967C37.6061 34.8422 39.0335 36.0906 39.0335 36.8625C39.0335 38.8052 31.8052 41.7417 20.9108 41.7417C10.0164 41.7417 2.78811 38.8052 2.78811 36.8625C2.78811 36.0906 4.21552 34.8422 7.40454 33.7967C7.58016 33.741 7.743 33.6511 7.88366 33.5321C8.02431 33.4132 8.13999 33.2675 8.22401 33.1035C8.30802 32.9396 8.3587 32.7606 8.37313 32.5769C8.38755 32.3933 8.36543 32.2086 8.30804 32.0335C8.25065 31.8585 8.15913 31.6965 8.03878 31.557C7.91842 31.4176 7.77161 31.3033 7.60684 31.2209C7.44206 31.1385 7.26259 31.0896 7.0788 31.077C6.895 31.0644 6.71053 31.0883 6.53605 31.1474C1.13403 32.9186 0 35.2329 0 36.8625C0 41.8955 10.5194 44.5298 20.9108 44.5298C31.3022 44.5298 41.8216 41.8955 41.8216 36.8625C41.8216 35.2329 40.6876 32.9186 35.2856 31.1474Z" fill="#E3010F"/>
                        <path d="M20.0407 38.6485C20.2879 38.8459 20.5949 38.9534 20.9113 38.9534C21.2276 38.9534 21.5346 38.8459 21.7818 38.6485C22.2917 38.24 34.2541 28.5266 34.2541 16.0509C34.2541 12.5121 32.8484 9.11833 30.3461 6.61605C27.8438 4.11377 24.45 2.70801 20.9112 2.70801C17.3725 2.70801 13.9787 4.11377 11.4764 6.61605C8.97412 9.11833 7.56836 12.5121 7.56836 16.0509C7.56839 28.5266 19.5308 38.2401 20.0407 38.6485ZM16.1316 16.0509C16.1317 15.1056 16.412 14.1815 16.9373 13.3955C17.4625 12.6096 18.209 11.997 19.0823 11.6352C19.9557 11.2735 20.9167 11.1789 21.8439 11.3633C22.771 11.5478 23.6226 12.003 24.2911 12.6715C24.9595 13.3399 25.4147 14.1916 25.5991 15.1187C25.7835 16.0459 25.6888 17.0069 25.3271 17.8803C24.9653 18.7536 24.3527 19.5001 23.5667 20.0253C22.7807 20.5504 21.8566 20.8308 20.9113 20.8308C19.6436 20.8307 18.4279 20.3271 17.5315 19.4307C16.6352 18.5343 16.1316 17.3186 16.1316 16.051V16.0509Z" fill="#E3010F"/>
                    </svg>

                <span className={`text-[1.0rem] ml-2 
                md:text-[0.8rem]`}>г. Краснодар, ул. Красных Партизан, 483</span>

            </div>
            
            <div className={`border-r-[1px] border-[#E3010F] h-[50px] m-auto`}></div>

            <div className={`flex  w-1/5 items-center justify-center `}>
            <MainButton textNotActive={'Расчитать стоимость'} width={80} heigt={30} bgColor={`#E3010F`} colorText={`white`}/>

            </div>
            
            <div className={`border-r-[1px] border-[#E3010F] h-[50px] m-auto`}></div>

            <div className={`flex flex-col p-5 text-[1.2rem] relative w-1/5 items-center
            md:text-[1.0rem]`}>
                <span className={`w-[100%] text-end `}>+7 (8612) 17-93-76</span>
                <span className={`w-[100%] text-end `}>+7 (989) 277-94-30</span>
                <a href={`#`} className={`w-[100%] text-[#E3010F] text-end text-[1.0rem]  pr-5 underline`}>Вам перезвонить?</a>
            </div>

        </div>
        
        <div className={`flex flex-col w-[100%] mt-2 mb-2 sm:hidden`}>

            <ul className={`flex w-[100%] justify-around text-[1.2rem] uppercase`}
            ref={UlRef}
            >
{
    backend.menu.map((el, index)=>
    <li className={`cursor-pointer border-[#E3010F] transition-all
    ${isClick==UlRef.current?.children[index].textContent? 'border-b-[2px]': ''}
    `} 
    key={index} 
    onClick={HandlerClickMenu}
    >{el}</li>
    )
}




            </ul>



        </div>
        </div>
    )
}