import BookMarked from "../bookMarked/BookMarked";
import TimeSpent from "../timeSpent/TimeSpent";


const BookMarks = ({bookMarks, readingTime}) => {
    console.log(bookMarks.length)

    return ( 
        <div className="w-1/3">
            <TimeSpent readingTime={readingTime}></TimeSpent>
            <div className="text-black text-2xl font-bold capitalize p-8 bg-gray-200 rounded-lg">
                <h3 className="mb-5">Bookmarked Blogs : {bookMarks.length}</h3>
                <div>
                    {
                        bookMarks.map(bookMark => <BookMarked key={bookMark.id} bookMark={bookMark}></BookMarked>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookMarks;