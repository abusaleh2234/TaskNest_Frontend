import { Outlet } from "react-router-dom";
import Navber from "../../Shered/Navber/Navber";

import Footer from "../../Pages/Home/Footer/Footer";
import Container from "../../Component/Container/Container";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <div className="bg-[#4d9bb8]">
                <Container>
                    <Footer></Footer>
                </Container>
            </div>
        </div>
    );
};

export default Main;