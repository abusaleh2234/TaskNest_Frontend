import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 text-black">
                <div className="">
                    <h1 className="text-2xl font-bold">TaskNest</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, quae veniam doloremque dolorem veritatis ea.</p>
                </div>
                <div className="">
                    <h2 className="text-xl font-bold">Quick LInk</h2>
                    <ul>
                        <li className="hover:text-white"><Link to={"/"}>Home</Link></li>
                        <li className="hover:text-white"><Link to={"/"}>Dashbord</Link></li>
                        <li className="hover:text-white"><Link to={"/"}>previoustask</Link></li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-xl font-bold">Contuct</h2>
                    <p>Dhaka, Bangladesh</p>
                    <ul>
                        <li>FaceBook</li>
                        <li>Twiter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;