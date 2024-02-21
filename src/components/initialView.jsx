import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../api/soapApi";
import styles from "../styles";


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
      <Carousel sx={styles.initialViewCarousel1}>
        {products.map((product) => (
          <img
            key={product.id}
            src={`data:image/png;base64, ${product.image}`}
            alt="Product Image"
            style={styles.initialViewImg1}
          />
        ))}
      </Carousel>
      <div style={styles.initialViewDiv1} >
        <Link to="/sign-in">
          <Button
            sx={styles.initialViewButton1}
            variant="contained"
            size="large"
          >
            Login
          </Button>
        </Link>
        <Link to="/sign-up">
          <Button
            sx={styles.initialViewButton1}
            variant="contained"
            size="large"
          >
            Sign up
          </Button>
        </Link>
        <Link to="/products">
          <Button
            sx={styles.initialViewButton1}
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
