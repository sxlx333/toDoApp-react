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
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/404'>404</Link>
            </nav>
            <Stats />
            <Button text="New task" icon="+" onClick={showLightbox} />
        </header>
    );
}