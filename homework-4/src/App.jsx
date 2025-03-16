import { Flex } from 'antd';
import { UsersList } from './components/UsersList';

export default function App() {
    return (
        <div style={{ width: 932, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '2rem 0' }}>
                <Flex style={{ width: '100%' }} justify="center">
                    <strong style={{ textTransform: 'uppercase' }}>Made by Aki</strong>
                </Flex>
                <UsersList />
            </div>
        </div>
    );
}
