
const TimeSpent = ({readingTime}) => {
    return (
        <div className="border-2 border-[#6047EC] rounded-lg p-5 mb-6">
            <h3 className="text-[#6047EC] text-2xl font-bold">Spent time on read : {readingTime}  min</h3>
        </div>
    );
};

export default TimeSpent;