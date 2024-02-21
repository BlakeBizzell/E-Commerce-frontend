import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../api/soapApi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Button, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, error, isLoading } = useGetProductQuery(id);
  const [updateProduct] = useUpdateProductMutation();

  const [formData, setFormData] = useState({
    name: (product && product.name) || "",
    price: (product && product.price) || "",
    image: (product && product.image) || "",
    description: (product && product.description) || "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("id is: ", id, "data is: ", formData);
      await updateProduct({ id, formData });
      navigate(`/product/${id}`);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Render loading, error, or product not found UI
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ minWidth: 300, maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Edit Product Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="price"
              label="Price"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="image"
              label="Image URL"
              value={formData.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProduct;
