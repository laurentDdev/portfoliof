import { NavLink } from "react-router-dom";

import { animated, useSpring } from "@react-spring/web";

const NavBar = () => {

  const springs = useSpring({
    from: { bottom: -100 },
    to: { bottom: 45 },
    config: { tension: 350, friction: 100 }
  });
  return (
    <animated.nav
      className="w-4/5 rounded-full bg-mydark p-3 dark:bg-myligth xl:w-6/12 2xl:w-1/4"
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        ...springs
      }}
    >
      <ul className="flex justify-between">
        <li className="text-myligth font-poppins dark:text-mydark">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-myorange rounded-full p-1 px-3 text-xs sm:text-base"
                : " p-1 px-3 text-xs sm:text-base"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="text-myligth dark:text-mydark font-poppins">
          <NavLink
            to="/portfolio"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-myorange rounded-full p-1 px-3 text-xs sm:text-base"
                : " p-1 px-3 text-xs sm:text-base"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="text-myligth dark:text-mydark font-poppins">
          <NavLink
            to="/cv"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-myorange rounded-full p-1 px-3 text-xs sm:text-base"
                : " p-1 px-3 text-xs sm:text-base"
            }
          >
            Cv
          </NavLink>
        </li>
        <li className="text-myligth dark:text-mydark font-poppins">
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-myorange rounded-full p-1 px-3 text-xs sm:text-base"
                : " p-1 px-3 text-xs sm:text-base"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </animated.nav>
  );
};

export default NavBar;
