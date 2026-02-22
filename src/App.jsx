import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products1 from "./components/Products1";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import "./components/styles.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
