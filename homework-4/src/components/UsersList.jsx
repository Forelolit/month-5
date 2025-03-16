import { Card, Flex, Result, Spin } from 'antd';
import { useUsersStore } from '../zustand';
import { useGetUsers } from '../hooks/useGetUsers';

export const UsersList = () => {
    const { users } = useUsersStore();
    const { isPending, isError, error } = useGetUsers();

    if (isError) {
        return (
            <Flex style={{ width: '100%', height: '80vh' }} justify="center" align="center">
                <Result status="error" subTitle={`Sorry, something went wrong. ${error}`} />
            </Flex>
        );
    }

    return (
        <>
            {isPending ? (
                <Flex style={{ width: '100%', height: '80vh' }} justify="center" align="center">
                    <Spin size="large" />
                </Flex>
            ) : (
                users.map((user) => (
                    <Card key={user.id} title={user.name} style={{ width: 300 }}>
                        <p>
                            <strong>Tel:</strong> {user.phone}
                        </p>
                        <p>
                            <strong>Company:</strong> {user.company.name}
                        </p>
                        <p>
                            <strong>Catch phrase:</strong> {user.company.catchPhrase}
                        </p>
                    </Card>
                ))
            )}
        </>
    );
};
