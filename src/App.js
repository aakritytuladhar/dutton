import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Footer from "./Component/Footer/Footer";
function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/Login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {/* Conditionally render Footer */}
      {location.pathname !== "/Login" && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
