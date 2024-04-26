
// Dataprovider.js
import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const[cart, addToCart]= useState([])
  const[count, setCount]= useState(0)

  return (
    <DataContext.Provider value={{ data, setData, input, setInput , cart, addToCart, count, setCount}}>
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;