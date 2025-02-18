import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

import {useStore} from '../../store/useStore'

export default function ChatInput({setGenload}) {

  const chatInput = useStore((state) => state.chatInput);
  const setChatInput = useStore((state) => state.setChatInput);
  const promptHelperOptions = useStore((state) => state.promptHelperOptions);
  const addChatMessage = useStore((state) => state.addChatMessage);

  const { toast } = useToast();

  const handleChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleSubmit = async () => {
    setGenload(true);
    const payload = {
      ratio: promptHelperOptions.ratio || '1:1',
      count: promptHelperOptions.count || 3,
      prompt: chatInput
    };

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log(data);
    if(data.status){
      addChatMessage(data); 
      setGenload(false);
    }
    else{
      (() => {
        toast({
          title: data.msg,
          description: "There was a problem with your request.",
        })
      })();
      setGenload(false);
    }
  };

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
        <input type="text" placeholder="Describe your image here" className="w-full in-transparent"  onChange={handleChange}/>
      </div>
      <div><button className="btn grad m-2" onClick={handleSubmit}>generate</button></div>
    </div>
  )
}