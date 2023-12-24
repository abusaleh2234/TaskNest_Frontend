import { Link, useLocation } from "react-router-dom";
import taskbg from "../../../assets/taskbg.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import PrivateRoute from "../../../Router/PrivateRoute/PrivateRoute";
const Banner = () => {
    const {user} = useContext(AuthContext)
     const location = useLocation()
    // console.log(location);
    return (
        <div className="min-h-[90vh] flex justify-center items-center bg-fixed bg-center bg-no-repeat	bg-cover p-12" style={{ backgroundImage: `url(${taskbg})` }}>
            <div className="w-full bg-black bg-opacity-50  text-white text-center md:py-28 space-y-4">
                <h1 className="text-5xl font-bold ">Please creat a Tast Easyly</h1>
                <p className="max-w-2xl mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptates fugiat suscipit quisquam soluta laudantium sunt velit blanditiis quam rerum.</p>
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link state={location.pathname} to={ user ? "/dashbord" :"/login"}>Let&apos;s Explore</Link></button>

            </div>
        </div>
    );
};

export default Banner;