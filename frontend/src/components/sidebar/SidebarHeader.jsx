import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import LogoutButton from "./LogoutButton";

function SidebarHeader({ setIsProfileSelected }) {
    const { user } = useSelector((state) => state.user);
    return (
        <>
            <div className="flex justify-between items-center p-2 h-14 bg-primary">
                <div onClick={() => setIsProfileSelected(true)} className="w-10 rounded-full cursor-pointer bg-slate-900 aspect-square">
                </div>
                <div className="flex gap-2 items-center" >
                    <IoLockClosed className="cursor-pointer" />

                    <details className="dropdown dropdown-end">
                        <summary className="m-1 btn btn-ghost "><BsThreeDotsVertical className="cursor-pointer" /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-select rounded-sm w-52">
                            <li><a>Item 1</a></li>
                            <li><LogoutButton /></li>
                        </ul>
                    </details>
                </div>
            </div>
        </>
    )
}
export default SidebarHeader;