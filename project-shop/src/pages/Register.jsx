import { Button, Input } from 'antd';
import { useState } from 'react';
import { useAuthStore } from '../features/store';

export const Register = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { register } = useAuthStore();

    const handleRegister = async () => {
        const userData = { username, email, password };
        const errMsg = register(userData);

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
            <h2 style={{ textAlign: 'center' }}>Registration</h2>
            <Input placeholder="Login" name="username" value={username} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input.Password
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button onClick={handleRegister} type="primary">
                Register
            </Button>
        </div>
    );
};
