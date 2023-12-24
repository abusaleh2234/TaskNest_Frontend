import Banefit from "../../Component/Banefit/Banefit";
import Container from "../../Component/Container/Container";
import Navber from "../../Shered/Navber/Navber";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Container>
                <Banefit></Banefit>
            </Container>
            <div className="bg-[#4d9bb8]">
                <Container>
                    <Footer></Footer>
                </Container>
            </div>

        </div>
    );
};

export default Home;