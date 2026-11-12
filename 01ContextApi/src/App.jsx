import UserContextProvider from "./context/UserContextProvider"
import Login from "./Login"
import Profile from "./Profile"
// import Card from "./Card"
function App() {
  

  return <>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  
  </>
}

export default App