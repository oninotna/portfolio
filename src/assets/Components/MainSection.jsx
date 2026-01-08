import { useRef } from "react";

import { useThemeContext } from "../Contexts/ThemeContext";

import InfoSection from "./InfoSection";
import SoftSkillsSection from "./SoftSkillsSection";
import TechSkillsSection from "./TechSkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";

export default function MainSection () {
    const softSkillsRef = useRef();
    const techSkillsRef = useRef();
    const experienceRef = useRef()
    const projectsRef = useRef();
    const { theme } = useThemeContext();

    const goTosoftSkillsRef = () => softSkillsRef.current.scrollIntoView({behavior: 'smooth'});
    const goTotechSkillsRef = () => techSkillsRef.current.scrollIntoView({behavior: 'smooth'});
    const goToexperienceRef = () => experienceRef.current.scrollIntoView({behavior: 'smooth'});
    const goToprojectsRef = () => projectsRef.current.scrollIntoView({behavior: 'smooth'});

    return (
        <div className="main-section container">
            <InfoSection scrollDown={goTosoftSkillsRef} goToProjects={goToprojectsRef} />
            <SoftSkillsSection scrollDown={goTotechSkillsRef} ref={softSkillsRef} />
            <TechSkillsSection scrollDown={goToprojectsRef} ref={techSkillsRef} />
            <ProjectsSection scrollDown={goToexperienceRef} ref={projectsRef} />
            <ExperienceSection ref={experienceRef} />
        </div>
    )
}