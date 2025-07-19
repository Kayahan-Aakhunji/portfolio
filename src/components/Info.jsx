import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Work from "./Work";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Info = () => {
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".work", {
      scrollTrigger: {
        trigger: "#trig",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
        ease: "power3.out",
      },
      y: 100,
      opacity: 0,
      stagger: 0.5,
    });
  }, []);

  const projects = [
    {
      title: "WanderLust",
      webLink: "https://wanderlust-3e20.onrender.com",
      imgLink:
        "https://res.cloudinary.com/debkxeydc/image/upload/v1752848156/web-1_sy9iyh.png",
    },
    {
      title: "Portfolio",
      webLink: "https://kayahan-aakhunji.github.io/portfolio/",
      imgLink:
        "https://res.cloudinary.com/debkxeydc/image/upload/v1752848156/web-2_j3b1dd.png",
    },
  ];

  return (
    <div id="info">
      <p id="tag">Here are some of my works,</p>
      <div id="trig"></div>
      <div className="works">
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
