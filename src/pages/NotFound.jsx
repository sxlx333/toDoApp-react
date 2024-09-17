import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import style from '../components/main/Main.module.css';

export function NotFound() {
    return (
        <>
            <Header />
            <main className={style.content}>
                <h1>404</h1>
                <p>page not found</p>
            </main>
            <Footer />
        </>
    )
}