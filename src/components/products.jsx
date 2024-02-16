import React from "react";
import { Box, Card, CardContent, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery, useAddToCartMutation } from "../api/soapApi";

const GetAllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const { userId } = useParams();
  const [addToCart] = useAddToCartMutation();
  console.log("params", userId);
  const handleAddToCart = async (productId) => {
    // Hardcoded userId as 3 for testing purposes
    const hardCodedUserId = 3;
    const quantity = 1; // You can adjust the quantity as needed

    try {
      await addToCart({ userId: hardCodedUserId, productId, quantity });
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
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((product) => (
            <Card key={product.id} sx={{ minWidth: 275, maxWidth: 300, m: 1 }}>
              <CardContent>
                <img
                  src={`data:image/png;base64, ${product.image}`}
                  alt="Product Image"
                  style={{
                    height: "200px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
              </CardContent>
              <div style={{ textAlign: "center" }}>
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
