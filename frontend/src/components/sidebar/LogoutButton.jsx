import { BiLogOut } from "react-icons/bi";
import { logoutUser } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LogoutButton = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.user);
	const handelLogout = () => {
		dispatch(logoutUser());
		console.log("logout")
	}
	return (
		<div className='mt-auto'>
			{true ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={handelLogout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
