import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({
    username: null,
    login: (accessToken: string) => { accessToken },
    logout: () => { },
});

function UserProvider(props: any) {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accesstoken');
        if (accessToken) {
            const decodedToken: any = jwtDecode(accessToken);
            const username = decodedToken.username;
            setUsername(username);
        }
    })

    const login = (accessToken: string) => {
        localStorage.setItem('accessToken', accessToken);
        if (accessToken) {
            const decodedToken: any = jwtDecode(accessToken);
            const username = decodedToken.username;
            setUsername(username);
            console.log(decodedToken, 'ok')
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setUsername(null);
    }

    return (
        <UserContext.Provider value={{ username, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
}

function useUser() {
    return useContext(UserContext);
}

export { UserProvider, useUser };