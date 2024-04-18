import { formatTime, truncateText } from "../../utils/getTime";


function Contact({ contact, handleChatWith, isSelected, isOnline, lastMessage }) {
    const messageTime = formatTime(lastMessage?.createdAt);
    return (
        <div
            onClick={() => handleChatWith(contact)}
            className={`py-4 w-full px-2 border-b flex gap-5 items-center border-border cursor-pointer ${isSelected ? 'bg-select' : ''}`}
        >
            <div className={`avatar ${isOnline ? `online` : ``}`}>
                <div className="w-12 rounded-full">
                    <img src={contact.profilePic} alt="User Avatar" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    <p className="text-white font-bold">{truncateText(contact?.name, 20)}</p>
                    <p className="text-[10px]">{messageTime}</p>
                </div>

                <div className="overflow-hidden">
                    <p className="text-sm">{truncateText(lastMessage?.message, 25)}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
