import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/MoneySlice";

const Shop = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money);
  const handleIncrement = () => {
    dispatch(increment(100));
  };
  const handleDecrement = () => {
    dispatch(decrement(100));
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Deposit/Withdraw money</h2>
      <div className="text-center">
        <button
          className="btn btn-primary btn-sm mx-2"
          onClick={handleIncrement}
        >
          +
        </button>
        Update balance {money}
        <button
          className="btn btn-primary btn-sm mx-2"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Shop;
