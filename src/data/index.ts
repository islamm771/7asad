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