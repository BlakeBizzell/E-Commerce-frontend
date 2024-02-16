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
        <NavBar />
        <Routes>
          <Route path="/" element={<InitialView />} />
          <Route path="/products" element={<GetAllProducts />} />
          <Route path="/products/:id" element={<GetProduct />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/myAccount" element={<GetAccount />} />
          <Route path="/cart" element={<GetCart />} />
          <Route path="/admin" element={<IsAdmin />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
