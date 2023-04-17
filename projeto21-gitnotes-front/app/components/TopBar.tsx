import { useNavigate } from "@remix-run/react";
import { useUser } from "~/context/UserContext"

export default function TopBar() {
    const { username, logout } = useUser();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <div className="w-full h-12 flex justify-around align-center border-b-2 bg-white">
            <span>Hello, you are logged in, {username}!</span>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )    
};
