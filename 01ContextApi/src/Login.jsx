
import UserContext from './context/UserContext';
import { useContext } from 'react';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username:e.target[0].value,password:e.target[1].value})
        // setUser([...user, { username: e.target[0].value, password: e.target[1].value }])
        e.target[0].value = ""
        e.target[1].value = ""
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" placeholder='user-name' />
            <br />
                <input type="password" placeholder='password' />
                <br />
                <button >Submit</button>
            </form>
            {
                // user.map((user, index) => {
                //     return (
                //         <div key={index}>
                //             <h1>{user.username}</h1>
                //             <h1>{user.password}</h1>
                //         </div>
                //     );
                // })
            }
        </div>
    );
}

export default Login;
