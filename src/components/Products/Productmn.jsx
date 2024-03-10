import product_list from "../imgs/product_list";

import Item from "../Item/Item";
import "./Procuct.css";
const Productmn = () => {
  return (
    <div className="product">
      <div className="text">
        <h2>Trending Products</h2>
        <hr />
      </div>

      <div className="product-card">
        {product_list.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Productmn;
