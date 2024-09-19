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
                <ProtectedRoute isAllowed={!user} path="/">
                    <ProfileComplete />
                </ProtectedRoute>
            } />
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
    </>
))