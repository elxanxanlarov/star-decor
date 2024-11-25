const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 col-sm-6 col-12">
      <div className="product-card">
        <div className="img-block">
            <img src={product.img} alt="" />
        </div>
        <div className="text-con">
            <p className="title text-center">{product.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
