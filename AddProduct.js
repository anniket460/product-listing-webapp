import { Button } from "react-bootstrap";
import Header from "./Header";
import { useState } from "react";

function AddProduct() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [file, setFile] = useState("");
  const [product_type, setProductType] = useState("");
  async function addProduct() {
    console.warn(sku, name, price, color, file, product_type);
    const formData = new FormData();
    formData.append("sku", sku);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("file", file);
    formData.append("product_type", product_type);
    let result = await fetch("http://localhost:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    alert("Data Saved Sucessfully!");
  }
  return (
    <>
      <div className="col-sm-6 offset-sm-3">
        <h3 style={{padding:10}}>Add Product</h3>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSku(e.target.value)}
          placeholder="sku"
        ></input>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        ></input>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        ></input>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setColor(e.target.value)}
          placeholder="color"
        ></input>
        <br />
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="file"
        ></input>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setProductType(e.target.value)}
          placeholder="product_type"
        ></input>
        <br />
        <Button onClick={addProduct}>Add Product</Button>
      </div>
    </>
  );
}

export default AddProduct;
