export default function SaleZone(){
    return(
        <>
          <div className={`hidden flex flex-col items-center w-[100%] h-[200px] p-5 rounded bg-white   justify-center sm:flex`}>
                 <h2 className={`text-[1.8rem] font-extrabold text-[#E3010F] mb-2`}>Акция</h2>
                 <span className={`text-[1.5rem] font-bold mb-1`}>Скидка <span className={`text-[#E3010F]`}>35%</span> на Вашу кухню</span>
                 <span className={`mb-2`}>до 01.01.2022</span>
                <div className={`flex flex-col`}>
                    <input type="text" 
                    placeholder='Введите номер телефона'
                    className={`border-[1px] border-[#E3010F] w-[150px] h-[30px] p-2 mb-2`}
                    />
                    <button className={`icon relative bg-[#E3010F] w-[150px] h-[30px] text-white`}>Получить скидку</button>
                </div>

            </div>
        </>
    )
}