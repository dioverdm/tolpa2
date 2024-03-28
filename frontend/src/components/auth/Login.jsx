import { useEffect, useState } from "react";
import { loginUser } from "../../../slices/userSlice";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.user);
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handelInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        dispatch(loginUser(user)).then(() => {
            navigate("/")
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    })

    return (
        <div className="h-screen w-screen flex justify-center gap-2 flex-col items-center">
            <h1 className="text-3xl font-bold">Welcome to BuzzHive</h1>
            <form onSubmit={handelSubmit} className="flex flex-col gap-2 p-10 rounded bg-white bg-opacity-10 ">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="username"
                        required
                        onChange={handelInputChange}
                        value={user.username}
                        className="grow"
                        placeholder="Username"
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        name="password"
                        required
                        onChange={handelInputChange}
                        value={user.password}
                        className="grow"
                        placeholder="Password"
                    />
                </label>
                <p className="text-xs text-right">New user? <Link to="/register"><span className="underline">Signup</span></Link></p>
                <input type="submit" value="Login" className="btn" />
            </form>
        </div>
    );
}

export default Login;
