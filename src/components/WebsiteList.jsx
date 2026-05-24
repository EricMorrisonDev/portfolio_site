import { websites } from "../data/projects"
import { ProjectCard } from "./ProjectCard"

export function WebsiteList() {
    return(
        <>
        <div>
            <h2 className="section-heading">Websites</h2>
            <div className="w-3/4 mx-auto grid grid-cols-1 gap-24 mt-12 md:mt-24">
                {websites.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index}/>
                ))}
            </div>
        </div>
        </>
    )
}