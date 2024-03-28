import Chat from "./Chat";
import ChatSectionHeader from "./ChatSectionHeader";
import SendMessage from "./SendMessage";

function ChatSection() {
    return (
        <>
            <div className="flex h-full flex-col">
                <div>
                    <ChatSectionHeader />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Chat />
                </div>
                <div>
                    <SendMessage />
                </div>
            </div>
        </>
    )
}
export default ChatSection;