import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import { useSession } from "next-auth/react";

export default function Home() {
  // const session = useSession()
  // console.log(session);
  return (
    <div>
      <main className="max-w-[1444px] m-auto">
        <div className="lg:ml-24 lg:mr-24 md:ml-12 md:mr-12">
          <Navbar/>
          <Hero />
        </div>
      </main>
    </div>
  )
}
