// import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   useGSAP(() => {
//     if (!document.querySelector("[data-scroll-container]")) return;
//     ScrollTrigger.refresh();
//     ScrollTrigger.defaults({
//       scroller: "[data-scroll-container]",
//     });

//     gsap.from(".contact h1", {
//       scrollTrigger: {
//         trigger: ".contact h1",
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//       y: 10,
//       opacity: 0,
//       ease: "power3.out",
//     });

//     gsap.from(".icon", {
//       scrollTrigger: {
//         trigger: "#social",
//         start: "top 92%",
//         toggleActions: "play none none reverse",
//       },
//       delay: 0.25,
//       y: 10,
//       opacity: 0,
//       stagger: 0.2,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <div className="contact">
//       <h1>Contact Me</h1>
//       <div id="social">
//         <motion.a
//           className="icon"
//           href="https://www.linkedin.com/in/kayahan-aakhunji-06b65335b"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileTap={{ fontSize: "20px" }}
//           whileHover={{ fontSize: "32px" }}
//         >
//           <FaLinkedinIn />
//         </motion.a>
//         <motion.a
//           className="icon"
//           href="https://github.com/Kayahan-Aakhunji"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileTap={{ fontSize: "20px" }}
//           whileHover={{ fontSize: "32px" }}
//         >
//           <FiGithub />
//         </motion.a>
//         <motion.a
//           className="icon"
//           href="https://www.instagram.com/kayahan_aakhunji_11"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileTap={{ fontSize: "20px" }}
//           whileHover={{ fontSize: "32px" }}
//         >
//           <FaInstagram />
//         </motion.a>
//       </div>
//     </div>
//   );
// };

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".contact h1", {
      scrollTrigger: {
        trigger: ".contact h1",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 10,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(".icon", {
      scrollTrigger: {
        trigger: "#social",
        start: "top 92%",
        toggleActions: "play none none reverse",
      },
      delay: 0.25,
      y: 10,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div id="social">
        <motion.a
          className="icon"
          href="https://www.linkedin.com/in/kayahan-aakhunji-06b65335b"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ fontSize: "20px" }}
          whileHover={{ fontSize: "32px" }}
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          className="icon"
          href="https://github.com/Kayahan-Aakhunji"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ fontSize: "20px" }}
          whileHover={{ fontSize: "32px" }}
        >
          <FiGithub />
        </motion.a>
        <motion.a
          className="icon"
          href="https://www.instagram.com/kayahan_aakhunji_11"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ fontSize: "20px" }}
          whileHover={{ fontSize: "32px" }}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
