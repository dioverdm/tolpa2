import { useSelector } from "react-redux";

const Message = ({ message }) => {
    const { user } = useSelector((state) => state.user);
    const fromMe = message.senderId === user._id;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const chatClassName = fromMe ? "chat-end" : "chat-start";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
        </div>
    );
};
export default Message;
