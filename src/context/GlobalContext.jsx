/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const initialContext = {
    optionsMenuOpen: -1,
    updateOptionsMenuStatus: () => { },
    taskId: 0,
    tasks: [],
    addTask: () => { },
    removeTask: () => { },
    updateTask: () => { },
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
    const [optionsMenuOpen, setOptionsMenuOpen] = useState(initialContext.optionsMenuOpen);
    const [taskId, setTaskId] = useState(initialContext.taskId);
    const [tasks, setTasks] = useState(initialContext.tasks);

    function updateOptionsMenuStatus(id) {
        setOptionsMenuOpen(pre => id === pre ? -1 : id);
    }

    function addTask(text, deadline, color) {
        setTaskId(pre => pre + 1);
        setTasks(pre => [...pre, { id: taskId, text, deadline, color }]);
    }

    function removeTask() {
        console.log('removing task...');
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
        updateTask,
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}