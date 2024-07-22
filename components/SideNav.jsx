import Image from "next/image"
import Profile from "./micro-Ui/Profile"
import GenerateIcon from "@/assets/GenerateIcon"
import ExploreIcon from "@/assets/ExploreIcon"
import ImageIcon from "@/assets/ImageIcon"
import SettingIcon from "@/assets/SettingIcon"
import MessageIcon from "@/assets/MessageIcon"
import { useState } from "react"

export default function SideNav({ setCurrentView }) {

  const [active, setActive] = useState(1);

  return (
    <aside className="h-full w-full">
      <div className="flex flex-col justify-between h-full mr-3">
        <div>
          <Image
            src="vercel.svg"
            alt="icon"
            width={90}
            height={50}
            className="invert m-7 mob"
          />
          <div className="flex flex-col mobnav">
            <button className={`btn m-3 mb-0 rounded-md text-left flex gap-2 py-2 text-sm font-semibold ${(active == 1) ? 'grad' : 'hov gray'}`}
              onClick={() => { setCurrentView('Generate'); setActive(1) }}>
              <GenerateIcon color={`${(active == 1) ? 'white' : 'gray'}`} />
              Generate
            </button>
            <button className={`btn m-3 mb-0 rounded-md text-left flex gap-2 py-2 text-sm font-semibold ${(active == 2) ? 'grad' : 'hov gray'}`}
              onClick={() => { setCurrentView('MyImages'); setActive(2) }}>
              <ImageIcon color={`${(active == 2) ? 'white' : 'gray'}`} />
              My Image
            </button>
            <button className={`btn m-3 mb-0 rounded-md text-left flex gap-2 py-2 text-sm font-semibold ${(active == 3) ? 'grad' : 'hov gray'}`}
              onClick={() => { setCurrentView('Explore'); setActive(3) }}>
              <ExploreIcon color={`${(active == 3) ? 'white' : 'gray'}`} />
              Explore
            </button>
            <button className={`btn m-3 mb-0 rounded-md text-left flex gap-2 py-2 text-sm font-semibold ${(active == 4) ? 'grad' : 'hov gray'}`}
              onClick={() => { setCurrentView('Settings'); setActive(4) }}>
              <SettingIcon color={`${(active == 4) ? 'white' : 'gray'}`} />
              Settings
            </button>
            <button className={`btn m-3 mb-0 rounded-md text-left flex gap-2 py-2 text-sm font-semibold ${(active == 5) ? 'grad' : 'hov gray'}`}
              onClick={() => { setCurrentView('Support'); setActive(5) }}>
              <MessageIcon color={`${(active == 5) ? 'white' : 'gray'}`} />
              Support
            </button>
          </div>
          <hr className="m-7" />
        </div>

        <div className="m-6 mb-0">
          <Profile />
        </div>
      </div>
    </aside>
  )
}