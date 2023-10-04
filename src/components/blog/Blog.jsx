
const Blog = ({blog, addToBookMarkHandler, timeSpentAddHandler}) => {
    const {title, cover, author, author_profile, post_date,reading_time,hashtag, id} = blog;  
    return (
        <div className="mb-8">
            <img className="h-96 w-full" src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between items-center mt-8">
                <div className="flex">
                    <img className="w-14 rounded-s-full h-auto" src={author_profile} alt={`is is a author profile ${author}`} />
                    <div className="ml-4">
                        <h3 className="text-black text-2xl font-bold">{author}</h3>
                        <p className="">{post_date}</p>
                    </div>
                </div>
                <div>
                    <span className="mr-4">{reading_time} min read</span>
                    <button onClick={() => addToBookMarkHandler(blog)}>bookMark</button>
                </div>
            </div>
            <h3 className="text-4xl text-black font-bold my-4 capitalize">{title}</h3>
            <p>
                {
                    hashtag.map(hash => <span className="text-black text-xl font-medium mr-3"><a href="#">{hash}</a></span>)
                }
            </p>
            <button onClick={() => timeSpentAddHandler(reading_time, id)}  className="text-[#6047EC] text-xl font-semibold mt-5 underline">Mark as read </button>
        </div>
    );
};

export default Blog;