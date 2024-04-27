
import React, { useContext } from "react";
import "./css/Card.css";
import { DataContext } from "../context/Dataprovider";

const ProductsCard = ({ items }) => {
  const { cart, addToCart } = useContext(DataContext);
  const { id, title } = items;
  const isItemInCart = cart.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!isItemInCart) {
      addToCart([...cart, { ...items, quantity: 1 }]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      addToCart(updatedCart);
    }
  };
  
  return (
    <>
      <img src={items.image} className="products_image" style={{ width: "100%" }} />
      <div className="products_details">
        {/* <span className="title">{items.title.slice(0, 30)}</span> */}
        <span className="title">{items.title.split(' ', 2).join(' ')}</span>
        <span className="prod-desc">
          <div className="products_cart">
            <p className="products_price">
              <span className="" style={{ textDecoration: "underline" }}>
                Sign in
              </span>{" "}
              or Create an account to see pricing
            </p>
            <i
              className={`fa-regular fa-heart ${isItemInCart ? "red" : ""}`}
              style={{
                width: "24px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            ></i>
          </div>
        </span>
      </div>
    </>
  );
};

export default ProductsCard;
