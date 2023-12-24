import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hook/useAxios";

const Googlelogin = () => {

    const {googleLogin} = useContext(AuthContext)
    const axiosPb = useAxios()
    const navigate = useNavigate()

    const hendelGoogleLogin = () => {
        googleLogin()
        .then(res => {
            console.log(res.user);
            const user = {
                name: res.user.displayName,
                email: res.user.email,
                photo: res.user.photoURL
            }
            axiosPb.post("/user", user)
                        .then(res => {
                            console.log(res.data);
                        })
            navigate("/")
        })
        .catch(err => {
            console.log(err);
        })
    }
    return ( 
        <div>
            <button onClick={hendelGoogleLogin} className="px-4 btn py-2 border-2 flex gap-2 border-slate-400 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
            </button>
        </div>
    );
};

export default Googlelogin;