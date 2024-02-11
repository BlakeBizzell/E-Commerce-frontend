import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const ProductCard = ({ products, isLoading, error }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {products && products.length > 0 ? (
        products.map((product) => (
          <Card key={product.id} sx={{ minWidth: 275, maxWidth: 300, m: 1 }}>
            <CardContent>
              <p>{product.name}</p>
              <p>${product.price}</p>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <p>{!isLoading && "No products available."}</p>
      )}
    </Box>
  );
};

export default ProductCard;
