import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../Home/Home"
import { Register } from "../Register/Register"
import { Login } from "../Login/Login"
import { Profile } from "../Profile/Profile"
import { Appointments } from "../Appointments/Appointments"
import { Admin } from "../Admin/Admin"
import { Services } from "../Servicios/Servicios"

export const Body = () => {

    return (
        <Routes>
            <Route path="*" element={<Navigate to={"/"} replace/>} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    )
}