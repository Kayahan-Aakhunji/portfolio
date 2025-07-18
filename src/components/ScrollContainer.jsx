import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
    });

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scrollRef.current.scrollTo(value, 0, 0)
          : scrollRef.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });

    scrollRef.current.on("scroll", ScrollTrigger.update);

    const resizeRefresh = () => {
      scrollRef.current?.update();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resizeRefresh);

    setTimeout(resizeRefresh, 500);

    return () => {
      if (scrollRef.current) scrollRef.current.destroy();
      window.removeEventListener("resize", resizeRefresh);
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;
