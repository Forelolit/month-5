import style from './Todo.module.scss';
import { useTodoStore } from '../../zustand';
import { Card } from '../Card/Card';
import { useState } from 'react';

export const Todo = () => {
    const [text, setText] = useState('');
    const [filter, setFilter] = useState('none');
    const { todos, addTodo, removeTodo, updateTodo, resetStorage, toggleTodo } = useTodoStore();

    const handleSubmit = () => {
        if (!text) return;
        addTodo({ id: Date.now(), text });
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.done;
        if (filter === 'notCompleted') return !todo.done;
        return true;
    });

    return (
        <>
            <form className={style.todo} onSubmit={handleSubmit}>
                <div className={style.todo__text}>
                    <textarea
                        className={style.todo__textarea}
                        placeholder="Enter text"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </div>
                <div className={style.todo__controls}>
                    <div>
                        <span>Filter by: </span>
                        <select
                            className={style.todo__controls__select}
                            name="filter"
                            id="filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}>
                            <option value="none">None</option>
                            <option value="completed">Completed</option>
                            <option value="notCompleted">Not completed</option>
                        </select>
                    </div>
                    <button onClick={resetStorage}>Delete all</button>
                </div>
            </form>

            <div className={style.card__container}>
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <Card
                            key={todo.id}
                            id={todo.id}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                            toggleTodo={toggleTodo}
                            done={todo.done}>
                            {todo.text}
                        </Card>
                    ))
                ) : (
                    <p style={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'center', width: '100%' }}>
                        No tasks...
                    </p>
                )}
            </div>
        </>
    );
};
