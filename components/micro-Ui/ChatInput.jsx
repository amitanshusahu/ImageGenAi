import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ChatInput() {
  return (
    <div className="m-3 flex justify-between items-center chatInput">
      <div className="flex items-center justify-center">
        <div><button className="btn m-2 glass">+</button></div>
        <div>
          <Select>
            <SelectTrigger className="w-auto glass">
              <SelectValue placeholder="/ Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filters</SelectLabel>
                <SelectItem value="grayscale">Grayscale</SelectItem>
                <SelectItem value="sepia">Sepia</SelectItem>
                <SelectItem value="invert">Invert Colors</SelectItem>
                <SelectItem value="brightness">Brightness</SelectItem>
                <SelectItem value="contrast">Contrast</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full">
        <input type="text" placeholder="Describe your image here" className="w-full in-transparent" />
      </div>
      <div><button className="btn grad m-2">generate</button></div>
    </div>
  )
}