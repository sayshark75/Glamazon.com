import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import NavbarContextProvider from "./Context/NavbarContextProvider";
import FooterContextProvider from "./Context/FooterContextProvider";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Box mt={"3"} width={"100%"} className="App">
      <NavbarContextProvider>
        <Navbar />
      </NavbarContextProvider>
      <AllRoutes />
      <FooterContextProvider>
        <Footer />
      </FooterContextProvider>
    </Box>
  );
}

export default App;
