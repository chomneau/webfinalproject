
    let math = parseInt(prompt("Enter math score"));
    let physic = parseInt(prompt("Enter physic score"));
    let bio = parseInt(prompt("Enter bio score"));
    let geo = parseInt(prompt("Enter geo score"));
    let history = parseInt(prompt("Enter history score"));

    let totalMarks = math+physic+bio+geo+history;
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

    document.getElementById("Grade").innerHTML = "your grade is : " + grade;
    document.getElementById("averageGrade").innerHTML = "your Average grade is : " + averageMark;

