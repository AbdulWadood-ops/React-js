import {useLoaderData} from "react-router-dom"
const Github = () => {
    const data = useLoaderData()
//     const [data, setData] = useState({});
//  useEffect(()=>{
//      fetch("https://api.github.com/users/abdulwadood-ops+")
//      .then(res => res.json())
//      .then(data => setData(data))
//  },[]) 


    return (
        <div className="text-center m-4 bg-gray-50 p-4 rounded-lg shadow-md">
            
            <h1 className="text-3xl font-bold mb-4 text-orange-600">
            github profile
            </h1>
            <div className="mt-2"><img className="size-50 rounded-full mx-auto" src={data.avatar_url} alt="github" /></div>
            <p>github followers: {data.followers}</p>
            
            

        </div>
    );
}

export default Github;

// export const githubLoader = async () => {
//     const response = await fetch("https://api.github.com/users/abdulwadood-ops+")
//     return response.json()
// }

