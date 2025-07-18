import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Work from "./Work";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const worksRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }, []);

  useGSAP(() => {
    ScrollTrigger.defaults({
      scroller: "[data-scroll-container]",
    });

    gsap.from(".work", {
      scrollTrigger: {
        trigger: "#trig",
        start: "top 70%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const projects = [
    {
      title: "WanderLust",
      webLink: "https://wanderlust-3e20.onrender.com",
      imgLink: "/assets/web-1.png",
    },
    {
      title: "Portfolio",
      webLink: "#",
      imgLink: "/assets/web-2.png",
    },
  ];

  return (
    <div id="info" data-scroll data-scroll-speed="1">
      <p id="tag">Here are some of my works,</p>
      <div id="trig"></div>
      <div className="works" ref={worksRef}>
        {projects.map((project, idx) => (
          <Work
            key={idx}
            title={project.title}
            webLink={project.webLink}
            imgLink={project.imgLink}
          />
        ))}
      </div>
    </div>
  );
};
export default Info;
