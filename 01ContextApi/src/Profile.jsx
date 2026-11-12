import UserContext from "./context/UserContext";
import { useContext } from "react";
const Profile = () => {

    const {user} = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>
            <p>Username : {user.username}</p>
            <p>Password : {user.password}</p>
        </div>
    );
}

export default Profile;
