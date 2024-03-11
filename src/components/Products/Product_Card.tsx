import { ProductsData } from "./ProductData";

const Product_Card = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-2 pt-[2rem] bg-blue-300 pb-6 shadow-inner shadow-black  ">
      {ProductsData.map(({ id, title, quantity, img }) => (
        <div>
          <div className="glass hover:scale-105  " key={id}>
            <a href="tel:8528014915">
              <br />
              <img src={img} alt={title} />
            </a>
          </div>

          <br />
          <div className="shadow-inner bg-white shadow-black rounded-full">
            <h1>{title}</h1>
            <p className="text-[10px]">{quantity}</p>
          </div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Product_Card;
