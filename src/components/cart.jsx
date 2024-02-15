import { useGetCartItemsQuery } from "../api/soapApi";

const GetCart = () => {
  const { data, error, isLoading } = useGetCartItemsQuery();
  console.log(data);
  return <p>this is my Cart</p>;
};
export default GetCart;
