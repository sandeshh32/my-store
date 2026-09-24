import { Routes, Route } from "react-router-dom";
import Products from "./Products.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Contact from "./Contact.jsx";
import Help from "./Help.jsx";
import AddProduct from "./AddProduct.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/help" element={<Help />} />
      <Route
  path="/add-product"
  element={<AddProduct />}
/>
    </Routes>
  );
}

export default AppRoutes;