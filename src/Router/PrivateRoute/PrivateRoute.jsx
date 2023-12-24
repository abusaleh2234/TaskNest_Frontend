import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user,looding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(user?.email) {
        return children
    }
    return <Navigate to={location.pathname ? location.pathname : "/"}/>
};

export default PrivateRoute;