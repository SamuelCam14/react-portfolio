import { Home } from "../../pages/Home";
import { AboutMe } from "../../pages/AboutMe";
import { Projects } from "../../pages/Projects";

export const Display = ({ activeTab }) => {
  return (
    <main className="flex-grow flex items-center justify-center">
      {activeTab === "_hello" && <Home />}
      {activeTab === "_aboutMe" && <AboutMe />}
      {activeTab === "_projects" && <Projects />}
    </main>
  );
};
