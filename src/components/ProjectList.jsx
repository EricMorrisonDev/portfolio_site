import { projects } from "../data/projects"
import { ProjectCard } from "./ProjectCard"


export function ProjectList() {
    return(
        <>
        <div>
            <h2 className="cabin-bold text-4xl md:text-5xl my-18 md:my-24 text-gray-300 text-center tracking-tight">Apps</h2>
            <div className="w-3/4 mx-auto grid grid-cols-1 gap-24 mt-12 md:mt-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index}/>
                ))}
            </div>
        </div>
        </>
    )
}