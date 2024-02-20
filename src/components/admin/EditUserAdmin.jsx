import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Typography,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetUserQuery, useUpdateUserMutation } from "../../api/soapApi";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: user, error, isLoading } = useGetUserQuery(id);
  const updateUserMutation = useUpdateUserMutation();

  const [userData, setUserData] = useState({
    id: id,
    username: (user && user.username) || "",
    password: (user && user.password) || "",
    firstName: (user && user.firstName) || "",
    lastName: (user && user.lastName) || "",
    email: (user && user.email) || "",
    admin: (user && user.admin) || false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleAdminToggle = (e) => {
    const { checked } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, admin: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserMutation(userData);
      navigate(`/user/${id}`);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

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

  if (!user) {
    return <div>User not found</div>;
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
            Edit User Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="username"
              label="Username"
              value={userData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={userData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="firstName"
              label="First Name"
              value={userData.firstName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={userData.lastName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={userData.admin}
                  onChange={handleAdminToggle}
                />
              }
              label="Admin"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditUser;
