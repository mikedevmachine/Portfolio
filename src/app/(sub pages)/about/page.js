import Image from "next/image"
import bg  from "../../../../public/background/about-background.jpeg"
import RenderModel from "../../components/RenderModel"
import GoalRing from "../../components/models/GoalRing"
import AboutDetails from "@/app/components/about"



export default function Home() {
  return (
    <>
     <Image src ={bg}
      alt = "background-image" 
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center
      opacity-50"/>
    
    <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/4 -translate-y-1/2 left-0 z-10">
      <RenderModel> 
      <GoalRing/>
    </RenderModel>
    </div>
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
    <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
      <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl">Miguel Resende</h1>
      <p className="font-light text-foreground text-3xl text-yellow">Junior FullStack Developer</p>
      </div>
      </div>
      <AboutDetails/>
    </>
    )
    };