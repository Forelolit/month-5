import './App.css';
import { UsersQuery } from './components/UsersQuery';
import { UsersRedux } from './components/usersRedux';

// Большая разница в кол-во кода, react-query сделан только под запросы
// Rtk можно писать запросы но не целесобразно, для Rtk есть redux-saga
// это библиотека, цель которой сделать асинхронные операции более простыми в управлении

// Получается что используют Rtk + redux-saga или Zustand + react-query

export default function App() {
    return (
        <>
            <UsersRedux />
            <UsersQuery />
        </>
    );
}
