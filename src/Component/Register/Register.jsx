import { useForm } from "react-hook-form";
import Googlelogin from "../Google/Googlelogin";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import useAxios from "../../Hook/useAxios";

const Register = () => {
    const { creatUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPb = useAxios()

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        creatUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                const user = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photo: res.user.photoURL
                }
                updateProfile(auth.currentUser, {
                    displayName: data.name, photoURL: data.photo
                }).then(() => {
                    axiosPb.post("/user", user)
                        .then(res => {
                            console.log(res.data);
                        })
                    navigate("/")
                }).catch((error) => {
                    console.log(error);
                });

            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className="md:w-10/12 w-full md:min-h-screen flex justify-center items-center mx-auto md:my-5">
            <div className="md:w-8/12 w-full mx-auto bg-sky-100 md:p-10 p-5 rounded-lg">
                <h1 className="text-4xl font-bold text-center md:pb-8 pb-4">Register Now!!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" {...register("name")} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" {...register("email")} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" {...register("password")} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                        <input type="text" {...register("photo")} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="PhotoUrl" required />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-2/4 btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="flex justify-center pb-2">
                    <Googlelogin></Googlelogin>
                </div>
                <p className="text-center">Already have an account? <Link to="/login" className="font-bold hover:underline hover:text-sky-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;