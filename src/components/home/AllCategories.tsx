import { useDispatch } from "react-redux";
import { setCategory } from "../../app/features/marketSlice";
import { sectionsData } from "../../data";

const AllCategories = () => {
    const dispatch = useDispatch()

    const onSelectCategory = (category: string) => {
        dispatch(setCategory(category === "الكل" ? "" : category))
        const ele: HTMLDivElement | null = document.querySelector(".productsList");
        if (ele) {
            setTimeout(() => {
                window.scrollTo({
                    top: ele.offsetTop - 30,
                });
            }, 250);
        }
    }

    const renderSection = (section: { image: string, title: string }, index: number) => (
        <div
            key={index}
            className="card-container hover:transform hover:-translate-y-5 transition duration-300"
            onClick={() => onSelectCategory(section.title)}
        >
            <div className="w-full min-[420px]:w-[110px] h-[110px] bg-white rounded-[10px] shadow border-2 border-teal-700 mx-auto card cursor-pointer">
                <img
                    className="w-[50px] h-[40px] mx-auto mt-8"
                    src={section.image}
                    alt={section.title}
                />
            </div>
            <p className="text-teal-700 text-[15px] text-center mt-2">{section.title}</p>
        </div>
    );
    return (
        <div className="container">
            <h1 className="text-teal-950 text-[30px] font-medium text-right mt-16 mb-8">الأقسام</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-[15px]" dir="rtl">
                {sectionsData.map(renderSection)}
            </div>
        </div>
    )
}

export default AllCategories