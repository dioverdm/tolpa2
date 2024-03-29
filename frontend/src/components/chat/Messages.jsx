import { useEffect, useRef } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useSelector } from "react-redux";

function Messages() {
    const { conversation, loading } = useSelector((state) => state.chat);
    const lastMessageRef = useRef(null);



    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [conversation]);

    return (
        <div className='p-4 flex-1 overflow-auto'>
            {!loading ? (
                conversation.map((message, index) => (
                    <div key={message._id} ref={index === conversation.length - 1 ? lastMessageRef : null}>
                        <Message message={message} />
                    </div>
                ))
            ) : (
                // Display skeleton loaders when loading
                [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
            )}
            {!loading && conversation.length === 0 && (
                // Display message when no conversation exists
                <p className='text-center pt-5'>Send a message to start the conversation</p>
            )}
        </div>
    );
}

export default Messages;
