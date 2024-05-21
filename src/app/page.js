import Image from "next/image";
import bg  from "../../public/background/background-home.jpeg";
import RenderModel from "./components/RenderModel";
import Shadow from "./components/models/Shadow";
import Navigation from "./components/navigation";




export default function Home() {


  return (

   
    <main className="flex min-h-screen flex-col items-center justify-between relative">
   
     <Image src ={bg} alt = "background-image" fill className="-z-10 w-full h-full object-cover object-center opacity-50"/>
    <div className="w-full h-screen">
      <Navigation/>
    <RenderModel> 
      <Shadow/>
    </RenderModel>
    
    </div>
    </main>
    
  );
}
