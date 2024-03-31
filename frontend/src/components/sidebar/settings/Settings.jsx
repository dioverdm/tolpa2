import { IoMdArrowBack } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { MdLock } from "react-icons/md";


function Settings({ setIsSettingsSelected }) {
    return (
        <>
            <div className="h-14 flex pl-4 text-on-primary bg-primary items-center">
                <div className="flex gap-4 items-center">
                    <IoMdArrowBack onClick={() => setIsSettingsSelected(false)} className="text-xl cursor-pointer" />
                    <p>Settings</p>
                </div>
            </div>
            <div className="flex flex-col pt-2 gap-4">
                <div className="flex items-center gap-4 hover:bg-select p-4">
                    <MdLock className="text-2xl text-on-primary" />
                    <div>
                        <p className="text-white">Privacy</p>
                        <p className="text-xs">Block contacts, disappearing messages</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 hover:bg-select p-4">
                    <MdChat className="text-2xl text-on-primary" />
                    <div>
                        <p className="text-white">Chats</p>
                        <p className="text-xs">Wallpaper, Theme, chat history</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 hover:bg-select p-4">
                    <IoNotifications className="text-2xl text-on-primary" />
                    <div>
                        <p className="text-white">Notifications</p>
                        <p className="text-xs">Message, call</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 hover:bg-select p-4">
                    <BsPeopleFill className="text-2xl text-on-primary" />
                    <div>
                        <p className="text-white">Invite a friend</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Settings;