import { FC } from "react"
import projectsList from "../../../data/project"
import ProjectCard from "../../ProjectCard/ProjectCard"

const ProjectSection : FC = () => {
 
    return (
    <section 
        id="projects"
        className="overflow-hidden relative flex justify-center items-center flex-col py-16 gap-20"
    >
      <div className="absolute w-full h-full  top-0 left-0"/>


      {projectsList.map((item,index)=>
      <ProjectCard  
        key={`${item.title}-project-card-${index}`}  
        index={index} 
        data={item}  
        />)}
    </section>
  )
}

export default ProjectSection