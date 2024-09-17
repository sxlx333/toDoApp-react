
import { useContext, useState } from 'react';
import { Button } from '../button/Button';
import style from './Form.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import { LightboxContext } from '../../context/LightboxContext';

export function Form() {
    const { lightboxVisible, hideLightbox } = useContext(LightboxContext);
    const { addTask } = useContext(GlobalContext);

    const defaultText = '';
    const defaultDeadline = '2024-09-03';
    const defaultColor = '#ff0000';
    const [text, setText] = useState(defaultText);
    const [deadline, setDeadline] = useState(defaultDeadline);
    const [color, setColor] = useState(defaultColor);

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleDeadlineChange(e) {
        setDeadline(e.target.value);
    }

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    function handleReset() {
        setText(defaultText);
        setDeadline(defaultDeadline);
        setColor(defaultColor);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        addTask(text, deadline, color);
    }

    return (
        <div className={style.lightbox} data-visible={lightboxVisible}>
            <div onClick={hideLightbox} className={style.background}></div>
            <form onSubmit={handleFormSubmit} className={style.formCreate}>
                <fieldset className={style.formRow}>
                    <label className={style.label} htmlFor="task">Task</label>
                    <input value={text} onChange={handleTextChange} className={style.input} id="task" type="text" required />
                </fieldset>
                <div className={style.columns}>
                    <fieldset className={style.formRow}>
                        <label className={style.label} htmlFor="deadline">Deadline</label>
                        <input value={deadline} onChange={handleDeadlineChange} className={style.input} id="deadline" type="date" min="2024-09-03" max="2025-09-03" required />
                    </fieldset>
                    <fieldset className={style.formRow}>
                        <label className={style.label} htmlFor="color">Color</label>
                        <input value={color} onChange={handleColorChange} className={style.input} id="color" type="color" required />
                    </fieldset>
                </div>
                <fieldset className={style.formRow + ' ' + style.columns}>
                    <Button text="Reset" type="reset" size="small" onClick={handleReset} />
                    <Button text="Create" type="submit" size="small" />
                </fieldset>
                <div onClick={hideLightbox} className={style.close}>x</div>
            </form>
        </div >
    );
}