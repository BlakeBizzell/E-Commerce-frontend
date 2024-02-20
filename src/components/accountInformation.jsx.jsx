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
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Card key={data.id} sx={{ minWidth: 275, maxWidth: 400, m: 1 }}>
          <CardContent>
            <h1>{data.username}</h1>
            <h1>{data.firstName}</h1>
            <h1>{data.lastName}</h1>
            <h1>{data.email}</h1>
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
