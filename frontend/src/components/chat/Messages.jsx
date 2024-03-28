import { useEffect, useRef } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useSelector } from "react-redux";

function Messages() {
    const { conversation, loading } = useSelector((state) => state.chat);
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [conversation]);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading &&
                conversation.length > 0 &&
                conversation.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && conversation.length === 0 && (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    );
};
export default Messages;