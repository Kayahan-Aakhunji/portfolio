import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Intro = () => {
  const textRef = useRef();

  useGSAP(() => {
    gsap.to("#loader", {
      y: "-100vh",
      delay: 0.75,
      duration: 0.5,
      ease: "power4.in",
    });
    gsap.from(textRef.current, {
      y: 20,
      opacity: 0,
      delay: 1.25,
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
    });
  }, []);

  return (
    <div id="intro" data-scroll data-scroll-speed="-2.5">
      <div id="loader">
        <img src="/assets/icon-2.jpg" />
      </div>
      <div className="text" ref={textRef}>
        <div>
          <p id="primary">
            kayahan
            <br />
            Aakhunji
          </p>
          <p id="secondary">A professional Web developer</p>
        </div>
        <p id="moto">
          where <br />
          Imagination and Creativity <br />
          Meets With <br />
          Creation Brilliance
        </p>
      </div>
    </div>
  );
};

export default Intro;
