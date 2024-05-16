import Home from "@/app/page";
import HomeBtn from "@/app/components/HomeBtn";
export default function SubPagesLayout({children}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
        <HomeBtn/>
      {children}
    </div>
  )
}