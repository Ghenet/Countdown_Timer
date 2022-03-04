const newYear = "1 Jan 2023";

function countdown {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/ 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalSeconds)% 60;
    
}