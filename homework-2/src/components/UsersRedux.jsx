import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsersThunk } from '../store/store';

export function UsersRedux() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsersThunk());
    }, [dispatch]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div>
            <h2>Redux Toolkit Users</h2>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
