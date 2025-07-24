import { Route, Routes } from 'react-router-dom'
import Register from '../pages/register/Register'
import SignIn from '../pages/sign-in/SignIn'
import Profile from '../pages/Profile/Profile'

const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}

export default LoginRoutes