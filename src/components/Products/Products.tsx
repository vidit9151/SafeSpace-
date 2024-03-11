import Product_Card from "./Product_Card";

const Products = () => {
  return (
    <div className="glass  mt-2 mx-2 text-center px-4 pb-4 ">
      <h1 className="text-2xl md:text-4xl pt-7 pb-4  ">Products</h1>
      <div>
        <Product_Card />
      </div>
    </div>
  );
};

export default Products;
