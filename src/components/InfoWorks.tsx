import { useLayoutEffect } from "react"
import gsap from "gsap" 

export default function InfoWorks(){
    return(
       
            <div className={`flex  flex-col w-[100%] items-center m-5
            
            sm:m-0`}>

<div className={`  flex w-[100%] items-center sm:flex-wrap sm:suctify-between sm:text-[1.3rem] ml-5`}>
    <div className={` leftElement left-[-400%] opacity-100 top-menu-shadow w-1/6 h-[90%] bg-white m-5 items-center justify-center flex flex-col cursor-pointer p-5 rounded-lg
   sm:w-[40%] sm:mb-5 sm:h-[150px] 
    `}>
        
    <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={'sm:w-[40px]'}
    >
        <path d="M43.0918 38.9768C45.7245 38.9768 47.5654 37.2151 47.5654 34.6826C47.5654 32.1501 45.7245 30.4434 43.0918 30.4434H38.0391C37.8342 30.4434 37.668 30.6026 37.668 30.7989V36.9214H36.0596C35.8547 36.9214 35.6885 37.0806 35.6885 37.277V38.6213C35.6885 38.8176 35.8547 38.9768 36.0596 38.9768H37.668V39.925H36.0596C35.8547 39.925 35.6885 40.0842 35.6885 40.2805V41.4657C35.6885 41.6621 35.8547 41.8213 36.0596 41.8213H37.668V43.3621C37.668 43.5584 37.8342 43.7176 38.0391 43.7176H39.8504C40.0553 43.7176 40.2215 43.5584 40.2215 43.3621V41.8213H45.2148C45.4198 41.8213 45.5859 41.6621 45.5859 41.4657V40.2805C45.5859 40.0842 45.4198 39.925 45.2148 39.925H40.2215V38.9768H43.0918ZM40.2215 32.4804H42.6563C44.1013 32.4804 44.9723 33.3429 44.9723 34.6826C44.9723 36.0406 44.1013 36.9214 42.6167 36.9214H40.2215V32.4804Z" fill="#E3010F"/>
        <path d="M41.389 22.155H35.7802V16.4588C35.7802 16.1649 35.6643 15.8831 35.4581 15.6752C35.2518 15.4674 34.9721 15.3507 34.6804 15.3507H33.3167V9.43289C33.3167 9.13898 33.2008 8.8571 32.9946 8.64927C32.7883 8.44145 32.5086 8.32469 32.2169 8.32469H5.82243C5.53075 8.32469 5.25102 8.44145 5.04477 8.64927C4.83852 8.8571 4.72266 9.13898 4.72266 9.43289V16.2372C4.72266 16.3827 4.7511 16.5268 4.80637 16.6613C4.86164 16.7957 4.94265 16.9179 5.04477 17.0208C5.14689 17.1237 5.26813 17.2054 5.40156 17.261C5.53499 17.3167 5.678 17.3454 5.82243 17.3454H7.27412V23.2632C7.27412 23.5571 7.38999 23.839 7.59624 24.0468C7.80249 24.2546 8.08222 24.3714 8.3739 24.3714H9.47367V28.9815H6.17435C5.88268 28.9815 5.60295 29.0982 5.3967 29.306C5.19045 29.5139 5.07458 29.7957 5.07458 30.0896V50.4361C5.07458 50.73 5.19045 51.0119 5.3967 51.2197C5.60295 51.4276 5.88268 51.5443 6.17435 51.5443H32.5689C32.8605 51.5443 33.1403 51.4276 33.3465 51.2197C33.5528 51.0119 33.6686 50.73 33.6686 50.4361V49.3058C35.5898 50.5589 37.7757 51.341 40.0509 51.5894C42.3262 51.8378 44.6276 51.5456 46.7705 50.7362C48.9135 49.9268 50.8385 48.6227 52.3911 46.9284C53.9437 45.2342 55.0808 43.197 55.7112 40.9801C56.3415 38.7632 56.4477 36.4283 56.0211 34.1626C55.5945 31.8969 54.647 29.7635 53.2546 27.9333C51.8622 26.1031 50.0636 24.6271 48.0031 23.6237C45.9425 22.6202 43.6773 22.1172 41.389 22.155ZM6.9222 10.5411H31.1172V15.129H6.9222V10.5411ZM9.47367 17.567H33.6686V22.155H9.47367V17.567ZM11.6732 24.3714H33.6686C31.8099 25.5361 30.2321 27.1033 29.0496 28.9593H11.6732V24.3714ZM27.07 42.5901H7.27412V38.0022H26.7181C26.8292 39.5801 27.1931 41.1294 27.7959 42.5901H27.07ZM7.27412 31.1757H27.8838C27.2736 32.635 26.9022 34.1845 26.7841 35.7636H7.27412V31.1757ZM31.4691 49.3944H7.27412V44.8065H29.0276C29.6897 45.8554 30.4804 46.8161 31.3811 47.6656L31.4691 49.3944ZM41.477 49.3944C39.2983 49.3966 37.1575 48.8206 35.27 47.7243C33.3824 46.6281 31.8146 45.0503 30.7243 43.1496C29.6341 41.2489 29.0598 39.0924 29.0592 36.8971C29.0587 34.7017 29.6319 32.545 30.7212 30.6437C30.7648 30.5813 30.8016 30.5145 30.8312 30.4443C31.9493 28.5737 33.5342 27.0309 35.428 25.9696C37.3219 24.9082 39.4586 24.3652 41.6255 24.3947C43.7923 24.4242 45.9137 25.0251 47.7784 26.1377C49.6431 27.2503 51.186 28.8356 52.2536 30.7359C53.3211 32.6362 53.876 34.7852 53.8631 36.9688C53.8501 39.1524 53.2697 41.2945 52.1797 43.1818C51.0896 45.0691 49.528 46.6357 47.6502 47.7257C45.7724 48.8157 43.6441 49.391 41.477 49.3944Z" fill="#E3010F"/>
    </svg>

        <span>Рассрочка 0% <span className={`block`}>до 12 месяцев</span></span>

    </div> 
    <div className={`leftElement opacity-100 top-menu-shadow w-1/6 h-[90%] bg-white m-5 items-center justify-center flex flex-col cursor-pointer p-5 rounded-lg
    sm:w-[40%] sm:mb-5 sm:h-[150px]
    `}>
        
         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
             className={'sm:w-[40px]'}>
             <path d="M56.8025 27.0092L45.0253 18.4954C44.7015 18.2611 44.2735 18.2283 43.9175 18.4101C43.5616 18.5921 43.3376 18.9581 43.3376 19.3578V25.7891L33.2482 18.4954C32.9244 18.2611 32.4965 18.2283 32.1406 18.4101C31.7845 18.5921 31.5607 18.9581 31.5607 19.3578V25.7891L21.4712 18.4954C21.1473 18.2611 20.7194 18.2283 20.3633 18.4101C20.0075 18.5921 19.7834 18.9581 19.7834 19.3578V26.8073H17.5842L16.1849 6.51448C16.1462 5.95641 15.6824 5.52339 15.1231 5.52339H9.5452C8.98586 5.52339 8.52219 5.95631 8.48345 6.51448L7.08402 26.8074H3.82055C3.23279 26.8074 2.75635 27.2838 2.75635 27.8716V53.4124C2.75635 54.0001 3.23279 54.4766 3.82055 54.4766H56.1792C56.7669 54.4766 57.2434 54.0001 57.2434 53.4124V27.8716C57.2434 27.5299 57.0794 27.2091 56.8025 27.0092ZM9.36439 24.6789H11.6354C12.2229 24.6789 12.6996 24.2023 12.6996 23.6147C12.6996 23.0269 12.2229 22.5505 11.6354 22.5505H9.51115L10.5385 7.6519H14.1298L15.4507 26.8073H9.21764L9.36439 24.6789ZM19.7833 31.0643H13.8569C13.2694 31.0643 12.7927 31.5409 12.7927 32.1285C12.7927 32.7162 13.2694 33.1927 13.8569 33.1927H19.7833V35.321H13.8569C13.2694 35.321 12.7927 35.7976 12.7927 36.3852C12.7927 36.973 13.2694 37.4494 13.8569 37.4494H19.7833V39.5778H16.9393C16.3517 39.5778 15.8751 40.0544 15.8751 40.642C15.8751 41.2298 16.3517 41.7062 16.9393 41.7062H19.7833V43.8345H13.8569C13.2694 43.8345 12.7927 44.311 12.7927 44.8987C12.7927 45.4863 13.2694 45.9629 13.8569 45.9629H19.7833V48.0911H13.8569C13.2694 48.0911 12.7927 48.5676 12.7927 49.1553C12.7927 49.743 13.2694 50.2195 13.8569 50.2195H19.7833V52.3481H4.88475V28.9357H8.07341C8.07469 28.9357 8.07607 28.9359 8.07735 28.9359H16.5907C16.5916 28.936 16.5924 28.936 16.5929 28.9359C16.5944 28.9359 16.5955 28.9357 16.597 28.9357H19.7833V31.0643ZM55.115 52.3481H21.9117V27.8715V21.4402L32.0013 28.7339C32.3252 28.9682 32.7531 29.0012 33.1092 28.8191C33.465 28.6372 33.689 28.2712 33.689 27.8715V21.4402L43.7784 28.7338C44.1022 28.9682 44.5302 29.0009 44.886 28.8191C45.2421 28.6372 45.4659 28.2712 45.4659 27.8715V21.4402L55.115 28.4153V52.3481Z" fill="#E3010F"/>
             <path d="M13.8567 41.706H13.8818C14.4696 41.706 14.946 41.2295 14.946 40.6418C14.946 40.0541 14.4696 39.5776 13.8818 39.5776H13.8567C13.2691 39.5776 12.7925 40.0541 12.7925 40.6418C12.7925 41.2294 13.269 41.706 13.8567 41.706Z" fill="#E3010F"/>
             <path d="M34.2563 35.3208H29.9993C29.4115 35.3208 28.9351 35.7973 28.9351 36.385V40.6415C28.9351 41.2292 29.4115 41.7057 29.9993 41.7057H34.2563C34.8439 41.7057 35.3205 41.2292 35.3205 40.6415V36.385C35.3205 35.7974 34.8439 35.3208 34.2563 35.3208ZM33.1921 39.5773H31.0635V37.4492H33.1921V39.5773Z" fill="#E3010F"/>
             <path d="M41.7056 36.385V40.6415C41.7056 41.2292 42.1822 41.7057 42.7698 41.7057H47.0268C47.6145 41.7057 48.091 41.2292 48.091 40.6415V36.385C48.091 35.7973 47.6145 35.3208 47.0268 35.3208H42.7698C42.1822 35.3208 41.7056 35.7974 41.7056 36.385ZM43.834 37.4492H45.9626V39.5773H43.834V37.4492Z" fill="#E3010F"/>
             <path d="M36.9902 48.0913H36.9651C36.3775 48.0913 35.9009 48.5678 35.9009 49.1555C35.9009 49.7432 36.3775 50.2197 36.9651 50.2197H36.9902C37.578 50.2197 38.0544 49.7432 38.0544 49.1555C38.0544 48.5678 37.578 48.0913 36.9902 48.0913Z" fill="#E3010F"/>
             <path d="M33.9075 48.0913H29.9993C29.4115 48.0913 28.9351 48.5678 28.9351 49.1555C28.9351 49.7432 29.4115 50.2197 29.9993 50.2197H33.9075C34.4951 50.2197 34.9717 49.7432 34.9717 49.1555C34.9717 48.5678 34.4951 48.0913 33.9075 48.0913Z" fill="#E3010F"/>
         </svg>


        <span>Устанавливаем кухни <span className={`block`}>с 2013 года</span></span>

    </div>
    <div className={`top-menu-shadow w-1/6 h-[90%] bg-white m-5 items-center justify-center flex flex-col cursor-pointer p-5 rounded-lg
    sm:w-[40%] sm:mb-5 sm:mr-10 sm:h-[150px]
    `}>
        
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={'sm:w-[40px]'}>
                <path d="M23.8576 12.8327L24.8238 6H35.1762L36.1424 12.8327C38.2767 13.618 40.2518 14.775 41.9743 16.2491L48.3238 13.721L53.5 22.6036L48.1167 26.4982C48.5522 28.7554 48.5522 31.0738 48.1167 33.331L53.5 37.4989L48.3238 46.3815L41.9743 43.8534C41.1256 44.5867 40.2001 45.228 39.2137 45.7665C38.2417 46.3375 37.2124 46.8069 36.1424 47.1673L35.1762 54H24.8238L23.8576 47.1673C21.7233 46.382 19.7482 45.225 18.0257 43.7509L11.6762 46.279L6.5 37.3964L11.8833 33.331C11.4478 31.0738 11.4478 28.7554 11.8833 26.4982L6.5 22.3986L11.6762 13.516L18.0257 16.0441C18.8744 15.3108 19.7999 14.6695 20.7863 14.131C21.7626 13.5954 22.7917 13.1604 23.8576 12.8327V12.8327Z" stroke="#E3010F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30 39C34.6944 39 38.5 34.9706 38.5 30C38.5 25.0294 34.6944 21 30 21C25.3056 21 21.5 25.0294 21.5 30C21.5 34.9706 25.3056 39 30 39Z" stroke="#E3010F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


        <span>Бесплатная<span className={`block`}>установка</span></span>

    </div>
    <div className={`top-menu-shadow w-1/6 h-[90%] bg-white m-5 items-center justify-center flex flex-col cursor-pointer p-5 rounded-lg
       sm:w-[40%] sm:m-1 sm:h-[150px]
    `}>

             <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={'sm:w-[40px]'}>
                <path d="M30.5002 37.2729C29.9503 37.2729 29.5039 37.7193 29.5039 38.2692C29.5039 38.8192 29.9503 39.2656 30.5002 39.2656C31.0502 39.2656 31.4966 38.8192 31.4966 38.2692C31.4966 37.7193 31.0502 37.2729 30.5002 37.2729Z" fill="#E3010F"/>
                <path d="M43.4522 47.5353H43.3511L42.5534 40.0914C42.2236 37.1206 40.8153 34.3869 38.5884 32.3944C37.6075 31.5157 36.5009 30.8113 35.314 30.2979C39.1588 28.6303 42.0036 25.0229 42.5374 20.6359C42.538 20.6315 42.5386 20.6268 42.5392 20.6222C42.5398 20.6173 42.5406 20.6125 42.5411 20.6076C42.5458 20.5719 42.5503 20.5353 42.5545 20.4955L43.3576 12.4647H43.4522C44.5163 12.4647 45.5169 12.05 46.2699 11.2971C47.0228 10.5443 47.4375 9.54358 47.4375 8.4794C47.4375 6.28191 45.6497 4.49411 43.4522 4.49411H17.5478C16.4837 4.49411 15.4831 4.90878 14.7301 5.6617C13.9772 6.41452 13.5625 7.41523 13.5625 8.4794C13.5625 10.6769 15.3503 12.4647 17.5478 12.4647H17.6424L18.446 20.5008C18.4497 20.5358 18.4542 20.5705 18.4587 20.605C18.4593 20.6117 18.4604 20.6184 18.4612 20.6251C18.4617 20.6287 18.4621 20.6324 18.4625 20.6359C18.9961 25.0215 21.8392 28.6281 25.6822 30.2963C21.795 31.9772 18.9409 35.6383 18.4462 40.0951L17.6489 47.5353H17.5478C16.4837 47.5353 15.4831 47.95 14.7301 48.7029C13.9772 49.4557 13.5625 50.4564 13.5625 51.5206C13.5625 53.7181 15.3503 55.5059 17.5478 55.5059H43.4522C44.5163 55.5059 45.5169 55.0912 46.2699 54.3383C47.0228 53.5855 47.4375 52.5848 47.4375 51.5206C47.4375 49.3231 45.6497 47.5353 43.4522 47.5353ZM17.5478 10.4721C16.449 10.4721 15.5551 9.57815 15.5551 8.4794C15.5551 7.94757 15.7626 7.44731 16.1391 7.0707C16.5157 6.69419 17.016 6.48676 17.5478 6.48676H43.4522C44.551 6.48676 45.4449 7.38066 45.4449 8.4794C45.4449 9.01124 45.2374 9.5115 44.8609 9.88811C44.4843 10.2646 43.984 10.4721 43.4522 10.4721H42.4559H18.5441H17.5478ZM19.6451 12.4647H41.3549L40.6502 19.5127H20.3498L19.6451 12.4647ZM20.6411 21.5053H40.3589C39.292 26.021 35.2376 29.3026 30.5 29.3026C25.7624 29.3026 21.708 26.021 20.6411 21.5053ZM20.427 40.3112C20.9605 35.5051 24.7814 31.8044 29.5037 31.3439V34.2842C29.5037 34.8344 29.9497 35.2805 30.5 35.2805C31.0503 35.2805 31.4963 34.8344 31.4963 34.2842V31.3453C33.631 31.5554 35.6479 32.4356 37.2593 33.8789C39.1206 35.5442 40.2974 37.8287 40.5725 40.3074L41.2641 46.7606L31.4665 41.4995C31.3936 41.4603 31.316 41.4304 31.2356 41.4104C30.7501 41.2896 30.2372 41.2937 29.7522 41.4218C29.677 41.4417 29.6045 41.4703 29.5361 41.5069L19.7357 46.7621L20.427 40.3112ZM38.4945 47.5353H22.5107L30.3565 43.3282C30.4549 43.3123 30.5552 43.3112 30.6533 43.3246L38.4945 47.5353ZM44.8609 52.9293C44.4843 53.3058 43.984 53.5132 43.4522 53.5132H17.5478C16.449 53.5132 15.5551 52.6193 15.5551 51.5206C15.5551 50.9887 15.7626 50.4885 16.1391 50.1119C16.5157 49.7354 17.016 49.5279 17.5478 49.5279H18.5367C18.5388 49.5279 18.5409 49.5279 18.5431 49.5279H18.5441H42.4518C42.4529 49.5279 42.454 49.5281 42.455 49.5281C42.456 49.5281 42.4569 49.5279 42.4579 49.5279H43.4522C44.551 49.5279 45.4449 50.4218 45.4449 51.5206C45.4449 52.0524 45.2374 52.5527 44.8609 52.9293Z" fill="#E3010F"/>
             </svg>


        <span>Срок службы<span className={`block`}>20 лет</span></span>

        </div>
    </div>

<div className={`flex flex-col m-5 w-[100%]`}>
    <h1 className={`w-[80%]  text-[2.5rem] font-extrabold flex flex-col text-start 
    sm:text-center`}>
Какие кухни 
<span className={`block text-[#E3010F]`}>мы производим?</span>
</h1>
<div className={`w-[80%]  h-[5px] items-start
sm:hidden
`}>
    
<div className={` bg-[#E3010F] w-[5%] h-[100%] items-center` }></div>

</div>
</div>
</div>
    )
}