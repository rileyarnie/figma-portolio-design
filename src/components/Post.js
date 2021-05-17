const Post = ({ heading, text }) => {
    return (
        <div className="py-3 px-5 mt-5 bg-white rounded">
            <h1 className="font-bold text-1.5xl text-text-color">{heading}</h1>
            <div className="flex align-middle justify-start space-x-4">
                <p className="text-color">12 Feb 2020</p>
                <div className="bg-text-color h-5 w-xs"></div>
                <p className="text-color">Design, Pattern</p>
            </div>
            <p className="text-text-color mt-4">{text}</p>
        </div>
    );
};

export default Post;
