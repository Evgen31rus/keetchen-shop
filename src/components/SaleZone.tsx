import Form from "./Form";

export default function SaleZone() {
  return (
    <>
      <div
        className={`hidden flex flex-col items-center w-[100%] h-[300px] p-5 rounded bg-white   justify-center sm:flex`}
      >
        <h2 className={`text-[1.8rem] font-extrabold text-[#E3010F] mb-2`}>
          Акция
        </h2>
        <span className={`text-[1.5rem] font-bold mb-1`}>
          Скидка <span className={`text-[#E3010F]`}>35%</span> на Вашу кухню
        </span>
        <span className={`mb-2`}>до 01.08.2024</span>
        <div className={`h-[100px] bg-white w-[80%]`}>
          <Form MobileVisible={false} textVisible={false} bannerZone={false} />
        </div>
      </div>
    </>
  );
}
