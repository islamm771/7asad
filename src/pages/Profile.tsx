import { getUserData } from "../data"

const Profile = () => {
    const user = getUserData();
    console.log(user)
    return (
        <div className="container">Profile</div>
    )
}

export default Profile