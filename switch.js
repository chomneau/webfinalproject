function checkDayType(day) {
    switch(day.toLowerCase()) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "Weekday";
        case "saturday":
        case "sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

console.log(checkDayType("wednesday")); // Output: Weekday
console.log(checkDayType("Saturday")); // Output: Weekend
