import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";

function Profile({ setIsProfileSelected }) {
    const { user } = useSelector((state) => state.user);
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
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-2 ">

                    <div>
                        <div className="flex justify-between">
                            <p className=" text-notify font-thin">
                                Your name
                            </p>
                            <MdEdit />
                        </div>
                        <p>
                            {user.name}
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <p className="text-notify font-thin">
                                Your username
                            </p>
                            <MdEdit />
                        </div>
                        <p>
                            {user.username}
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <p className="text-notify font-thin">
                                About
                            </p>
                            <MdEdit />
                        </div>
                        {/* Add content for 'About' section if needed */}
                    </div>

                </div>

            </div>
        </>
    )
}
export default Profile;