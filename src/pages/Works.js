import dashboard from "../assets/dashboard.jpg"

const Works = () => {
    return (
        <div className="h-ninety pt-2 px-4 flex flex-col justify-start">
            <h1 className="text-center text-lg leading" >Featured Works</h1>
            <div className="rounded-lg bg-gray-50 shadow-lg">
                <img src={dashboard} alt="dashboard" className="py-3 px-5 mt-5 "
                />
            </div>
            <h1 className="font-bold text-2xl text-text-color mt-5">Designing Dashboards</h1>
            <div className="flex space-x-5 mt-4">
                <div className="bg-text-color text-white px-3 py-1 rounded-2xl font-bold">
                    <p>2020</p>
                </div>
                <div className="h-full">
                    <p className="text-text-light">Dashboard</p>
                </div>
            </div>
            <p className="mt-5 text-text-color text-base tracking-wide">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
        </div>
    )
}
export default Works


