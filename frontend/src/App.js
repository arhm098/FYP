import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen.js";
import NameForm from "./Components/NameForm.js";
import EmailForm from "./Components/EmailForm.js";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1ABC9C",
    },
    action: {
      disabledBackground: "rgba(68, 68, 68, 0.9)",
      disabled: "#FFFFFF !important",
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/name" element={<NameForm />} />
          <Route path="/email" element={<EmailForm />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
