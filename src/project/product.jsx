import { useParams } from "react-router-dom";
import "./css/product.css";
import all_product_list from "../components/imgs/all_product";
import Breadcrum from "../components/Breadcrums/Breadcream";
import ProductDisplay from "../components/ProductDiplay/ProductDisplay";

const Product = () => {
  let { id } = useParams();
  const product = all_product_list.find((e) => e.id === Number(id));
  console.log("rendered", id);
  return (
    <div className="product">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
