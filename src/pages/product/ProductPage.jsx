import React, { useEffect, useRef, useState } from "react";

import { NavLink, Outlet } from "react-router-dom";

import { IoMdAddCircleOutline } from "react-icons/io";

const ProductPage = () => {
  let [addInput, setAddInput] = useState(false);
  let nameRef = useRef();
  let priceRef = useRef();
  let activeRef = useRef();

  let finish = (e) => {
    e.preventDefault();

    if (
      (nameRef.current.value.trim() !== "",
      priceRef.current.value.trim() !== "",
      activeRef.current.value.trim() !== "")
    ) {
      fetch("http://localhost:5000/products", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          price: priceRef.current.value,
          status: activeRef.current.value,
          total_sales: 0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIdu5wAGlEglfbG2XeJElzn7l6h_tLxpsUC5mjyoi_DS3iDY6NqXV2ZfGT9lV5vgpvo0&usqp=CAU",
        }),
      })
        .then((res) => res.json())
        .then((data) => (data));
      //   let newData = axios.post("http://localhost:5000/products", {
      //     name: nameRef.current.value,
      //     price: priceRef.current.value,
      //     active: activeRef.current.value,
      //     total_sales: 150,
      //     image:
      //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIdu5wAGlEglfbG2XeJElzn7l6h_tLxpsUC5mjyoi_DS3iDY6NqXV2ZfGT9lV5vgpvo0&usqp=CAU",
      //   });
      //   console.log(newData);
    }

  };
  //   useEffect(()=>{
  //     FetchFunc()
  //   },[finish])

  return (
    <div className="py-7">
      <div className="flex items-center gap-4 justify-between  ">
        <div className="flex items-center gap-1 p-1 border border-[#ececec] w-fit rounded-lg ">
          <NavLink to={"/product/all"} className="py-1 px-4  text-[18px]">
            All
          </NavLink>
          <NavLink to={"/product/active"} className="py-1 px-4  text-[18px]">
            active
          </NavLink>
        </div>
        <div
          onClick={() => {
            setAddInput(true);
          }}
          className="text-white bg-black  px-3 py-1 rounded-md w-fit  flex items-center gap-1"
        >
          <IoMdAddCircleOutline />
          add to Product
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-3 my-6">
        {!addInput ? (
          ""
        ) : (
          <form
            onSubmit={(e) => finish(e)}
            className="w-full text-left border-collapse grid  grid-cols-6  gap-5 bg-gray-400 items-center"
          >
            <div className="p-4">img</div>
            <div className="p-4">
              <input
                ref={nameRef}
                type="text"
                className="w-[150px] rounded-md px-2  border"
                placeholder="name"
              />
            </div>
            <div className="p-4">
              <input
                ref={activeRef}
                type="text"
                className="w-[150px] rounded-md px-2  border"
                placeholder="active"
              />
            </div>
            <div className="p-4">
              <input
                ref={priceRef}
                type="text"
                className="w-[150px] rounded-md px-2  border"
                placeholder="price"
              />
            </div>

            <div className="p-4">0</div>
            <button className="p-4 bg-amber-400 flex items-center justify-center text-[20px] font-medium">
              save
            </button>
          </form>
        )}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductPage;
