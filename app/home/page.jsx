"use client"
import dynamic from "next/dynamic"
import { useState } from "react"
import SideNav from "@/components/SideNav";

const DynamicComponent = ({ component }) => {
  const Component = dynamic(() => import(`@/components/${component}`));
  return <Component />;
};

export default function Home() {

  const [currentView, setCurrentView] = useState('Generate');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };


  return (
    <div className="w-screen h-screen p-3 overflow-hidden grid md:grid-cols-[20%_80%] lg:grid-cols-[15%_85%]">
      <SideNav/>
      <DynamicComponent component={currentView}/>
    </div>
  )
}