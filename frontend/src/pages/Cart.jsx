import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const totalCartAmount = getTotalCartAmount();

  return (
    <div className="mt-12 md:mt-24">
      {totalCartAmount === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <FaCartShopping className="text-6xl text-neutral-400 mb-4" />
          <h1 className="text-3xl font-semibold dark:text-neutral-200 text-neutral-600 text-center">
            Your cart is empty
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mt-2">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="mt-6 px-8 py-3 bg-orange-500 text-neutral-200 rounded-full text-lg transition hover:bg-orange-600"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div
            style={{
              gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr 0.5fr",
              fontSize: "max(1.3vw,16px)",
            }}
            className="grid items-center dark:text-neutral-200 font-bold"
          >
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 border-none" />

          {/* Cart Items */}
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div
                    style={{
                      gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr 0.5fr",
                      fontSize: "max(1.3vw,14px)",
                    }}
                    className="grid items-center dark:text-neutral-200 my-2"
                  >
                    <img
                      className="w-12"
                      src={`${url}/images/${item.image}`}
                      alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>{item.price}€</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}€</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-200 font-bold text-lg"
                    >
                      x
                    </p>
                  </div>
                  <hr className="w-full h-[2px] bg-neutral-200 dark:bg-neutral-800 border-none" />
                </div>
              );
            }
            return null;
          })}

          {/* Cart Totals */}
          <div
            style={{ gap: "max(8vw, 20px)" }}
            className="mt-8 md:mt-20 flex md:flex-row flex-col justify-between"
          >
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="text-2xl font-bold dark:text-neutral-200">
                Cart Totals
              </h2>
              <div>
                <div className="flex justify-between dark:text-neutral-200">
                  <p>Subtotal</p>
                  <p>{totalCartAmount}€</p>
                </div>
                <hr className="w-full h-[2px] my-2 bg-neutral-200 dark:bg-neutral-800 border-none" />
                <div className="flex justify-between dark:text-neutral-200">
                  <p>Delivery Fee</p>
                  <p>{totalCartAmount === 0 ? 0 : 2}€</p>
                </div>
                <hr className="w-full h-[2px] my-2 bg-neutral-200 dark:bg-neutral-800 border-none" />
                <div className="flex justify-between dark:text-neutral-200">
                  <b>Total</b>
                  <b>{totalCartAmount === 0 ? 0 : totalCartAmount + 2}€</b>
                </div>
              </div>
              <button
                onClick={() => navigate("/order")}
                style={{ width: "max(15vw, 200px)" }}
                className="bg-orange-500 text-neutral-200 py-3 rounded-xl transition-colors hover:bg-orange-600"
              >
                Proceed To Checkout
              </button>
            </div>

            {/* Promo Code */}
            <div>
              <p className="text-lg dark:text-neutral-200">
                If you have a promo code, Enter it here
              </p>
              <div className="mt-3 flex gap-3 items-center">
                <input
                  className="outline-none dark:bg-neutral-900 p-3 rounded-lg dark:text-neutral-200 border border-neutral-700"
                  type="text"
                  placeholder="Promocode"
                />
                <button className="bg-orange-500 text-neutral-200 px-6 py-3 rounded-xl transition-colors hover:bg-orange-600">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
