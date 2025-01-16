import Navbar from "../components/organisems/body/Navbar";
import Experience from "../components/organisems/homepage/Experience";
import Hero from "../components/organisems/homepage/Hero";
import Project from "../components/organisems/homepage/Project";
import Skills from "../components/organisems/homepage/Skills";

const Homepage = () => {
  return (
    <div className="w-full h-full">
      <header>
        <Navbar />
      </header>
      <main className="-mt-1 pt-20">
        <Hero id="about" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Project id="project" />
      </main>
    </div>
  );
};

export default Homepage;
