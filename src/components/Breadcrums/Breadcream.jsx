import "./Breadcrum.css";
import arrow from "../imgs/arro.png";

const Breadcrum = (props) => {
  console.log(props);
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />{" "}
      {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
