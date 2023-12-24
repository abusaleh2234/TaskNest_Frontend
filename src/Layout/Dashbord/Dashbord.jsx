import { NavLink, Outlet } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashbord = () => {

    const axiosPb = useAxios()
    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        axiosPb.get(`/oneuser/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setUserInfo(res.data)
            })
    }, [axiosPb, user])

    return (
        <div>
            <div className="lg:flex gap-4">
                <div className="lg:w-2/12 min-h-screen bg-[#2892fd] p-3">
                    <div className="flex flex-col justify-center items-center">
                        <img src={userInfo.photo} alt="" />
                        <h3 className="text-lg font-medium">{userInfo.name}</h3>
                    </div>
                    <ul className="space-y-1">
                        <li className="text-lg font-medium">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-lg font-medium">
                            <NavLink
                                to="/dashbord/creattask"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                Create Task
                            </NavLink>
                        </li>
                        <li className="text-lg font-medium">
                            <NavLink
                                to="/dashbord/previoustask"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                Previous Tasks
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="lg:w-10/12 py-4 px-2">
                    {/* <div className="bg-slate-300 w-full">
                    
                    </div> */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;