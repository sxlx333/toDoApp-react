import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextWrapper } from "./context/GlobalContext";
import { LightboxContextWrapper } from "./context/LightBoxContext";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";

export function App() {
  return (
    <ContextWrapper>
      <LightboxContextWrapper>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </LightboxContextWrapper>
    </ContextWrapper>
  )
}