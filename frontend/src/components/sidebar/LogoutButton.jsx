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
				<p onClick={handelLogout}>Logout</p>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
