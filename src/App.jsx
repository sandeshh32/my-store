import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
}

export default App;