import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import GetAllProducts from "./components/Products";
import NavBar from "./components/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<GetAllProducts />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
