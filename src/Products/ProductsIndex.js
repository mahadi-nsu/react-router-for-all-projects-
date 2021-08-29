import React, { useState, useEffect } from "react";
import { listProducts } from "./ProductsService";
import ProductCard from "./ProductCard";

const ProductsIndex = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      console.log(data);
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsIndex;
