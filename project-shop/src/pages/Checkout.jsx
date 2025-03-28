import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../features/store';
import { Button, Flex, Input, List } from 'antd';
import { useOrderStore } from '../features/store';

export const Checkout = () => {
    const { user } = useAuthStore();
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { addOrder, getUserOrders } = useOrderStore();
    const [item, setItem] = useState('');

    const handlePlaceOrder = () => {
        if (!item) return alert('Введите товар');

        addOrder({ item, price: Math.floor(Math.random() * 1000) });
        setItem('');
    };

    const handleOrder = async () => {
        if (!address || !phone) {
            setError('Please fill in all fields');
            return;
        }

        try {
            navigate('/order-confirmation');
        } catch (error) {
            console.log(error);
            setError('Failed to place your order. Please try again later.');
        }
    };

    return (
        <div style={{ margin: '0 auto', width: 1000 }}>
            <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>Your orders:</h2>
            {user ? (
                <Flex style={{ flexDirection: 'column', gap: '1rem' }}>
                    <Flex>
                        <Input value={item} onChange={(e) => setItem(e.target.value)} placeholder="Enter product" />
                        <Button type="primary" onClick={handlePlaceOrder}>
                            Place an order
                        </Button>
                    </Flex>
                    <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <Input placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button type="primary" onClick={handleOrder}>
                        Order
                    </Button>
                    <List>
                        {getUserOrders().map((order) => (
                            <List.Item key={order.id}>
                                {order.item} - ${order.price}
                            </List.Item>
                        ))}
                    </List>
                </Flex>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
};
