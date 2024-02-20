import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../api/soapApi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const GetSingleProduct = () => {
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
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Card key={data.id} sx={{ minWidth: 275, maxWidth: 300, m: 1 }}>
        <CardContent>
          <img
            src={`data:image/png;base64, ${data.image}`}
            alt="Product Image"
            style={{
              height: "200px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p>{data.name}</p>
          <p>${data.price}</p>
        </CardContent>
        <div style={{ textAlign: "center" }}>
          <Link to={`/admin`}>
            <Button>Back</Button>
            <Link>
              <Button>Edit</Button>
            </Link>
          </Link>
        </div>
      </Card>
    </Box>
  );
};

export default GetSingleProduct;
