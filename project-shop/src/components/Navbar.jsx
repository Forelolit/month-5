import { Link } from 'react-router-dom';
import { useAuthStore } from '../features/store';
import { Button, Menu } from 'antd';

export const Navbar = () => {
    const { user, logout } = useAuthStore();

    const menuItems = [
        { label: <Link to="/cart">Cart</Link>, key: 'cart' },
        { label: <Link to="/favorites">Favorites</Link>, key: 'favorites' },
        { label: <Link to="/checkout">Checkout</Link>, key: 'checkout' },
    ];

    const guestItems = [
        ...menuItems,
        { label: <Link to="/register">Register</Link>, key: 'register' },
        { label: <Link to="/login">Login</Link>, key: 'login' },
    ];

    const userItems = [
        ...menuItems,
        {
            label: (
                <Button type="primary" onClick={logout}>
                    Logout
                </Button>
            ),
            key: 'logout',
        },
    ];

    return (
        <nav
            style={{
                margin: '0 auto',
                maxWidth: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.4rem 0',
            }}>
            <h1>
                <Link to="/" style={{ color: '#333', textDecoration: 'none' }}>
                    Shop
                </Link>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {user && <span>Hello, {user.username}</span>}
                <Menu
                    mode="horizontal"
                    items={user ? userItems : guestItems}
                    style={user ? { minWidth: '341px' } : { minWidth: '383px' }}
                />
            </div>
        </nav>
    );
};
