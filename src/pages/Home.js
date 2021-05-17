import ProfilePic from "../components/ProfilePic"

const Home = () => {
    return (
        <div className="h-ninety">
            <ProfilePic />
            <div className="px-8 mt-8">
                <h1 className="text-4xl font-bold text-text-color text-center">
                    Hi, I am John,
                    Creative Technologist
            </h1>
            </div>
            <div className="px-6 mt-5">
                <p className="text-base text-text-color text-center">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
            <div className="mt-5 flex justify-center">
                <button className="bg-button-color rounded-sm text-white text-xl font-semibold leading-7 px-5 py-3 ">Download Resume</button>
            </div>
        </div>
    )
}

export default Home
