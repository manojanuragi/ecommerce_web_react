import React, { useContext } from "react";
import "./css/Shopcategory.css";

import { ShopContext } from "../components/context/ShopContext";
import Drop from "../components/imgs/drp.png";
import Item from "../components/Item/Item";
const ShopCategory = (props) => {
  const { all_product_list } = useContext(ShopContext);
  console.log(all_product_list, props.category);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span> Showing 1-4</span> out of 12 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={Drop} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product_list.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
