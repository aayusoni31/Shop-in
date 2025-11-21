import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "t-shirt",
      size: "M",
      color: "Red",
      price: 105,
      quantity: 1,
      image: "https://picsum.photos/200/?random=1",
    },
    {
      productId: 2,
      name: "jeans",
      size: "36",
      color: "Blue",
      price: 105,
      quantity: 1,
      image: "https://picsum.photos/200/?random=1",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex item-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4 mt-2">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
