import { List } from 'antd';
import { useStoreProject } from '../features/store';
import { Product } from '../components/Product';

export const Favorites = () => {
    const { favorites } = useStoreProject();

    return (
        <div style={{ margin: '0 auto', width: 947 }}>
            <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>Favorites</h2>

            <List
                dataSource={favorites}
                grid={{ gutter: 16, column: 4 }}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Product product={item} favoriteColor="#ff0000" />
                    </List.Item>
                )}></List>
        </div>
    );
};
