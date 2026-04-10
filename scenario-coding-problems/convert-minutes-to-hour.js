function  convertMinutesToHour(minutes){
    let hour = 60;
    let hours = Math.floor(minutes / hour);
    let minute =  minutes % hour;
    if(hours && minute){
        return `${hours} hours ${minute} minutes`;
    }
    else{
        return `${hours} hours`;
    }
}
console.log(convertMinutesToHour(130));
/*
7. ⏰ Convert Minutes to Hours

You are building a time tracker.

👉 Given:

const minutes = 130;

👉 Task:
Convert into:

2 hours 10 minutes
*/