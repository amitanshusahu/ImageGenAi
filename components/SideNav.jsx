import Image from "next/image"
import Profile from "./micro-Ui/Profile"
import GenerateIcon from "@/assets/GenerateIcon"
import ExploreIcon from "@/assets/ExploreIcon"
import ImageIcon from "@/assets/ImageIcon"
import SettingIcon from "@/assets/SettingIcon"
import MessageIcon from "@/assets/MessageIcon"

export default function SideNav() {
  return (
    <aside className="h-full w-full">
      <div className="flex flex-col justify-between h-full mr-3">
        <div>
          <Image
            src="vercel.svg"
            alt="icon"
            width={90}
            height={50}
            className="invert m-7"
          />
          <div className="flex flex-col">
            <button className="btn m-3 mb-0 grad rounded-md text-left hov flex gap-2 py-2">
              <GenerateIcon color="white" />
              Generate
            </button>
            <button className="btn m-3 mb-0 rounded-md text-left hov flex gap-2 py-2">
              <ImageIcon color="gray" />
              My Image
            </button>
            <button className="btn m-3 mb-0 rounded-md text-left hov flex gap-2 py-2">
              <ExploreIcon color="gray" />
              Explore
            </button>
            <button className="btn m-3 mb-0 rounded-md text-left hov flex gap-2 py-2">
              <SettingIcon color="gray" />
              Settings
            </button>
            <button className="btn m-3 mb-0 rounded-md text-left hov flex gap-2 py-2">
              <MessageIcon color="gray" />
              Support
            </button>
          </div>
          <hr className="m-7" />
        </div>

        <div className="m-6">
          <Profile />
        </div>
      </div>
    </aside>
  )
}