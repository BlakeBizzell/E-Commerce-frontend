import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../api/soapApi";

const GetAllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [products, setProducts] = useState();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div>
      <h1>All Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>{!isLoading && "No products available."}</p>
      )}
    </div>
  );
};

export default GetAllProducts;
