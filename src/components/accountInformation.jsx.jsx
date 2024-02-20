import { useGetUserQuery } from "../api/soapApi";
import { Box, Button, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const GetAccount = () => {
  const userId = useSelector((state) => state.user.id);
  const { data, isError, isLoading, isSuccess } = useGetUserQuery(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading user data</p>;
  }

  if (isSuccess) {
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", minHeight: "100vh"  }}>
        <Card key={data.id} sx={{width: "20%",height: "30%", m: 1 }}>
          <CardContent>
            <h4 style={{ margin: "0" }}>User Name:</h4>
            <p style={{ margin: "0", marginBottom: "10px" }}>{data.username}</p>
            <h4 style={{ margin: "0" }}>First Name:</h4>
            <p style={{ margin: "0", marginBottom: "10px" }}>{data.firstName}</p>
            <h4 style={{ margin: "0" }}>Last Name:</h4>
            <p style={{ margin: "0", marginBottom: "10px" }}>{data.lastName}</p>
            <h4 style={{ margin: "0" }}>Email:</h4>
            <p style={{ margin: "0", marginBottom: "10px" }}>{data.email}</p>
            <Link to={"/updateUserInfo"}>
              <Button>Update Information</Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    );
  }
};

export default GetAccount;
