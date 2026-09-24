import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 My Store</p>

      <div>
         <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
         <Link to="/help">Help</Link>
          <Link to="/cart">Cart</Link>
      </div>
        
      
    </footer>
  );
}

export default Footer;