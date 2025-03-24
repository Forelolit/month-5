import { useQuery } from '@tanstack/react-query';
import { Input, List, Spin } from 'antd';
import { useState } from 'react';
import { searchProducts } from '../api/requests';
import { Product } from '../components/Product';

export const Search = () => {
    const [query, setQuery] = useState('');

    const { data, isLoading } = useQuery({
        queryKey: ['search', query],
        queryFn: () => searchProducts(query),
        enabled: !!query,
    });

    return (
        <div>
            <Input.Search
                placeholder="Enter..."
                onSearch={(value) => setQuery(value)}
                enterButton={true}
                style={{ marginBottom: '1rem' }}
            />

            {isLoading && (
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Spin />
                </div>
            )}

            <List
                dataSource={data}
                grid={{ gutter: 16, column: 4 }}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Product product={item} />
                    </List.Item>
                )}
            />
        </div>
    );
};
