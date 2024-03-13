import { ProductsData } from "./ProductData";

const Product_Card = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 h-25 pb-0  ">
      {ProductsData.map(({ id, title, quantity, img }) => (
        <div className="glass hover:scale-105 p-1 ">
          <div key={id}>
            <div className="drop-container-container">
              <div className="drop-container  ">
                <div className="drop h-5">
                  <br />
                  <img src={img} alt={title} />
                </div>
              </div>
            </div>

            <br />
            <a href="tel:8528014915">
              <div>
                <h1>{title}</h1>
                <p className="text-[10px]  ">{quantity}</p>
              </div>
            </a>
          </div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Product_Card;
