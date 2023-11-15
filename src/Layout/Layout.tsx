import Contact from "../Pages/Contact.page";
import Home from "../Pages/Home.page";
import AdminLog from "../Pages/admin/AdminLog.page";
import Header from "./Header";
import {Routes, Route, useLocation} from "react-router-dom"

const Layout = () => {
    
    return (
        <div style={{minHeight: '80vh'}}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact"  element={<Contact/>}/>
                <Route path="/admin" element={<AdminLog/>} />
            </Routes>
          
        </div>
    );
};

export default Layout;