import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useUsersStore } from '../zustand';

const fetchUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
};

export const useGetUsers = () => {
    const { setUsers } = useUsersStore();

    const { data, isSuccess, ...query } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    useEffect(() => {
        if (isSuccess) setUsers(data);
    }, [isSuccess, data, setUsers]);

    return query;
};
