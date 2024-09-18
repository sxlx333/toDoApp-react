/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const initialContext = {
    optionsMenuOpen: -1,
    updateOptionsMenuStatus: () => { },
    taskId: 0,
    tasks: [],
    addTask: () => { },
    removeTask: () => { },
    changeTaskStatus: () => { },
    updateTask: () => { },
};

export const GlobalContext = createContext(initialContext);

const localStorageIdKey = '51gr_todo_id';
const localStorageTasksKey = '51gr_todo_tasks';

function initialStateValue(localStorageKey, defaultValue) {
    const localData = localStorage.getItem(localStorageKey);

    if (localData) {
        try {
            return JSON.parse(localData);
        } catch (error) {
            console.log(error);
            console.log(localData);
        }
    }

    return defaultValue;
}

export function ContextWrapper(props) {
    const [optionsMenuOpen, setOptionsMenuOpen] = useState(initialContext.optionsMenuOpen);
    const [taskId, setTaskId] = useState(initialStateValue(localStorageIdKey, initialContext.taskId));
    const [tasks, setTasks] = useState(initialStateValue(localStorageTasksKey, initialContext.tasks));

    useEffect(() => {
        localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem(localStorageIdKey, JSON.stringify(taskId));
    }, [taskId]);


    function updateOptionsMenuStatus(id) {
        setOptionsMenuOpen(pre => id === pre ? -1 : id);
    }

    function addTask(text, deadline, color) {
        setTaskId(pre => pre + 1);
        setTasks(pre => [
            ...pre,
            {
                id: taskId + 1,
                text,
                deadline,
                color,
                status: 'todo', // todo / in-progress / done
            }]);
    }

    function removeTask(id) {
        setTasks(pre => pre.filter(task => task.id !== id));
    }

    function changeTaskStatus(id, newStatus) {
        setTasks(pre => pre.map(task => ({ ...task, status: task.id === id ? newStatus : task.status })));
    }

    function updateTask() {
        console.log('updating task...');
    }

    const value = {
        optionsMenuOpen,
        updateOptionsMenuStatus,
        taskId,
        tasks,
        addTask,
        removeTask,
        changeTaskStatus,
        updateTask,
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}