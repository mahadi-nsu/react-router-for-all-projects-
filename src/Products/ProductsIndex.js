import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { listProducts } from "./ProductsService";
import ProductCard from "./ProductCard";

const ProductsIndex = () => {
  const { state } = useLocation();
  console.log(location);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (state) {
      console.warn(`Nothing found for ${state.id}`);
    }
  });

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
