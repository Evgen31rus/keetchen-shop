import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import headerBg from "../img/header/header.png";
import BannerZone from "./BannerZone";
import SaleZone from "./SaleZone";

export default function Header() {
  const [TriggerAnimation, setTriggerAnimation] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.to(".nav", {
      backgroundColor: "white",
      opacity: 1,
      scrollTrigger: {
        trigger: ".banerZone",
        start: "top end",
        toggleActions: "restart reserve reserve reserve",
      },
    });
    gsap.to(".nav", {
      backgroundColor: "white",
      opacity: 1,
      scrollTrigger: {
        trigger: ".banerZone",
        start: "top end",
        toggleActions: "restart reserve reserve reserve",
      },
    });
  }, [TriggerAnimation]);

  return (
    <div
      className={`relative  w-[100%] justify-center flex
        sm:flex-col
        `}
      onLoad={() => setTriggerAnimation(true)}
    >
      <div
        className={`nav fixed top-menu-shadow  z-10 flex justify-center w-[100%]  bg-white bg-opacity-75 z-30
        sm:static `}
      >
        <Nav />
        <NavMobile />
      </div>
      <div
        className={` banerZone header-banner relative flex w-[100%] max-w-[1000px] h-[500px] bg-no-repeat bg-cover bg-center 
        sm:w-[100%] `}
      >
        <BannerZone />
      </div>
      <SaleZone />
    </div>
  );
}
