import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaBox } from "react-icons/fa";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, id) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId: id,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchOrders();
      toast.success("Order status updated");
    } else {
      toast.error("Error updating order status");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-2/3 mx-4 sm:mx-8 mt-12 dark:text-neutral-200">
      <p className="font-bold text-2xl mb-6">Orders Page</p>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            style={{ gridTemplateColumns: "0.5fr 2fr 1.5fr 1fr 0.5fr 1fr" }}
            className="flex flex-col md:grid items-center gap-8 p-5 my-7 border-b-2 dark:border-neutral-800 border-neutral-200"
          >
            <FaBox className="text-3xl text-orange-500" />
            <p>
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} X {item.quantity}
                  {index < order.items.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <div>
              <p>{`${order.address.firstName} ${order.address.lastName}`}</p>
              <p>{order.address.street}</p>
              <p>{order.address.city}, {order.address.state}</p>
              <p>{order.address.country} {order.address.zipcode}</p>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>{order.amount}$</p>
            <div className="relative inline-block w-full max-w-xs">
              <select
                value={order.status}
                onChange={(event) => statusHandler(event, order._id)}
                className="block appearance-none w-full dark:bg-neutral-800 border dark:border-neutral-700 dark:text-neutral-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none hover:cursor-pointer dark:focus:bg-neutral-800 focus:border-orange-500"
              >
                <option value="Pending">Pending</option>
                <option value="Delivering">Delivering</option>
                <option value="Delivered">Delivered</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 dark:text-neutral-300">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-4-4h8l-4 4z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
