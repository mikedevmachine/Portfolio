import Image from "next/image"
import bg  from "../../../../public/background/background-projects.jpeg"
import { projectsData } from "../../data"
import ProjectList from "../../components/projects"
import RenderModel from "../../components/RenderModel"
import Ring from "../../components/models/Ring"



export default function Home() {
  return (
    <>
     <Image src ={bg} 
     alt = "background-image"
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center
      opacity-50"/>
   


    <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0
    left-1/2 lg:-left-10 h-screen">
      <RenderModel> 
      <Ring/>
    </RenderModel>
     </div> <ProjectList projects = {projectsData}/>
     
     
    </>
    )
    };
