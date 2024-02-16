import React, { useEffect } from "react";
import { Card, CardContent, Button, Box } from "@mui/material";
import {
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
} from "../api/soapApi";

const GetCart = () => {
  const userId = 3;
  const { data, error, isLoading, refetch } = useGetCartItemsQuery(userId);
  const [removeFromCart] = useRemoveFromCartMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleRemoveFromCart = async (cartItemId) => {
    try {
      await removeFromCart({ userId: userId, cartItemId });
      console.log("Item removed from cart successfully!");
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading cart items...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.cartItems && data.cartItems.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {data.cartItems.map((item) => (
            <Card key={item.id} sx={{ minWidth: 275, maxWidth: 300, m: 1 }}>
              <CardContent>
                <img
                  src={`data:image/png;base64, ${item.product.image}`}
                  alt="Product Image"
                  style={{
                    height: "200px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <p>{item.product.name}</p>
                <p>${item.product.price}</p>
              </CardContent>
              <div style={{ textAlign: "center" }}>
                <Button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove from Cart
                </Button>
              </div>
            </Card>
          ))}
        </Box>
      )}
      {data && data.cartItems && data.cartItems.length === 0 && (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default GetCart;
