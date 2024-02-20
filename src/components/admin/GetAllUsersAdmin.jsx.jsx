import React from "react";
import { useGetUsersQuery } from "../../api/soapApi";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const GetAllUsers = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const navigate = useNavigate();

  const handleViewUser = (userId) => {
    navigate(`/user/${userId}`);
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

  return (
    <div>
      {data.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div style={{ marginRight: "10px", flexGrow: 1 }}>
            <h4>{`Username: ${user.username}`}</h4>
            <p>{`First Name: ${user.firstName}`}</p>
            <p>{`Last Name: ${user.lastName}`}</p>
            <p>{`Admin: ${user.admin}`}</p>
            <p>{`User Id: ${user.id}`}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={() => handleViewUser(user.id)}
            >
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllUsers;
