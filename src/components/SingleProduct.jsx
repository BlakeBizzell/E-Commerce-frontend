import { useParams } from "react-router-dom";

const GetProduct = () => {
  const { productId } = useParams();
  console.log("Product ID:", productId);
};

export default GetProduct;
