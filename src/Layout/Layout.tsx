import Contact from "../Pages/Contact.page";
import Home from "../Pages/Home.page";
import Header from "./Header";
import {Routes, Route} from "react-router-dom"

const Layout = () => {
    return (
        <div style={{minHeight: '80vh'}}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact"  element={<Contact/>}/>
            </Routes>
          
        </div>
    );
};

export default Layout;