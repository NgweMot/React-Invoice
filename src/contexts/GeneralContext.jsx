import React, { createContext, useState } from "react";
export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.0 },
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 1.25 },
    { id: 4, name: "Grapes", price: 2.5 },
  ]);
  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [records, setRecord] = useState([]);
  const addRecord = (newRecord) => {
    const isExistedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );
    if (isExistedRecord) {
      updateRecord(isExistedRecord.id, newRecord.quantity);
    } else {
      setRecord([...records, newRecord]);
    }
  };
  const removeRecord = (id) =>
    setRecord(records.filter((record) => record.id != id));
  const updateRecord = (id, addQuantity) => {
    setRecord(
      records.map((el) => {
        if (el.id === id) {
          const newQuantity = el.quantity + addQuantity;

          const newCost = el.price * newQuantity;
          return {
            ...el,
            quantity: newQuantity,
            cost: newCost,
          };
        }
      })
    );
  };
  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        products,
        addProduct,
        records,
        addRecord,
        removeRecord,
        updateRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;