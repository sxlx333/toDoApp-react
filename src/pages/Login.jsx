import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import style from '../components/main/Main.module.css';

export function Login() {
    return (
        <>
            <Header />
            <main className={style.content}>
                <h1>Login</h1>
                <p>LOGIN FORM...</p>
            </main>
            <Footer />
        </>
    )
}