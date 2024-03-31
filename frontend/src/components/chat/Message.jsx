import { useSelector } from "react-redux";
import { formatTime } from "../../utils/getTime";

const Message = ({ message }) => {
    const { user } = useSelector((state) => state.user);
    const fromMe = message.senderId === user._id;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-slate-600";
    const chatClassName = fromMe ? "justify-end" : "justify-start";

    const messageTime = formatTime(message.createdAt);

    return (
        <>
            <div className={`flex flex-col my-2 ${chatClassName}`}>
                <div className={`flex justify-between items-center mb-1 ${fromMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-80 break-words rounded px-4 py-2 ${bubbleBgColor} ${fromMe ? 'ml-auto' : 'mr-auto'}`}>
                        <p className="text-sm text-white">{message.message}</p>
                    </div>
                </div>
                <p className={`text-xs ${fromMe ? 'text-right' : 'text-left'} text-gray-500`}>{messageTime}</p>
            </div>
        </>
    );
};
export default Message;
