"use client"
import dynamic from "next/dynamic"
import { useState } from "react"
import SideNav from "@/components/SideNav";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MobileView from "@/components/MobileView";

const DynamicComponent = ({ component }) => {
  const Component = dynamic(() => import(`@/components/${component}`));
  return <Component />;
};

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/api/auth/signin');
    }
  }, []);

  const [currentView, setCurrentView] = useState('Generate');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };


  return (
    <>
      <MobileView className="mobonly"/>
      <div className="w-screen h-screen p-3 overflow-hidden grid md:grid-cols-[20%_80%] lg:grid-cols-[15%_85%] screen">
        <SideNav setCurrentView={setCurrentView} />
        <DynamicComponent component={currentView} />
      </div>
    </>
  )
}