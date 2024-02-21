import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../api/soapApi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "../styles";

// make it look prettier
const GetProduct = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <Box sx={styles.SingleProductBox1}>
      <Card key={data.id} sx={styles.SingleProductCard1}>
        <CardContent>
          <img
            src={`data:image/png;base64, ${data.image}`}
            alt="Product Image"
            style={{
              height: "100%",
              width: "50%",
              display: "block",
              margin: "0 auto",
            }}
          />
          <h4 style={{ margin: "0" }}>Product Name:</h4>
          <p style={{ margin: "0", marginBottom: "10px" }}>{data.name}</p>
          <h4 style={{ margin: "0" }}>Price:</h4>
          <p style={{ margin: "0", marginBottom: "10px"  }}>${data.price}</p>
          <h4 style={{ margin: "0" }}>Description:</h4>
          <p style={{ margin: "0", marginBottom: "10px"  }}> {data.description}</p>
          <h4 style={{ margin: "0" }}>Product Class:</h4>
          <p style={{ margin: "0", marginBottom: "10px"  }}>{data.class}</p>
        </CardContent>
        <div style={{ textAlign: "center" }}>
          <Link to={`/products`}>
            <Button>Back</Button>
            <Link>
              <Button>Add to Cart</Button>
            </Link>
          </Link>
        </div>
      </Card>
    </Box>
  );
};

export default GetProduct;
