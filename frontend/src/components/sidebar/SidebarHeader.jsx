import { useSelector } from "react-redux";

function SidebarHeader() {
    const { user } = useSelector((state) => state.user);
    return (
        <>
            <div className="flex justify-between items-center p-2 h-14 bg-primary">
                <div className="w-10 rounded-full bg-slate-900 aspect-square">
                </div>
                <div >
                    <p>
                        {user.name}
                    </p>
                </div>
            </div>
        </>
    )
}
export default SidebarHeader;