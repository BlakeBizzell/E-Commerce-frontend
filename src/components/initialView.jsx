import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../api/soapApi";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const InitialView = () => {
  const [products, setProducts] = useState([]);
  const { data: fetchedData, error, isLoading } = useGetProductsQuery();

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading && !error) {
        setProducts(fetchedData);
      }
    };

    fetchData();
  }, [fetchedData, isLoading, error]);

  return (
    <div style={{ position: "relative" }}>
      <Carousel sx={{ zIndex: 0 }}>
        {products.map((product) => (
          <img
            key={product.id}
            src={`data:image/png;base64, ${product.image}`}
            alt="Product Image"
            style={{
              height: "50%",
              display: "block",
              margin: "0 auto",
            }}
          />
        ))}
      </Carousel>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Link to="/sign-in">
          <Button
            sx={{
              margin: "10px 0",
              background: "rgba(255, 255, 255, 0.3)",
              display: "block",
              textDecoration: "none",
            }}
            variant="contained"
            size="large"
          >
            Login
          </Button>
        </Link>
        <Link to="/sign-up">
          <Button
            sx={{
              margin: "10px 0",
              background: "rgba(255, 255, 255, 0.3)",
              display: "block",
              textDecoration: "none",
            }}
            variant="contained"
            size="large"
          >
            Sign up
          </Button>
        </Link>
        <Link to="/products">
          <Button
            sx={{
              margin: "10px 0",
              background: "rgba(255, 255, 255, 0.3)",
              display: "block",
              textDecoration: "none",
            }}
            variant="contained"
            size="large"
          >
            Continue as guest
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InitialView;
