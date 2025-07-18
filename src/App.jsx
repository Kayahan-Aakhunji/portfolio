import Intro from "./components/Intro";
import Info from "./components/Info";
import ScrollContainer from "./components/ScrollContainer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <ScrollContainer>
      <Intro />
      <Info />
      <About />
      <Contact />
    </ScrollContainer>
  );
}

export default App;
