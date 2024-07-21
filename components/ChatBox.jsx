import ChatHeader from "./micro-Ui/ChatHeader"
import ChatInput from "./micro-Ui/ChatInput"
import GenImageBox from "./micro-Ui/GenImageBox"
import { useStore } from '../store/useStore';
import { useEffect } from "react";

export default function ChatBox() {
  const chatBody = useStore((state) => state.chatBody);

  useEffect(() => {
    console.log(chatBody)
  }, [])

  return (
    <div className="overflow-hidden gen">
      <ChatHeader />
      <div className="w-full ht overflow-hidden">
        <div className="overflow-y-scroll h-full w-full">
          {chatBody.map((res, i) => {
            return <GenImageBox key={i} res={res}/>
          })}
        </div>
      </div>
      <ChatInput />
    </div>
  )
}