import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import LogoutButton from "./LogoutButton";


function SidebarHeader({ setIsProfileSelected, setIsSettingsSelected }) {
    const { user } = useSelector((state) => state.user);
    return (
        <>
            <div className="flex justify-between items-center p-2 h-14 bg-primary">
                <div onClick={() => setIsProfileSelected(true)} className="avatar cursor-pointer">
                    <div className="w-10 rounded-full">
                        <img src={user.profilePic} />
                    </div>
                </div>
                <div className="flex gap-2 items-center" >
                    <IoLockClosed className="cursor-not-allowed" />

                    <details className="dropdown dropdown-end">
                        <summary className="m-1 btn btn-ghost "><BsThreeDotsVertical className="cursor-pointer" /></summary>
                        <ul className="p-4 dropdown-content space-y-4 z-[1] bg-select rounded-sm w-40">
                            <li onClick={() => setIsSettingsSelected(true)}>Settings</li>
                            <li><LogoutButton /></li>
                        </ul>
                    </details>
                </div>
            </div>
        </>
    )
}
export default SidebarHeader;