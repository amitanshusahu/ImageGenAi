import PromptHelpwer from "./PromptHelper"
import ChatBox from "./ChatBox"

export default function Generate() {
  return(
    <div className="grid grid-cols-[75%_25%] h-full overflow-hidden">
      <ChatBox />
      <PromptHelpwer />
    </div>
  )
}