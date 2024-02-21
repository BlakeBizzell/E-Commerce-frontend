import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, useLocation } from "react-router-dom";
import GetAllProducts from "./components/products.jsx";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GetProduct from "./components/SingleProduct";
import GetAccount from "./components/accountInformation.jsx";
import GetCart from "./components/cart";
import InitialView from "./components/initialView.jsx";
import IsAdmin from "./components/admin/IsAdmin.jsx";
import Checkout from "./components/Checkout.jsx";
import UpdateUserInfo from "./components/UpdateUserInfo.jsx";
import GetUserById from "./components/admin/GetUserAdmin.jsx";
import EditUser from "./components/admin/EditUserAdmin.jsx";
import AddProductForm from "./components/admin/AddProduct.jsx";
import GetSingleProduct from "./components/admin/AdminSingleProduct.jsx";
import EditProduct from "./components/admin/EditProduct.jsx";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // Get the current location
  const location = useLocation();

  // Check if it's the initial view page
  const isInitialViewPage = location.pathname === "/";

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          {/* Conditionally render NavBar */}
          {!isInitialViewPage && <NavBar />}
          <Routes>
            <Route path="/" element={<InitialView />} />
            <Route path="/products" element={<GetAllProducts />} />
            <Route path="/products/:id" element={<GetProduct />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/myAccount" element={<GetAccount />} />
            <Route path="/cart" element={<GetCart />} />
            <Route path="/admin" element={<IsAdmin />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/updateUserInfo" element={<UpdateUserInfo />} />
            <Route path="/user/:id" element={<GetUserById />} />
            <Route path="/user/:id/edit" element={<EditUser />} />
            <Route path="/addProduct" element={<AddProductForm />} />
            <Route path="/singleProduct/:id" element={<GetSingleProduct />} />
            <Route path="/editProduct/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
