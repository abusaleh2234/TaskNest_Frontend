import dev from "../../assets/dev.jpeg"
import bank from "../../assets/bank.png"
import corp from "../../assets/corporate.jpeg"
const Banefit = () => {
    return (
        <div className="md:py-8">
            <h2 className="text-4xl font-bold text-center md:pb-4 pb-4">Benefit Pepole</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className=" p-3 text-center space-y-3 bg-sky-100 rounded-lg">
                    <div className="flex justify-center">
                        <img className="rounded-full" src={dev} alt="" />
                    </div>
                    <p>TaskNest streamline project workflows, enhance collaboration, and boost developer productivity by providing a centralized platform for organized task tracking and efficient project coordination.</p>
                    <h5 className="text-lg font-bold">Devlopers</h5>
                </div>
                <div className=" p-3 text-center space-y-3 bg-sky-100 rounded-lg">
                    <div className="flex justify-center">
                        <img className="rounded-full" src={bank} alt="" />
                    </div>
                    <p>TaskNest empower bankers to optimize workflow efficiency, enhance team collaboration, and ensure timely task completion, ultimately improving overall productivity and organizational success in the financial sector.</p>
                    <h5 className="text-lg font-bold">Bankers</h5>
                </div>
                <div className=" p-3 text-center space-y-3 bg-sky-100 rounded-lg">
                    <div className="flex justify-center">
                        <img className="rounded-full" src={corp} alt="" />
                    </div>
                    <p>TaskNest enhance corporate efficiency by centralizing project coordination, fostering collaboration, and optimizing task tracking, leading to improved productivity and streamlined operations.</p>
                    <h5 className="text-lg font-bold">Corporate</h5>
                </div>
            </div>
        </div>
    );
};

export default Banefit;