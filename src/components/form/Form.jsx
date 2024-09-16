import { useState } from 'react';
import { Button } from '../button/Button';
import style from './Form.module.css';

export function Form( { lightboxVisible }) {
    const defaultText = '';
    const defaultDeadline = '2024-09-03';
    const defaultColor = '#ff0000';

    const [text, setText] = useState(defaultText);
    const [deadline, setDeadline] = useState('2024-09-03');
    const [color, setColor] = useState('#ff0000');

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleDeadlineChange(event) {
        setDeadline(event.target.value);
    }

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    function handleReset() {
        setText(defaultText);
        setDeadline(defaultDeadline);
        setColor(defaultColor);
    }

    function handleFormSubmit(event) {
        event.prevent.default;
        console.log('form..');
    }

    return (
        <div className={style.lightbox} data-visible={lightboxVisible}>
            <div className={style.background}></div>
            <form onSubmit={handleFormSubmit} className={style.formCreate}>
                <fieldset className={style.formRow}>
                    <label className={style.label} htmlFor="task">Task</label>
                    <input value={text} onChange={handleTextChange} className={style.input} id="task" type="text" required />
                </fieldset>
                <div className={style.columns}>
                    <fieldset className={style.formRow}>
                        <label className={style.label} htmlFor="deadline">Deadline</label>
                        <input value={deadline} onchange={handleDeadlineChange} className={style.input} id="deadline" type="date" min="2024-09-03" max="2025-09-03" required />
                    </fieldset>
                    <fieldset className={style.formRow}>
                        <label className={style.label} htmlFor="color">Color</label>
                        <input value={color} onchange={handleColorChange} className={style.input} id="color" type="color" required />
                    </fieldset>
                </div>
                <fieldset className={style.formRow + ' ' + style.columns}>
                    <Button text="Reset" type="reset" size="small" onClick={handleReset}/>
                    <Button text="Create" type="submit" size="small" />
                </fieldset>
                <div className={style.close}>x</div>
            </form>
        </div >
    );
}