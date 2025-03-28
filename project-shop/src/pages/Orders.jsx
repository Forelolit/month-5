import { Flex, List } from 'antd';
import { useAuthStore, useOrderStore } from '../features/store';
import { Link } from 'react-router-dom';

export const Orders = () => {
    const { user } = useAuthStore();
    const { getUserOrders } = useOrderStore();

    return (
        <div style={{ margin: '0 auto', width: 1000 }}>
            {user ? (
                <Flex style={{ flexDirection: 'column', gap: '1rem' }}>
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
