import Map from "../img/main/contacts-fon/contacts-fon.png";

export default function Contacts() {
  return (
    <div
      className={`flex flex-col w-[90%] h-[400px] items-center m-auto mt-10
              sm:h-[900px] `}
    >
      <h1 className={`  w-[100%]  text-center text-[2.5rem] font-extrabold`}>
        Контакты
      </h1>

      <div
        className={`w-[90%] h-[70%] bg-center bg-cover relative mt-10 
        sm:bg-auto`}
        style={{
          backgroundImage: `url('${Map}')`,
        }}
      >
        <div
          className={`top-menu-shadow absolute flex flex-col justify-between  top-[10%] left-[2%] w-[30%] h-[65%] bg-[#FFFFFFF2] p-10 
sm:top-[90%] sm:w-[98%] sm:h-[230px] sm:left-[0.5%] sm:right-[0.5%] sm:m-auto sm:text-[1.0rem]`}
        >
          <div className={`flex flex-col sm:hidden`}>
            <p className={`text-[1.4rem] font-bold mb-2 `}>Адрес:</p>
            <p>
              г. Краснодар, ул. Красных Партизан, 483 (работаем по г. Краснодар)
            </p>
          </div>
          <div className={`flex flex-col`}>
            <div className={`flex items-center`}>
              <div>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`hidden sm:flex`}
              >
                <path
                  d="M16.5 2.5C7.425 2.5 0 9.925 0 19C0 28.075 7.425 35.5 16.5 35.5C25.575 35.5 33 28.075 33 19C33 9.925 25.575 2.5 16.5 2.5ZM16.5 32.2C9.24 32.2 3.3 26.26 3.3 19C3.3 11.74 9.24 5.8 16.5 5.8C23.76 5.8 29.7 11.74 29.7 19C29.7 26.26 23.76 32.2 16.5 32.2Z"
                  fill="#E3010F"
                />
                <path
                  d="M17.3246 10.75H14.8496V20.65L23.4296 25.93L24.7496 23.785L17.3246 19.33V10.75Z"
                  fill="#E3010F"
                />
              </svg>
              </div>
              

              <div
                className={`hidden flex-col ml-5   mb-5 sm:font-bold sm:flex sm:w-[100%] `}
              >
                <p
                  className={`flex flex-wrap text-[1.4rem] w-[60%] text-wrap
                sm:text-[1.2rem] sm:w-[100%]`}
                >
                  Отвечаем на звонки с 9:00 до 21:00 без выходных!
                </p>
              </div>
            </div>
            <div className={`hidden items-center mb-5 sm:flex`}>
              <div className={`flex items-center`}>
                <div>
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hidden sm:flex`}
                >
                  <path
                    d="M27.9932 25.0614C27.8548 25.0145 27.7085 24.9955 27.5627 25.0055C27.4169 25.0155 27.2745 25.0543 27.1438 25.1197C27.013 25.1851 26.8966 25.2757 26.8011 25.3863C26.7056 25.497 26.633 25.6255 26.5875 25.7644C26.5419 25.9032 26.5244 26.0498 26.5358 26.1955C26.5473 26.3412 26.5875 26.4832 26.6541 26.6132C26.7208 26.7433 26.8126 26.8589 26.9241 26.9533C27.0357 27.0477 27.1649 27.119 27.3042 27.1631C29.8342 27.9926 30.9666 28.983 30.9666 29.5954C30.9666 31.1366 25.2322 33.4662 16.5892 33.4662C7.94631 33.4662 2.2119 31.1366 2.2119 29.5954C2.2119 28.983 3.34431 27.9926 5.87427 27.1631C6.01359 27.119 6.14278 27.0477 6.25437 26.9533C6.36595 26.8589 6.45773 26.7433 6.52438 26.6132C6.59103 26.4832 6.63124 26.3412 6.64268 26.1955C6.65413 26.0498 6.63658 25.9032 6.59105 25.7644C6.54552 25.6255 6.47291 25.497 6.37743 25.3863C6.28195 25.2757 6.16548 25.1851 6.03476 25.1197C5.90404 25.0543 5.76166 25.0155 5.61585 25.0055C5.47004 24.9955 5.32369 25.0145 5.18526 25.0614C0.899667 26.4665 0 28.3026 0 29.5954C0 33.5882 8.34538 35.6781 16.5892 35.6781C24.8331 35.6781 33.1785 33.5882 33.1785 29.5954C33.1785 28.3026 32.2788 26.4665 27.9932 25.0614Z"
                    fill="#E3010F"
                  />
                  <path
                    d="M15.8986 31.0128C16.0947 31.1694 16.3383 31.2547 16.5893 31.2547C16.8403 31.2547 17.0838 31.1694 17.2799 31.0128C17.6844 30.6887 27.1746 22.9828 27.1746 13.0854C27.1746 10.2779 26.0594 7.58552 24.0742 5.60038C22.0891 3.61524 19.3967 2.5 16.5893 2.5C13.7819 2.5 11.0894 3.61524 9.10429 5.60038C7.11915 7.58552 6.00391 10.2779 6.00391 13.0854C6.00393 22.9828 15.4941 30.6888 15.8986 31.0128ZM12.7974 13.0854C12.7975 12.3354 13.0199 11.6023 13.4366 10.9788C13.8532 10.3552 14.4455 9.86924 15.1383 9.58228C15.8312 9.29531 16.5936 9.22024 17.3291 9.36657C18.0647 9.5129 18.7403 9.87405 19.2706 10.4044C19.8009 10.9347 20.162 11.6103 20.3083 12.3458C20.4546 13.0814 20.3795 13.8438 20.0925 14.5367C19.8055 15.2295 19.3195 15.8217 18.6959 16.2384C18.0723 16.655 17.3392 16.8774 16.5893 16.8774C15.5836 16.8773 14.6191 16.4778 13.908 15.7667C13.1969 15.0556 12.7974 14.0911 12.7974 13.0854V13.0854Z"
                    fill="#E3010F"
                  />
                </svg>
                </div>
              

                <div className={`flex flex-col ml-5  sm:font-bold sm:w-[100%]`}>
                  <p
                    className={`text-[1.4rem] w-[100%]
                sm:text-[1.2rem]`}
                  >
                    г. Краснодар, ул. Красных Партизан, 483
                  </p>
                </div>
              </div>
            </div>
            <div className={`flex flex-col`}>
              <p className={`text-[1.4rem] font-bold mb-2 sm:hidden`}>
                Телефон:
              </p>
              <div className={`flex items-center`}>
                <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hidden sm:flex`}
                >
                  <path
                    d="M21 3.0625C30.8896 3.0625 38.9375 11.1104 38.9375 21C38.9375 30.8896 30.8896 38.9375 21 38.9375C11.1104 38.9375 3.0625 30.8896 3.0625 21C3.0625 11.1104 11.1104 3.0625 21 3.0625ZM21 0.5C9.67896 0.5 0.5 9.67896 0.5 21C0.5 32.321 9.67896 41.5 21 41.5C32.321 41.5 41.5 32.321 41.5 21C41.5 9.67896 32.321 0.5 21 0.5ZM32.4287 27.8542L32.3135 27.5039C32.0433 26.6981 31.1524 25.8573 30.3316 25.632L27.3012 24.8037C26.4804 24.581 25.3092 24.8813 24.7063 25.4844L23.6101 26.5805C19.6263 25.5019 16.5007 22.3764 15.4246 18.3925L16.5208 17.2964C17.1213 16.6958 17.4216 15.5247 17.1989 14.7014L16.373 11.6709C16.1503 10.8501 15.3044 9.95923 14.4987 9.68896L14.1533 9.57381C13.345 9.30355 12.1914 9.57629 11.5908 10.1794L9.94922 11.821C9.65645 12.1113 9.46875 12.9446 9.46875 12.9472C9.41366 18.1573 11.4557 23.1747 15.1393 26.8608C18.8129 30.5343 23.8128 32.5739 29.0053 32.5288C29.0329 32.5288 29.8912 32.3461 30.184 32.0533L31.8256 30.4117C32.4262 29.8136 32.6964 28.66 32.4287 27.8542Z"
                    fill="#E3010F"
                  />
                </svg>
                </div>
                
                <div className={`flex flex-col ml-5 sm:font-bold`}>
                  <p
                    className={`text-[1.5rem] 
                sm:text-[1.2rem]`}
                  >
                    +7 (612) 177-93-76
                  </p>
                  <p
                    className={`text-[1.5rem]
                sm:text-[1.2rem]`}
                  >
                    +7 (989) 277-94-30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
