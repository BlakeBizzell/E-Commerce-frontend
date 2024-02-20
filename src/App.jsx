import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import GetAllProducts from "./components/products.jsx";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GetProduct from "./components/SingleProduct";
import GetAccount from "./components/accountInformation.jsx";
import GetCart from "./components/cart";
import InitialView from "./components/initialView.jsx";
import IsAdmin from "./components/IsAdmin.jsx";
import Checkout from "./components/Checkout.jsx";
import UpdateUserInfo from "./components/UpdateUserInfo.jsx";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar show={false} />
                <InitialView />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <NavBar show={true} />
                <GetAllProducts />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                <NavBar show={true} />
                <GetProduct />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                <NavBar show={false} />
                <SignIn />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <NavBar show={false} />
                <SignUp />
              </>
            }
          />
          <Route
            path="/myAccount"
            element={
              <>
                <NavBar show={true} />
                <GetAccount />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <NavBar show={true} />
                <GetCart />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <NavBar show={true} />
                <IsAdmin />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <NavBar show={true} />
                <Checkout />
              </>
            }
          />
          <Route
            path="/updateUserInfo"
            element={
              <>
                <NavBar show={true} />
                <UpdateUserInfo />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
