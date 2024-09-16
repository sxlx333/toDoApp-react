import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

export default function App() {
  const [cardMenuVisibleById, setCardMenuVisibleById] = useState(-1);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  
  function hideOptionsMenu() {
    setCardMenuVisibleById(-1);
  }

  function showOptionsMenu(id) {
    setCardMenuVisibleById(id === cardMenuVisibleById ? -1 : id);
  }

  function showLightbox() {
    setLightboxVisible(true);
  }

  return (
    <>
      <Header onClick={hideOptionsMenu} showLightbox={showLightbox}/>
      <Main onClick={hideOptionsMenu} 
        showOptionsMenu={showOptionsMenu} 
        cardMenuVisibleById={cardMenuVisibleById} 
        lightboxVisible={lightboxVisible}/>
      <Footer onClick={hideOptionsMenu}/>
    </>
  );
}