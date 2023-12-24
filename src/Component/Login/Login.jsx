import { useForm } from "react-hook-form";
import Googlelogin from "../Google/Googlelogin";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {loginUaser} = useContext(AuthContext)
    const navigate = useNavigate()


    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        loginUaser(data.email,data.password)
        .then(res => {
            console.log(res.user);
            navigate("/")
        })
        .catch(err => {
            console.log(err);
        })

    }
    return (
        <div className="md:w-10/12 w-full md:min-h-screen flex justify-center items-center mx-auto">
            <div className="md:w-6/12 w-full mx-auto bg-sky-100 md:p-10 p-5 rounded-lg">
                <h1 className="text-4xl font-bold text-center md:pb-8 pb-4">Login Now!!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" {...register("email")} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" {...register("password")} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password" required />
                    </div>
                    <div className="flex justify-center pt-4">
                        <button type="submit" className="w-2/4 btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="flex justify-center pb-3">
                    <Googlelogin></Googlelogin>
                </div>
                <p className="text-center">Don't have an account yet? <Link to="/register" className="font-bold hover:underline hover:text-sky-600">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;