/* eslint-disable react/prop-types */
import { useContext } from 'react';
import style from './TaskCard.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export function TaskCard({ task }) {
    const { optionsMenuOpen, updateOptionsMenuStatus, removeTask, changeTaskStatus } = useContext(GlobalContext);

    function handleOptionsMenuClick(event) {
        event.stopPropagation();
        updateOptionsMenuStatus(task.id);
    }

    function handleDeleteClick() {
        removeTask(task.id);
    }

    return (
        <li className={style.task}>
            <div className={style.header}>
                <div onClick={handleOptionsMenuClick} className={style.more}>...</div>
                <div className={style.moreActions} data-visible={task.id === optionsMenuOpen}>
                    <button className={style.button} type="button">Move up</button>
                    <button className={style.button} type="button">Move down</button>
                    <hr />
                    <button onClick={() => changeTaskStatus(task.id, 'todo')} className={style.button} type="button">Todo</button>
                    <button onClick={() => changeTaskStatus(task.id, 'in-progress')} className={style.button} type="button">In progress</button>
                    <button onClick={() => changeTaskStatus(task.id, 'done')} className={style.button} type="button">Done</button>
                    <hr />
                    <button onClick={handleDeleteClick} className={style.button} type="button">Delete</button>
                </div>
            </div>
            <div className={style.content}>
                <p>{task.id}</p>
                <p>{task.text}</p>
            </div>
            <div className={style.footer}>
                <p>Deadline: {task.deadline}</p>
            </div>
        </li >
    );
}