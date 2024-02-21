import { useGetUserQuery } from "../api/soapApi";
import { Box, Button, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../styles";
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
      <Box sx={styles.AIBox1}>
        <Card key={data.id} sx={styles.AICard1}>
          <CardContent>
            <h4 style={styles.H4}>User Name:</h4>
            <p style={styles.AIP}>{data.username}</p>
            <h4 style={styles.H4}>First Name:</h4>
            <p style={styles.AIP}>{data.firstName}</p>
            <h4 style={styles.H4}>Last Name:</h4>
            <p style={styles.AIP}>{data.lastName}</p>
            <h4 style={styles.H4}>Email:</h4>
            <p style={styles.AIP}>{data.email}</p>
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
