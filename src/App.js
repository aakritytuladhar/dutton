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
import ContactUs from "./Component/ContactUs/ContactUs";
import SignUp from "./Component/SignUp/SignUp";
import OnlineApplication from "./Component/OnlineApplication/OnlineApplication";
function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/Login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/online-application" element={<OnlineApplication />} />
      </Routes>
      {/* Conditionally render Footer */}
      {location.pathname !== "/Login" && location.pathname !== "/signup" && (
        <Footer />
      )}
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
