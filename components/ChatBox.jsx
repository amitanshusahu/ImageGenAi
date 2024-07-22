import ChatHeader from "./micro-Ui/ChatHeader"
import ChatInput from "./micro-Ui/ChatInput"
import GenImageBox from "./micro-Ui/GenImageBox"
import { useStore } from '../store/useStore';
import { useEffect, useState } from "react";
import GridView from "./micro-Ui/GridView";

export default function ChatBox() {
  const chatBody = useStore((state) => state.chatBody);
  const [genload, setGenload] = useState(false);
  const [slide, setSlider] = useState(0);
  const [imgarr, setImgarr] = useState([]);

  useEffect(() => {
    const allImages = chatBody.reduce((acc, res) => {
      if (res?.images) {
        return acc.concat(res.images);
      }
      return acc;
    }, []);
    setImgarr(allImages);
  }, [chatBody]);

  return (
    <div className="overflow-hidden gen mobchat">
      <ChatHeader genload={genload} slide={slide} setSlider={setSlider} />
      <div className="w-full ht overflow-hidden">
        <div className="overflow-y-scroll h-full w-full">
          {(slide == 0) ?
            chatBody.map((res, i) => {
              return <GenImageBox key={i} res={res} />
            })
            :
            (
              <div className="m-6">
                <GridView imgarr={imgarr} val={slide} />
              </div>
            )
          }

        </div>
      </div>
      <ChatInput setGenload={setGenload} />
    </div>
  )
}