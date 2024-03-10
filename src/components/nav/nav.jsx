import "./nav_style.css";
import cart from "../imgs/cart.png";
import logo from "../imgs/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="nav">
      <div className=" logo">
        <img src={logo} alt="" />
        <p>Shop.com</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="./">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="./mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="./womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="./kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="cart">
        <Link to="/login">
          {" "}
          <button id="login">login</button>
        </Link>

        <Link to="/product">
          <img src={cart} alt="" />
        </Link>

        <div className="cart-count">0</div>
      </div>
    </div>
  );
}
export default NavBar;
