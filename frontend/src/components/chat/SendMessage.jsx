import { FaMicrophone } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdAdd, IoMdSend } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../slices/chatSlice";


function SendMessage() {
    const dispatch = useDispatch();
    const { chatWith } = useSelector((state) => state.chat);

    const [message, setMessage] = useState("");
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(sendMessage({ message, id: chatWith._id }));
        setMessage("");
    }



    return (
        <>
            <div className="bg-primary  gap-4 flex items-center p-3">
                <BsEmojiSmile className="text-xl text-on-primary" />
                <IoMdAdd className="text-xl text-on-primary" />
                <form className="w-full" onSubmit={handelSubmit}>
                    <input
                        type="text"
                        placeholder="Type a message"
                        className="w-full p-2 rounded-md bg-select outline-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form>
                <div className="w-10">
                    {message === "" ? (
                        <FaMicrophone className="text-xl text-on-primary" />
                    ) : (
                        <IoMdSend onClick={handelSubmit} className="text-3xl cursor-pointer text-on-primary" />
                    )}
                </div>

            </div>
        </>
    )
}
export default SendMessage;