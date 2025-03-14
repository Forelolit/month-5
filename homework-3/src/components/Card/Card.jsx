import style from './Card.module.scss';

export const Card = ({ children, removeTodo, updateTodo, id, toggleTodo, done }) => {
    return (
        <div className={style.card} style={done ? { opacity: '0.8' } : null}>
            <p className={style.card__text} style={done ? { textDecoration: 'line-through' } : null}>
                {children}
            </p>
            <div className={style.card__buttons}>
                <button className={style.card__button_delete} onClick={() => removeTodo(id)}>
                    Delete
                </button>
                <button
                    className={style.card__button_edit}
                    onClick={() => {
                        const newText = prompt('New text', children);
                        if (newText !== null && newText.trim() !== '') {
                            updateTodo(id, newText);
                        } else if (newText.trim() === '') {
                            alert("Don't leave the task empty");
                        }
                    }}>
                    Edit
                </button>
                <button className={style.card__button_done} onClick={() => toggleTodo(id)}>
                    {done ? 'Cancel' : 'Done'}
                </button>
                <span className={style.card__icon_done}>{done ? '✔' : ''}</span>
            </div>
        </div>
    );
};
