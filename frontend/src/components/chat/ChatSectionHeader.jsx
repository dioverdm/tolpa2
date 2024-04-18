import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { useSocketContext } from "../../context/socketContext";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setChatWith } from "../../slices/chatSlice";
import { formatTime } from "../../utils/getTime";

function ChatSectionHeader({ chatWith, setIsContactInfoHidden }) {

    const dispatch = useDispatch();

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(chatWith._id);
    const lastseen = formatTime(chatWith.lastseen);

    const handleBack = () => {
        dispatch(setChatWith(null));
    }

    return (
        <>
            <div className="h-14 bg-primary flex justify-between items-center p-4 ">
                <div className="flex items-center gap-5">
                    <IoMdArrowBack onClick={() => handleBack()} className="text-xl cursor-pointer text-on-primary" />
                    <div onClick={() => setIsContactInfoHidden(false)} className="flex cursor-pointer justify-center items-center gap-4">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={chatWith.profilePic} />
                            </div>
                        </div>
                        <div>
                            <p className="text-white font-bold">
                                {chatWith.name}
                            </p>
                            <p className="text-xs">
                                {isOnline ? `Online` : `Last seen at ${lastseen}`}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <IoSearchSharp className="text-xl text-on-primary cursor-not-allowed" />
                    <BsThreeDotsVertical className="text-xl text-on-primary cursor-not-allowed" />
                </div>

            </div>
        </>
    )
}
export default ChatSectionHeader;