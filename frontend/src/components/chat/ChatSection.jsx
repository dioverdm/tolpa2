import { useEffect } from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import SendMessage from "./SendMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../slices/chatSlice";
import Messages from "./Messages"
import BlankChat from "./BlankChat";
import { useSocketContext } from "../../context/socketContext";

function ChatSection({ setIsContactInfoHidden }) {

    const dispatch = useDispatch();
    const { chatWith } = useSelector((state) => state.chat);
    const { socket } = useSocketContext();

    useEffect(() => {
    }, [chatWith]);

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            dispatch(addMessage(newMessage));
        });

        return () => {
            socket?.off("newMessage");
        };
    }, [socket, dispatch]);

    return (
        <>
            {chatWith ? <div div className="flex h-full flex-col">
                <div>
                    <ChatSectionHeader setIsContactInfoHidden={setIsContactInfoHidden} chatWith={chatWith} />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Messages />
                </div>
                <div>
                    <SendMessage />
                </div>
            </div> : <BlankChat />}
        </>
    )
}
export default ChatSection;