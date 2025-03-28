import { Button, Input } from 'antd';
import { useState } from 'react';
import { useAuthStore } from '../features/store';

export const Login = () => {
    const { login } = useAuthStore();

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        const errMsg = login(credentials.username, credentials.password);

        if (errMsg) {
            setError(errMsg);
            return;
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: 500,
                margin: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <Input placeholder="Name" name="username" onChange={handleChange} />
            <Input.Password placeholder="Password" name="password" onChange={handleChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="primary" onClick={handleLogin}>
                Login
            </Button>
        </div>
    );
};
