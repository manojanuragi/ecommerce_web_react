import "./ProductDisplay.css";
import star from "../imgs/star.png";
const ProductDisplay = (props) => {
  const { product } = props;
  console.log("dis", props);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-left-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-main">
        <img className="main-img" src={product.image} alt="" />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-rating">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
        </div>
        <div className="description">
          <p>
            A shirt is a cloth garment for the upper body (from the neck to the
            waist). Originally an undergarment worn exclusively by men, it has
            become, in American English, a catch-all term for a broad variety of
            upper-body garments and undergarments.
          </p>
        </div>
        <div className="size">
          <h1>Selct Size</h1>
          <div className="size-c">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <div>
          <button>ADD TO CART</button>
        </div>
        <div className="category">
          <span>Category: </span> {product.category}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
