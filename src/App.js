import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import VipHome from "./Component/Home/VipHome";
import Login from "./Component/Login/Login";
import Footer from "./Component/Footer/Footer";
import ContactUs from "./Component/ContactUs/ContactUs";
import SignUp from "./Component/SignUp/SignUp";
import OnlineApplication from "./Component/OnlineApplication/OnlineApplication";
import About from "./Component/AboutUs/About";
import Privacy from "./Component/Privacy Policy/Privacy";
import TermsAndConditions from "./Component/Termsandcondition/TermAndConditions";
import Calculator from "./Component/Calculator/Calculator";
import NovatedFleet from "./Component/NovatedFleet/NovatedFleet";
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
        <Route path="/vip-home" element={<VipHome />} />
        <Route path="/online-application" element={<OnlineApplication />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/loan-calculator" element={<Calculator />} />
        <Route path="/novated-fleet-leasing" element={<NovatedFleet />} />
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
