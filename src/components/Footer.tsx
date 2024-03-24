export default function Footer() {
  return (
    <div
      className={`flex items-center justify-around w-[100%] h-[80px] bg-[#F1F1F1] text-[0.8rem] text-[#A0A8B1]
        sm:h-[100px]`}
    >
      <div
        className={`w-[75%] max-w-[1000px] flex justify-around
sm:flex-col sm:h-[100%]`}
      >
        <p>
          © “Немецкий Стандарт” Информация на сайте не является публичной
          офертой.
          <br className={`sm:hidden`} />
          Настоящий сайт не является интернет-магазином
        </p>
        <p>© Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
}
