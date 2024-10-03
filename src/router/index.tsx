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
import Notifications from "../pages/Notifications";
import Favourites from "../pages/Favourites";
import { getUserData } from "../data";
import ProtectedRoute from "./ProtectedRoute";
import Cart from "../pages/Cart";
import AllSpecialOffers from "../pages/AllSpecialOffers";
import AdminLogin from "../pages/Admin/Login";
import AdminDashBoard from "../pages/Admin/Dashboard";
import Users from "../pages/Admin/Users";
import Products from "../pages/Admin/Products";
import AddProduct from "../pages/AddProduct";

const user = getUserData();


export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="scan" element={
                <ProtectedRoute isAllowed={user} path="/auth/login">
                    <Scan />
                </ProtectedRoute>
            } />
            <Route path="notifications" element={
                <ProtectedRoute isAllowed={user} path="/auth/login">
                    <Notifications />
                </ProtectedRoute>
            } />
            <Route path="favourites" element={
                <ProtectedRoute isAllowed={user} path="/auth/login">
                    <Favourites />
                </ProtectedRoute>
            } />
            <Route path="cart" element={
                <ProtectedRoute isAllowed={user} path="/auth/login">
                    <Cart />
                </ProtectedRoute>
            } />
            <Route path="profile" element={
                <ProtectedRoute isAllowed={user} path="/auth/login">
                    <Profile />
                </ProtectedRoute>
            } />
        </Route>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/all-special-offers" element={<AllSpecialOffers />} />
        <Route path="/add-product" element={
            <ProtectedRoute isAllowed={user} path="/auth/login">
                <AddProduct />
            </ProtectedRoute>

        } />


        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={
                <ProtectedRoute isAllowed={!user} path="/">
                    <Login />
                </ProtectedRoute>
            } />
            <Route path="register" element={
                <ProtectedRoute isAllowed={!user} path="/">
                    <Register />
                </ProtectedRoute>
            } />
            <Route path="profile-complete" element={
                <ProtectedRoute isAllowed={user} path="/">
                    <ProfileComplete />
                </ProtectedRoute>
            } />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashBoard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />

        {/* Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
    </>
))