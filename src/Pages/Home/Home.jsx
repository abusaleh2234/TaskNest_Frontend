import Banefit from "../../Component/Banefit/Banefit";
import Container from "../../Component/Container/Container";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Container>
                <Banefit></Banefit>
            </Container>
        </div>
    );
};

export default Home;