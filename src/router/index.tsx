import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Index from "../pages/Index";
import Register from "../pages/auth/Register";
import ProductDetails from "../pages/ProductDetails";
import PageNotFound from "../pages/PageNotFound";




export const router = createBrowserRouter(createRoutesFromElements(
    <>
        {/* <Route path="/" element={ }>
            <Route index element={<>Home</>} />
        </Route> */}

        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
    </>
))