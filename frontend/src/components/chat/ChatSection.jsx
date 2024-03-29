import { useEffect } from "react";
import ChatSectionHeader from "./ChatSectionHeader";
import SendMessage from "./SendMessage";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../slices/chatSlice";
import Messages from "./Messages"
import BlankChat from "./BlankChat";

function ChatSection({ setIsContactInfoHidden }) {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { chatWith } = useSelector((state) => state.chat);

    const userId = user._id;
    useEffect(() => {
    }, [chatWith]);

    useEffect(() => {
        const socket = io('http://localhost:5000', {
            query: {
                userId: userId
            }
        });
        socket.on("newMessage", (newMessage) => {
            dispatch(addMessage(newMessage));
        });

        return () => {
            socket.disconnect();
        };
    }, [userId, dispatch]);

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