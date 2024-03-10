import "./item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const id = JSON.stringify(props.id);
  console.log(id);
  return (
    <div className="item">
      <Link to={"/product/" + id}>
        <img src={props.image} alt="" />

        <p>{props.name}</p>
      </Link>

      <div className="item-price">
        <div className="item-price-new">Price:${props.new_price}</div>
        <div className="item-price-old">Price${props.new_price}</div>
      </div>
    </div>
  );
};

export default Item;
