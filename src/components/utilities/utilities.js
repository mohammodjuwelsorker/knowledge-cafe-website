let totalTime = 0;
const timeSpentHandler = time => {
    const timeSpent = parseFloat(time.split(' ')[0]);
    totalTime += timeSpent
    console.log(time);
    minuteToHoursCovert(totalTime)
}

const minuteToHoursCovert = (timeSpent) => {
    const totalSecond = timeSpent % timeSpent;
    const totalMinute = timeSpent % 60;
    const totalHours = timeSpent / 60;

    

    // const timeSpents = {
    // }
    // timeSpents[totalMinute]
    console.log(totalMinute)

    return totalMinute;

    
}


// export  {timeSpentHandler, minuteToHoursCovert};