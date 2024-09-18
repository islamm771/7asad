import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
    isAllowed: boolean;
    path: string;
    children: ReactNode;
    data?: unknown;
}

const ProtectedRoute = ({ path, isAllowed, children, data }: IProps) => {

    if (!isAllowed) return <Navigate to={path} replace state={data} />;
    return children;
};

export default ProtectedRoute;
