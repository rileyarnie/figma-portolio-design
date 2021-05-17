import Post from "../components/Post"

const Blogs = () => {
    return (
        <div className="h-ninety bg-posts-bg pt-4 px-4">
            <h1 className="text-center text-lg leading" >Recent Posts</h1>
            <Post heading="Making a design system from scratch" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
            <Post heading="Creating pixel perfect icons in Figma" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />

        </div>

    )
}

export default Blogs
