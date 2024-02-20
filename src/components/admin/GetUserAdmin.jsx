import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetUserQuery } from "../../api/soapApi";

const GetUserById = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: user, error, isLoading } = useGetUserQuery(id);

  const handleBackToAdmin = () => {
    navigate("/admin");
  };

  const handleEditUser = () => {
    navigate(`/user/${id}/edit`);
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
            Username: {user.username}
          </Typography>
          <Typography variant="body1">First Name: {user.firstName}</Typography>
          <Typography variant="body1">Last Name: {user.lastName}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
          <Typography variant="body1">Admin: {user.admin}</Typography>
          <Button variant="contained" onClick={handleBackToAdmin}>
            Back to Admin
          </Button>
          <Button
            variant="contained"
            onClick={handleEditUser}
            style={{ marginLeft: "10px" }}
          >
            Edit User
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GetUserById;
