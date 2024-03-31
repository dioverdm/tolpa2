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
			{loading ? (
				<span className='loading loading-spinner'></span>
			) : (
				<p onClick={handelLogout}>Logout</p>
			)}
		</div>
	);
};
export default LogoutButton;
