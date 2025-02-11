import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let ComponentContext = createContext({});
let ComponentContextProvider = ({ children }) => {
  let [data, setData] = useState([]);
  //   let [url, setUrl] = useState(false);
  let FetchFunc = async () => {
    let newData = await axios({ url: "http://localhost:5000/products" });
    setData(newData.data);
  };
  useEffect(() => {
    FetchFunc();
  }, []);

  return (
    <ComponentContext.Provider value={{ data, setData }}>
      {children}
    </ComponentContext.Provider>
  );
};
export { ComponentContext, ComponentContextProvider };
