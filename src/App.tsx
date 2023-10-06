import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/material";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          background: "",
          width: "100%",
          maxWidth: "md",
          margin: 0,
          height: "100vh",
          padding: 0,
        }}
      >
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
