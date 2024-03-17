type propsTypes = {
textNotActive:string,
textActive?:string,
colorText?:string,
bgColor?:string,
isBorder?: boolean,
width?:number
heigt?:number,
heightMobile?:number,
heightTablet?:number,
margin?:number
}

export default function MainButton({textActive, textNotActive , colorText, bgColor,isBorder, width, heigt, margin, heightMobile, heightTablet }:propsTypes){
    return(
        <>
        <button className={`
        ${isBorder? 'border-[1px] border-[#E3010F]':''}
        icon relative m-${margin} bg-[${bgColor}] w-[${width}%] h-[${heigt}px] text-${colorText} font-bold rounded text-[1.0rem]  opacity-100 z-10 transition-all
                hover:scale-105
                md:h-[${heightTablet}px]
                ms:h-[${heightMobile}px]
                `}>{textNotActive}</button>
        </>
    )
}