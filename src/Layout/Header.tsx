import {useContext} from 'react';
import {FaSun, FaMoon} from "react-icons/fa6"
import ThemeProvider from '../context/ThemeProvider';
import {animated, useSpring} from "@react-spring/web"

const Header = () => {
    const Theme = useContext(ThemeProvider)

    const spring = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        delay:500
    })

    const handleChangeTheme = (theme: string) => {
      
        
        if (theme == "ligth") {
            Theme.setTheme("ligth")
            localStorage.setItem("theme", "ligth");
        }else {
            Theme.setTheme("dark")
            localStorage.setItem("theme", "dark");
        }
    }

    return (
        <header className='flex justify-end my-5'>
            {Theme.theme == 'dark' && <animated.span style={{...spring}}><FaSun className='dark:text-myligth cursor-pointer' onClick={() => handleChangeTheme("ligth")} /></animated.span>}
            {Theme.theme == "ligth" && <animated.span style={{...spring}}><FaMoon className='text-mydark cursor-pointer'  onClick={() => handleChangeTheme("dark")}/></animated.span>}
            
        </header>
    );
};

export default Header;