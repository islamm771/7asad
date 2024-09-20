export const sectionsData = [
    { image: '/images/animal.png', title: 'منتجات حيوانية' },
    { image: '/images/veg.png', title: 'خضار' },
    { image: '/images/fruit.png', title: 'فاكهة' },
    { image: '/images/crops.png', title: 'محاصيل' },
    { image: '/images/all.png', title: 'الكل' },
    { image: '/images/med.png', title: 'أدوية' },
    { image: '/images/tools.png', title: 'أدوات زراعية' },
    { image: '/images/equip.png', title: 'معدات زراعية' },
    { image: '/images/milk.png', title: 'منتجات ألبان' },
    { image: '/images/seeds.png', title: 'تقاوي' },
];



export const getUserData = () => {
    const userDataString = localStorage.getItem("user-info")
    const userData = userDataString ? JSON.parse(userDataString) : null

    return userData
}



export const getAdminData = () => {
    const adminDataString = localStorage.getItem("admin-info")
    const adminData = adminDataString ? JSON.parse(adminDataString) : null

    return adminData
}