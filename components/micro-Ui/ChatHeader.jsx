import Image from "next/image"
import { Slider } from "@/components/ui/slider"


export default function ChatHeader({genload}) {
  return (
    <div className="glass sticky top-0 left-0">
      <div className="flex justify-between items-center p-3">
        <div className="flex justify-center items-center">
          <Image
            src="loader.svg"
            alt="icon"
            width={20}
            height={20}
            className={`invert ${genload ? 'spin': ''}`}
          />
          <span className="text-sm text-gray-500">{genload ? 'Generating...': ''}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image
            src="zoom-out.svg"
            alt="icon"
            width={20}
            height={20}
          />
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-20 bg-black rounded"
          />
          <Image
            src="zoom-in.svg"
            alt="icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  )

}