
import { useContext } from 'react';
import style from './Footer.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export function Footer() {
    const { updateOptionsMenuStatus } = useContext(GlobalContext);

    return (
        <footer onClick={() => updateOptionsMenuStatus(-1)} className={style.mainFooter}>
            Cipyright &copy; ir 🐱
        </footer>
    );
}