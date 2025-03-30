import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/api';

export function UsersQuery() {
    // React Query автоматически обрабатывает асинхронные запросы с помощью хука useQuery
    // React Query управляет состоянием загрузки и ошибок автоматически
    // React Query имеет встроенное кэширование и повторные запросы при рефокусировке окна
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div>
            <h2>React Query Users</h2>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
