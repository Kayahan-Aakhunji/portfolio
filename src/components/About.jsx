// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   useGSAP(() => {
//     if (!document.querySelector("[data-scroll-container]")) return;
//     ScrollTrigger.refresh();
//     ScrollTrigger.defaults({
//       scroller: "[data-scroll-container]",
//     });

//     gsap.from(".tech h1, .tech p, .tech .otherLib", {
//       scrollTrigger: {
//         trigger: ".tech",
//         start: "top 70%",
//         end: "bottom 30%",
//         toggleActions: "play none none reverse",
//         scrub: 1,
//       },
//       x: -50,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });

//     gsap.from(".location h1, .location p", {
//       scrollTrigger: {
//         trigger: ".location",
//         start: "top 70%",
//         end: "bottom 30%",
//         toggleActions: "play none none reverse",
//         scrub: 1,
//       },
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });

//     gsap.from(".education h1, .education p", {
//       scrollTrigger: {
//         trigger: ".education",
//         start: "top 70%",
//         end: "bottom 30%",
//         toggleActions: "play none none reverse",
//       },
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <div className="about">
//       <div className="tech">
//         <h1>Technologies I Work With</h1>
//         <p>
//           HTML CSS JS
//           <br />
//           NODE.JS EXPRESS.JS
//           <br />
//           MONGODB SQL
//           <br />
//           GIT GITHUB
//         </p>
//         <div className="otherLib">
//           <h3>Other libraries I Use</h3>
//           <p>
//             BOOTSTRAP TAILWIND
//             <br />
//             LOCOMOTIVE GSAP
//             <br />
//             FRAMER MOTION
//           </p>
//         </div>
//       </div>
//       <br />
//       <div className="location">
//         <h1>Location</h1>
//         <p>Currently i am living at Gujrat,Rajkot</p>
//       </div>
//       <br />
//       <div className="education">
//         <h1>Education</h1>
//         <p>
//           I Am Currently doing BCA
//           <br />
//           From Marwadi University
//         </p>
//       </div>
//     </div>
//   );
// };

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".tech h1, .tech p, .tech .otherLib", {
      scrollTrigger: {
        trigger: ".tech",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".location h1, .location p", {
      scrollTrigger: {
        trigger: ".location",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".education h1, .education p", {
      scrollTrigger: {
        trigger: ".education",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="about">
      <div className="tech">
        <h1>Technologies I Work With</h1>
        <p>
          HTML CSS JS
          <br /> NODE.JS EXPRESS.JS
          <br /> MONGODB SQL
          <br /> GIT GITHUB
        </p>
        <div className="otherLib">
          <h3>Other libraries I Use</h3>
          <p>
            BOOTSTRAP TAILWIND
            <br /> LOCOMOTIVE GSAP
            <br /> FRAMER MOTION
          </p>
        </div>
      </div>
      <br />
      <div className="location">
        <h1>Location</h1>
        <p>Currently i am living at Gujrat,Rajkot</p>
      </div>
      <br />
      <div className="education">
        <h1>Education</h1>
        <p>
          I Am Currently doing BCA
          <br /> From Marwadi University
        </p>
      </div>
    </div>
  );
};

export default About;
