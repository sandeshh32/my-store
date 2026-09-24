
import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Header />

      <AppRoutes
        cart={cart}
        setCart={setCart}
      />

      <Footer />
    </div>
  );
}

export default App;
