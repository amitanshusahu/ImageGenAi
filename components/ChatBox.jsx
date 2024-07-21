import ChatHeader from "./micro-Ui/ChatHeader"
import ChatInput from "./micro-Ui/ChatInput"
import GenImageBox from "./micro-Ui/GenImageBox"

export default function ChatBox() {
  return (
    <div className="overflow-hidden gen">
      <ChatHeader />
      <div className="w-full ht overflow-hidden">
        <div className="overflow-y-scroll h-full w-full">
          <GenImageBox />
        </div>
      </div>
      <ChatInput />
    </div>
  )
}