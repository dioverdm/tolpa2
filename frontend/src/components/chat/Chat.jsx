import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BlankChat from "./BlankChat";
import Messages from "./Messages";

function Chat() {
    const { chatWith } = useSelector((state) => state.chat);
    console.log({ chatWith })
    useEffect(() => {
    }, [chatWith]);

    return (
        <div className="h-full">
            {
                chatWith ? <Messages /> : <BlankChat />
            }
        </div>
    );
}

export default Chat;
