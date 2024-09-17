import { useDispatch } from "react-redux";
import { setCategory } from "../../app/features/marketSlice";

const sectionsData = [
    { image: 'images/animal.png', title: 'منتجات حيوانية' },
    { image: 'images/veg.png', title: 'خضار' },
    { image: 'images/fruit.png', title: 'فاكهة' },
    { image: 'images/crops.png', title: 'محاصيل' },
    { image: 'images/all.png', title: 'الكل' },
    { image: 'images/med.png', title: 'أدوية' },
    { image: 'images/tools.png', title: 'أدوات زراعية' },
    { image: 'images/equip.png', title: 'معدات زراعية' },
    { image: 'images/milk.png', title: 'منتجات ألبان' },
    { image: 'images/seeds.png', title: 'تقاوي' },
];


const AllCategories = () => {
    const dispatch = useDispatch()

    const onSelectCategory = (category: string) => {
        dispatch(setCategory(category === "الكل" ? "" : category))
        const ele: HTMLDivElement | null = document.querySelector(".productsList");
        if (ele) {
            setTimeout(() => {
                window.scrollTo({
                    top: ele.offsetTop,
                });
            }, 250);
        }
    }

    const renderSection = (section: { image: string, title: string }, index: number) => (
        <div
            key={index}
            className="mb-8 card-container hover:transform hover:-translate-y-5 transition duration-300"
            onClick={() => onSelectCategory(section.title)}
        >
            <div className="w-[110px] h-[110px] bg-white rounded-[10px] shadow border-2 border-teal-700 mx-auto card cursor-pointer">
                <img
                    className="w-[50px] h-[40px] mx-auto mt-8"
                    src={section.image}
                    alt={`Icon for ${section.title}`}
                />
            </div>
            <p className="text-teal-700 text-[15px] text-center mt-2">{section.title}</p>
        </div>
    );
    return (
        <div className="container">
            <div className="mt-16 mb-8">
                <h1 className="text-teal-950 text-[30px] font-medium text-right mt-12 mb-4">الأقسام</h1>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[15px]">
                {sectionsData.map(renderSection)}
            </div>
        </div>
    )
}

export default AllCategories