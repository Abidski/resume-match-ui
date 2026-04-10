import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
