import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Button } from '../button/Button';
import { Stats } from '../stats/Stats';
import style from './Header.module.css';
import logo from '../../assets/logo.png';
import { LightboxContext } from '../../context/LightboxContext';
import { Link } from 'react-router-dom';

export function Header() {
    const { showLightbox } = useContext(LightboxContext);
    const { updateOptionsMenuStatus } = useContext(GlobalContext);

    return (
        <header onClick={() => updateOptionsMenuStatus(-1)} className={style.mainHeader}>
            <img className={style.logo} src={logo} alt="Logo" />
            <nav className={style.nav}>
                <Link className={style.link} to='/'>Home</Link>
                <Link className={style.link} to='/login'>Login</Link>
                <Link className={style.link} to='/404'>404</Link>
            </nav>
            <Stats />
            <Button text="New task" icon="+" onClick={showLightbox} />
        </header>
    );
}