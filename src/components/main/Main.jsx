/* eslint-disable react/prop-types */
import { Form } from '../form/Form';
import { Tasks } from '../tasks/Tasks';
import style from './Main.module.css';

export function Main({ onClick, showOptionsMenu, cardMenuVisibleById, lightboxVisible }) {
    return (
        <main onClick={onClick} className={style.content}>
            <h1 className={style.title}>Darbų planavimo platforma</h1>
            <Form lightboxVisible={lightboxVisible}/>
            <Tasks showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
            <div className={style.background}></div>
        </main>
    );
}