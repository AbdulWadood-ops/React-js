import { useParams } from "react-router-dom";

const User = () => {
    const {userId} = useParams()
    return (
        <div>
            <h1>this is the user:{userId} 
            </h1>
        </div>
    );
}

export default User;
