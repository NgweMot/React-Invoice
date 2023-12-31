import React, { useState } from "react";
import Header from "./components/Header";
import CheckoutForm from "./components/CheckoutForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
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
  const addRecord = (newRecord) => setRecord([...records, newRecord]);
  const removeRecord = (id) => setRecord(records.filter((record) => record.id != id));

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm addRecord={addRecord} products={products} />
      <RecordTable removeRecord={removeRecord} records={records} />
      <Footer handleDrawer={handleDrawer} />
      <Drawer
        addProduct={addProduct}
        products={products}
        handleDrawer={handleDrawer}
        openDrawer={openDrawer}
      />
    </div>
  );
};

export default App;
