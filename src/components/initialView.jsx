import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function InitialView() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: 400, height: 300 }}>
        <CardContent>
          <CardActions
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Link to="/sign-in">
              <Button
                sx={{ margin: "10px 0" }}
                variant="contained"
                size="large"
              >
                Login
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button
                sx={{ margin: "10px 0" }}
                variant="contained"
                size="large"
              >
                Sign up
              </Button>
            </Link>
            <Link to="/products">
              <Button
                sx={{ margin: "10px 0" }}
                variant="contained"
                size="large"
              >
                Continue as guest
              </Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
