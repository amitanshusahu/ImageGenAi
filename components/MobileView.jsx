"use client"
import dynamic from "next/dynamic"
import { useState } from "react";
import TopNav from "./micro-Ui/TopNav"
import SideNav from "./SideNav"
import PromptHelpwer from "./PromptHelper";

export default function MobileView() {
  const [show, setShow] = useState(false);
  const toggle = () => {
    show ? setShow(false) : setShow(true)
  }
  const DynamicComponent = ({ component }) => {
    const Component = dynamic(() => import(`@/components/${component}`));
    return <Component />;
  };
  const [currentView, setCurrentView] = useState('Generate');
  return (
    <div className="mobonly">
      <div className="m-3">
        <TopNav toggle={toggle}/>
        {show ? <SideNav setCurrentView={setCurrentView} /> : null}
        <DynamicComponent component={currentView} />
      </div>
    </div>
  )
}