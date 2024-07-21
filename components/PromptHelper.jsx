import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PromptHelpwer() {
  return (
    <aside className="h-full w-full flex flex-col justify-between">
      <div>
        <div className="m-6 font-bold text-xl">Prompt Helper </div>

        <div className="flex mx-6 my-3 justify-between items-center">
          <h1 className="font-semibold">Technical</h1>
          <button className="btn p-0 m-0 text-green-500">reset</button>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="image.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Image Count
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Count" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Image Count</SelectLabel>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="maximize-2.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Aspect Ratio
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Ratio" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Aspect Ratio</SelectLabel>
                <SelectItem value="16:9">16:9</SelectItem>
                <SelectItem value="4:3">4:3</SelectItem>
                <SelectItem value="1:1">1:1</SelectItem>
                <SelectItem value="3:2">3:2</SelectItem>
                <SelectItem value="21:9">21:9</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="x.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Prompt Exclude
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Exclude" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Prompt Exclude</SelectLabel>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="animals">Animals</SelectItem>
                <SelectItem value="vehicles">Vehicles</SelectItem>
                <SelectItem value="people">People</SelectItem>
                <SelectItem value="nature">Nature</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="trending-up.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Image Quality
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Image Quality</SelectLabel>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="ultra">Ultra</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="edit-2.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Prompt Assist
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Assist" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Prompt Assistance Level</SelectLabel>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex mx-6 mb-3 mt-6 justify-between items-center">
          <h1 className="font-semibold">Ai Image Settings</h1>
          <button className="btn p-0 m-0 text-green-500">reset</button>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="settings.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Model
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Model</SelectLabel>
                <SelectItem value="v1">Model V1</SelectItem>
                <SelectItem value="v2">Model V2</SelectItem>
                <SelectItem value="v3">Model V3</SelectItem>
                <SelectItem value="v4">Model V4</SelectItem>
                <SelectItem value="custom">Custom Model</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="settings.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Seed
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Seed" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Seed</SelectLabel>
                <SelectItem value="random">Random</SelectItem>
                <SelectItem value="123">123</SelectItem>
                <SelectItem value="456">456</SelectItem>
                <SelectItem value="789">789</SelectItem>
                <SelectItem value="custom">Custom Seed</SelectItem>
              </SelectGroup>

            </SelectContent>
          </Select>
        </div>

        <div className="flex mx-6 mt-3 justify-between items-center">
          < p className="mb-0 rounded-md text-left text-sm flex gap-2 py-2">
            <Image
              src="settings.svg"
              alt="icon"
              width={15}
              height={15}
              className="invert"
            />
            Sample
          </p>
          <Select>
            <SelectTrigger className="w-32 glass rounded-md">
              <SelectValue placeholder="Sample" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sample</SelectLabel>
                <SelectItem value="low">Low Sample</SelectItem>
                <SelectItem value="medium">Medium Sample</SelectItem>
                <SelectItem value="high">High Sample</SelectItem>
                <SelectItem value="ultra">Ultra Sample</SelectItem>
              </SelectGroup>

            </SelectContent>
          </Select>
        </div>

      </div>

      <Select>
            <SelectTrigger className="preset m-6 glass rounded-md">
              <SelectValue placeholder="Preset" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sample</SelectLabel>
                <SelectItem value="low">Low Sample</SelectItem>
                <SelectItem value="medium">Medium Sample</SelectItem>
                <SelectItem value="high">High Sample</SelectItem>
                <SelectItem value="ultra">Ultra Sample</SelectItem>
              </SelectGroup>

            </SelectContent>
          </Select>
    </aside>
  )
}