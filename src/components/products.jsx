import { Box, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetProductsQuery, useAddToCartMutation } from "../api/soapApi";
import { useSelector } from "react-redux";
import styles from "../styles";


const GetAllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [addToCart] = useAddToCartMutation();
  const userId = useSelector((state) => state.user.id);

  const handleAddToCart = async (productId) => {
    const quantity = 1;

    try {
      console.log(userId);
      await addToCart({ userId, productId, quantity });

      console.log("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <Box sx={styles.productsBox1}>
          {data.map((product) => (
            <Card key={product.id} sx={styles.productsCard1}>
              <CardContent>
                <img
                  src={`data:image/png;base64, ${product.image}`}
                  alt="Product Image"
                  style={styles.productsImg1}
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
              </CardContent>
              <div style={styles.productsDiv1}>
                <Link to={`/products/${product.id}`}>
                  <Button>See Details</Button>
                </Link>
                <Button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
};

export default GetAllProducts;
