

const BookMarked = ({bookMark}) => {
    console.log(bookMark)
    const {title} = bookMark
    return (
        <div className="p-5 bg-white rounded-lg mb-5">
            <h3 className="text-black text-lg font-semibold ">{title}</h3>
        </div>
    );
};

export default BookMarked;