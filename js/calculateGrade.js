function calculateAverageGrade() {
    let marks = [];
    let totalMarks = 0;

    for (let i = 1; i <= 5; i++) {
        let subjectMark = parseInt(prompt("Enter mark for Subject " + i + ":"));
        marks.push(subjectMark);
        totalMarks += subjectMark;
    }

    let averageMark = totalMarks / 5;

    let grade;
    if (averageMark >= 90 && averageMark <= 100) {
        grade = 'A';
    } else if (averageMark >= 80 && averageMark < 90) {
        grade = 'B';
    } else if (averageMark >= 70 && averageMark < 80) {
        grade = 'C';
    } else if (averageMark >= 60 && averageMark < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log("Average Grade: " + grade);
    console.log("Average Mark: " + averageMark);
}

calculateAverageGrade(); // Example usage
