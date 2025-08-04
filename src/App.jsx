import Intro from "./components/Intro";
import Info from "./components/Info";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, []);

  return (
    <main>
      <Intro />
      <Info />
      <About />
      <Contact />
    </main>
  );
}

export default App;
