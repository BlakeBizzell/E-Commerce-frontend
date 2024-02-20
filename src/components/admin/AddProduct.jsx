import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../api/soapApi";

const AddProductForm = () => {
  const navigate = useNavigate();
  const [addProduct] = useAddProductMutation();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    class: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "price" ? parseFloat(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addProduct(formData);
      console.log("Product added:", response);
      setFormData({
        name: "",
        price: "",
        image: "",
        description: "",
        class: "",
      });
      navigate("/admin");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "100%", maxWidth: 400, padding: 20 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="image"
              label="Image URL"
              value={formData.image}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="class"
              label="Class"
              value={formData.class}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
            >
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddProductForm;
