import React from "react";
import { useGetProductsQuery } from "../../api/soapApi";
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <div>
      <div>
        <Typography variant="h5" style={{ textAlign: "center" }}>{`Products: ${
          data ? data.length : 0
        }`}</Typography>
      </div>
      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data &&
          data.map((product) => (
            <Card
              key={product.id}
              style={{ display: "flex", marginBottom: 10 }}
            >
              <CardMedia
                component="img"
                src={`data:image/png;base64, ${product.image}`}
                alt={product.name}
                style={{
                  height: 50,
                  width: 50,
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <div>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="subtitle1">
                    Price: ${product.price}
                  </Typography>
                </div>
                <Link to={`/singleProduct/${product.id}`}>
                  <Button variant="contained" color="primary">
                    View
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </Container>
    </div>
  );
};

export default AllProducts;
