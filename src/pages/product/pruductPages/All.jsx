import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductPages = () => {
  let [data, setData] = useState([]);

  let FetchFunc = async () => {
    let newData = await axios({ url: "http://localhost:5000/products" });
    setData(newData.data);
  };
  useEffect(() => {
    FetchFunc();
  }, []);
  const getCurrentDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <div className="px-3">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              {/* <tr className="bg-gray-400">
                <th className="p-4">
                  <input
                    type="text"
                    className="w-[150px] rounded-md px-2  border"
                    placeholder="name"
                  />
                </th>
                <th className="p-4">
                  <input
                    type="text"
                    className="w-[150px] rounded-md px-2  border"
                    placeholder="active"
                  />
                </th>
                <th className="p-4">
                  <input
                    type="text"
                    className="w-[150px] rounded-md px-2  border"
                    placeholder="price"
                  />
                </th>
                <th className="p-4">
                  <input
                    type="text"
                    className="w-[150px] rounded-md px-2  border"
                    placeholder="total"
                  />
                </th>
                <th className="p-4">0</th>
                <th className="p-4">now date</th>
              </tr> */}
              <tr className="bg-gray-200">
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Status</th>
                <th className="p-4">Price</th>
                <th className="p-4">Total Sales</th>
                <th className="p-4">Created At</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((value) => (
                <tr key={value.id} className="border-b hover:bg-gray-100">
                  <td className="p-4">
                    <img
                      src={value.image}
                      alt={value.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">{value.name}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full">
                      {value.status}
                    </span>
                  </td>
                  <td className="p-4">${value.price}</td>
                  <td className="p-4">{value.total_sales}</td>
                  <td className="p-4">{getCurrentDateTime()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPages;
