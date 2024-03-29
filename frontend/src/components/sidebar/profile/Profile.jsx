import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import EditableField from "./EditableField";

function Profile({ setIsProfileSelected }) {
    const { user } = useSelector((state) => state.user);
    const { name, username, about } = user;

    return (
        <>
            <div className="h-28 flex pl-4 pb-5  text-on-primary bg-primary items-end">
                <div className="flex gap-4 items-center">
                    <FaArrowLeftLong onClick={() => setIsProfileSelected(false)} className="text-2xl cursor-pointer " />
                    <p className="text-xl">Profile</p>
                </div>
            </div>
            <div>
                <div className="avatar w-full">
                    <div className="w-40 mx-auto my-10 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-5 ">
                    <EditableField label="Your name" value={name} />
                    <EditableField label="User name" value={username} />
                    <EditableField label="About" value={about} />
                </div>

            </div>
        </>
    )
}
export default Profile;
