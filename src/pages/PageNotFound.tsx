import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                <h1 className="font-bold text-teal-600 text-9xl">404</h1>
                <p className="mb-2 text-2xl font-bold text-center  md:text-3xl">
                    <span className="text-red-500">Oops!</span> <span>Page not found</span>
                </p>
                <p className="mb-8 text-center md:text-lg">The page you’re looking for doesn’t exist.</p>
                <Link to={"/"} className="inline-block bg-teal-600 p-2 text-white rounded-md" reloadDocument>
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
