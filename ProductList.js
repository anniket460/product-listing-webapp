import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let result = await fetch("http://localhost:8000/api/list");
      result = await result.json();
      setData(result);
    }
    fetchData();
  }, []);
  console.warn("data", data);
  return (
    <>
      <div>
        <h1>Product List</h1>
        <div className="col-sm-6 offset-sm-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>File</th>
              <th>Product Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <th>{item.product_id}</th>
                <th>{item.sku}</th>
                <th>{item.name}</th>
                <th>{item.price}</th>
                <th>{item.color}</th>
                <th><img style={{height:100}} src={"http://localhost:8000/"+item.file_path}/></th>
                <th>{item.product_type}</th>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      </div>
    </>
  );
}

export default ProductList;
