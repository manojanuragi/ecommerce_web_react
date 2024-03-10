import "./style.css";

function ProductCard(props) {
  console.log("pc", props);
  return (
    <div className="ProductCard">
      <img src={props.img} alt="" />
    </div>
  );
}

export default ProductCard;
