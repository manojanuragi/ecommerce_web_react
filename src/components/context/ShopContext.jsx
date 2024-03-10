import React, { createContext } from "react";

import all_product_list from "../imgs/all_product";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product_list };
  console.log(all_product_list);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
