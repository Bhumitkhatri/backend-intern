var marksObtained = window.prompt('please enter the marks obtained');
if (marksObtained!="number") {
    alert('invalid input');
} else if (marksObtained < 0 || marksObtained > 100) {
    alert('Input a number between 0 to 100');
} else {
    marksObtained = Number(marksObtained);
    var totalMarks = 100;
    var percentageOfMarksObtained = (marksObtained / totalMarks)*100;

    if (percentageOfMarksObtained > 90) {
        isTopper = true;
    } else {
        isTopper = false;
    }
    alert (isTopper)
}
