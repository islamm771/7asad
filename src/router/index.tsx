import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Index from "../pages/Index";
import Register from "../pages/auth/Register";
import ProductDetails from "../pages/ProductDetails";
import PageNotFound from "../pages/PageNotFound";
import ProfileComplete from "../pages/auth/ProfileComplete";
import AuthLayout from "../pages/auth/AuthLayout";
import Layout from "../pages/Layout";
import Profile from "../pages/Profile";
import Scan from "../pages/Scan";




export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile-complete" element={<ProfileComplete />} />
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
    </>
))