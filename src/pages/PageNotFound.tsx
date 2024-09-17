
const PageNotFound = () => {
    return (
        <div className="container h-screen flex flex-col items-center justify-center">
            <h2 className="text-[40px] font-bold">Oops Page Not Found !!</h2>
            <div className="flex gap-4 mt-12">
                <button className="bg-teal-700 text-white px-4 py-1 rounded-md text-lg"
                    onClick={() => location.reload()}>Refresh</button>
                <button className="bg-teal-700 text-white px-4 py-1 rounded-md text-lg"
                    onClick={() => location.replace("/")}>Home</button>
            </div>
        </div>
    )
}

export default PageNotFound