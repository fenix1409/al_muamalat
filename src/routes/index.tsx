import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"

const DashboardRoutes = () => {
    return (
        <div>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default DashboardRoutes