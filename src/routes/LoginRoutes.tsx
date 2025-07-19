import { Route, Routes } from 'react-router-dom'
import Register from '../pages/register/Register'
import SignIn from '../pages/sign-in/SignIn'

const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    )
}

export default LoginRoutes