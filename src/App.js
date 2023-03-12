import Hero from "./components/Hero";
import "./App.css";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
