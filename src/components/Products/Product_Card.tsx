import { ProductsData } from "./ProductData";

const Product_Card = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-5 pt-[2rem] bg-blue-300 pb-6 shadow-inner shadow-black  ">
      {ProductsData.map(({ id, title, quantity, img }) => (
        <div className="glass hover:scale-105 " key={id}>
          <a href="tel:8528014915">
            <br />
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <p className="text-[10px]">{quantity}</p>
            <br />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Product_Card;
