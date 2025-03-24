import { List } from 'antd';
import { Product } from '../components/Product';
import { useStoreProject } from '../features/store';

export const Cart = () => {
    const { cart } = useStoreProject();

    return (
        <div style={{ margin: '0 auto', width: 947 }}>
            <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>Cart</h2>

            <List
                dataSource={cart}
                grid={{ gutter: 16, column: 4 }}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Product product={item} cartColor="#7effa3" />
                    </List.Item>
                )}
            />
        </div>
    );
};
