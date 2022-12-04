import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import TableData from "./TableData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/add" element={<AddProduct />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<TableData />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
