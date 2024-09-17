import { Footer } from "../components/footer/Footer";
import { Form } from "../components/form/Form";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";

export function Home() {
    return (
        <>
            <Header />
            <Main />
            <Form />
            <Footer />
        </>
    )
}