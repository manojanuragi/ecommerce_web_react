import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footar from "./components/footar/footar";
import Shop from "./project/Shop";
import ShopCatogary from "./project/ShopCategory";
import M_b from "./components/imgs/m_.jpg";
import w_b from "./components/imgs/w_banner.jpg";
import k_d from "./components/imgs/kid.jpg";
import Cart from "./project/Cart";
import LoginSignup from "./project/LoginSignup";
import Product from "./project/product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCatogary banner={M_b} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCatogary banner={w_b} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCatogary banner={k_d} category="kid" />}
          />
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footar />
      </BrowserRouter>
    </div>
  );
}
export default App;
