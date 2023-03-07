import "./App.css";
import { Home, Products } from "./containers/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='products' element={<Products/>} />
  </Routes>
    );
}

export default App;
