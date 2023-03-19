import Hero from "./components/Hero";
import "./App.css";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import UseNightMode from "./darkmode/geceModuAc";
import Navbar from "./components/Navbar";
function App() {
  const [geceModu, setIsNightMode, setGeceModu] = UseNightMode();

  return (
    <div className={geceModu ? " App bg-[#454b4e]" : "App  bg-white "}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Hero geceModu={geceModu} />
      <Skills geceModu={geceModu} />
      <Profile geceModu={geceModu} />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
