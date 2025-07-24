import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Footer from "../components/sections/Footer";
import Profile from "../pages/Profile/Profile";
import Header from "../components/sections/Header";
import SignIn from "../pages/sign-in/SignIn";
import Register from "../pages/register/Register";

const DashboardRoutes = () => {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default DashboardRoutes;
