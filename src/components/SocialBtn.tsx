
import {FaGithub, FaLinkedinIn} from "react-icons/fa6"

import {animated, useSpring} from "@react-spring/web"

const SocialBtn = () => {
    const spring = useSpring({
        from :{opacity: 0},
        to: {opacity: 1},
        delay: 500
    })
    return (
        <animated.div className='flex gap-5 justify-center my-5 p-5' style={{...spring}}>
            
            <span className='bg-myorange rounded-full p-5 cursor-pointer'><FaGithub  /></span>
            <span className='bg-myorange rounded-full p-5 cursor-pointer'><FaLinkedinIn/></span>
            
        </animated.div>
    );
};

export default SocialBtn;