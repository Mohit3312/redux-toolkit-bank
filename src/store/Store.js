import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./MoneySlice";

const Store = configureStore({
  reducer: {
    money: moneyReducer,
  },
});

export default Store;
