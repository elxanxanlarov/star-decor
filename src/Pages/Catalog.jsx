import productImg1 from "../../src/assets/image/product1.png";
import ProductCard from "../Components/ProductCard";
const productData = [
  {
    id: 1,
    img: productImg1,
    title: "Eclypse Bookcase",
  },
  {
    id: 2,
    img: productImg1,
    title: "Eclypse Bookcase",
  },
  {
    id: 3,
    img: productImg1,
    title: "Eclypse Bookcase",
  },
  {
    id: 4,
    img: productImg1,
    title: "Eclypse Bookcase",
  },
];
const Catalog = () => {
  return (
    <div className="calatog-page">
      <div className="catalog-head">
        <h2>Catalog</h2>
      </div>
      <div className="catalog-body py-5">
        <div className="container">
          <div className="row g-5">
            {productData.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
