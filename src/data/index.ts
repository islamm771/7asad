export const getUserData = () => {
    const userDataString = localStorage.getItem("user-info")
    const userData = userDataString ? JSON.parse(userDataString) : null

    return userData
}