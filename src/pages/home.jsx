import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";

export default function Home() {



    return(
        <div>
            <Header/>
            <About id="about"/>
            <Skills id="skills"/>
            <Projects id="projects"/>
            <Contact id="contact"/>
        </div>
    )
}