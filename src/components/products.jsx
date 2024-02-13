import React from "react";
import { useGetProductsQuery } from "../api/soapApi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const GetAllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();

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
                <Link to={`/products/${product.id}`} key={product.id}>
                  <Button>See Details</Button>
                </Link>
                <Link>
                  <Button>Add to Cart</Button>
                </Link>
              </div>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
};

export default GetAllProducts;
