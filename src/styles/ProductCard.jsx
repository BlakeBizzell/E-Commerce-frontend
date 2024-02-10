import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ProductCard = ({ products, isLoading, error }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
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
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
