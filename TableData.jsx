import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const TableData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const respone = await axios.get("http://localhost:8000/api/list");
      setData(respone.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.product_id,
      sortable:true,
      
    },
    {
      name: "Model",
      selector: (row) => row.sku,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable:true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable:true,
    },
    {
      name: "Color",
      selector: (row) => row.color,
    },
    {
      name: "File",
      selector: (row) => (
        <img
          width={100}
          src={"http://localhost:8000/" + row.file_path}
        />
      ),
    },
    {
      name: "Product Type",
      selector: (row) => row.product_type,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataTable title="Product List" columns={columns} data={data} pagination fixedHeader highlightOnHover/>
  );
};

export default TableData;
