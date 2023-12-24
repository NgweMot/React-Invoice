import React from "react";
import Product from "./Product";
import ProductCreateForm from "./ProductCreateForm";

const ProductGroup = ({ products }) => {
  return (
    <div id="productGroup" className="p-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {/* <ProductCreateForm/> */}
    </div>
  );
};

export default ProductGroup;
