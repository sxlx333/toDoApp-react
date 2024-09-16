import style from './Footer.module.css';

export function Footer({ onClick }) {
    return (
        <footer onClick={onClick} className={style.mainFooter}>
            Cipyright &copy; ir 🐱
        </footer>
    );
}