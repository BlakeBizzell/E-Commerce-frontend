import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products, isLoading, error }) => {
  const handleClick = (productId, navigate) => {
    console.log("Clicked Product ID:", productId);
    useNavigate(`/products/${productId}`);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {products && products.length > 0 ? (
        products.map((product) => {
          const productUrl = `/products/${product.id}`;
          return (
            <Card key={product.id} sx={{ minWidth: 275, maxWidth: 300, m: 1 }}>
              <CardContent>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </CardContent>
              <CardActions>
                <Link to={productUrl}>
                  <Button size="small" onClick={() => handleClick(product.id)}>
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <p>{!isLoading && "No products available."}</p>
      )}
    </Box>
  );
};

export default ProductCard;
