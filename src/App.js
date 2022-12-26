import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Store from "./store/Store";

function App() {
  return (
    <Provider store={Store}>
      <Navbar />
      <Shop />
    </Provider>
  );
}

export default App;
