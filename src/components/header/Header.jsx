/* eslint-disable react/prop-types */
import logo from '../../assets/logo.png';
import { Button } from '../button/Button';
import { Stats } from '../stats/Stats';
import style from './Header.module.css';

export function Header({ onClick, showLightbox }) {
    return (
        <header onClick={onClick} className={style.mainHeader}>
            <img className={style.logo} src={logo} alt="Logo" />
            <Stats />
            <Button text="New task" icon="+" onClick={showLightbox}/>
        </header>
    );
}