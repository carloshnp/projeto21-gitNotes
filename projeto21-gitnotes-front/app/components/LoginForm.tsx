import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from '@remix-run/react';
import { useUser } from '~/context/UserContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    async function handleSubmit(event: any) {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/auth/login', {
                email,
                password,
            });

            if (response.status === 201) {
                console.log(response.data.access_token);
                const accessToken = response.data.access_token;
                login(accessToken);
                console.log(accessToken, 'ok');
                navigate('/dashboard');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}