import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Github  from "./components/Github.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import Inbox from "./components/Inbox.jsx"
import githubLoader from "./components/githubloader.jsx";


// Understanding the problem
// This error occurs because you are calling the useLoaderData hook in a component that is not a child of a Data Router.

// In React Router 6.4 +, hooks like useLoaderData, useActionData, and useNavigation only work if your application is configured using the newer "Data APIs"(like createBrowserRouter).If you are still using the legacy <BrowserRouter> component, these hooks will throw this error because the internal context providing the data is missing.

function App() {
  return (
    <BrowserRouter>
      <Header />
  
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route loader={githubLoader} path="/github" element={<Github />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
