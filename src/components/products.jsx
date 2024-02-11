import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../api/soapApi";
import ProductCard from "../styles/ProductCard";

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
      <ProductCard products={products} isLoading={isLoading} error={error} />
    </div>
  );
};

export default GetAllProducts;
