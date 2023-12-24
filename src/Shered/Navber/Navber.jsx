import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
    const { user, logOutUser } = useContext(AuthContext)


    const logout = () => {
        logOutUser()
    }

    const menu = <>
        <li className="block py-2 px-2 text-black">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#47beff]" : ""
                }
            >
                Home
            </NavLink>
        </li>
        {/* <li className="block py-2 px-2 text-black">
            <NavLink
                to="/alltask"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#47beff]" : ""
                }
            >
                All Task
            </NavLink>
        </li> */}
        <li className="block py-2 px-2 text-black">
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#47beff]" : ""
                }
            >
                About
            </NavLink>
        </li>
        {
            user && <li className="block py-2 px-2 text-black">
            <NavLink
                to="/dashbord/previoustask"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#47beff]" : ""
                }
            >
                Dashbord
            </NavLink>
        </li>
        }
        <li className="block text-black">
            {
                user ? <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className=" rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content -left-32 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="px-2">{user?.displayName}</li>
                        <li className="px-2"><Link to="/dashbord">Dashbord</Link></li>
                        <li className="px-2"><button onClick={logout}>Logout</button></li>
                    </ul></div> : <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#47beff]" : ""
                        }
                    >
                    Login
                </NavLink>
            }

        </li>
    </>
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TaskNest</span>
                </a>
                {/* <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <button data-collapse-toggle="navbar-multi-level" className="">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 -left-16 z-[1] p-2 shadow rounded-box w-auto bg-[#4d9bb8]">
                        {
                            menu
                        }
                    </ul>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            menu
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navber;