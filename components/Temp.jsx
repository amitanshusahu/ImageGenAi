function Chatbox() {
  return (
    <div className="flex flex-col h-full w-full border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

function ChatHeader() {
  return (
    <div className="p-4 bg-gray-800 text-white">
      Chat Header
    </div>
  );
}

const ChatBody = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
      {/* This will hold the chat messages */}
      {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Chat message {i + 1}</p>
          ))}
    </div>
  );
}; 

function ChatInput() {
  return (
    <div className="p-4 bg-gray-200">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
}

export default function Temp() {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4 bg-gray-200">
      <div className="grid grid-cols-[75%_25%] h-full w-full max-w-lg">
        <Chatbox />
      </div>
    </div>
  );
}