var marksObtained = window.prompt('please enter the marks obtained');
switch (marksObtained) {

    case marksObtained !== Number:
        alert('enter valid number')
        break;

    case marksObtained < 0 || marksObtained > 100:
        alert("enter number between 0 and 100");
        break;

    default:
        let maxMarks = 100;
        marksObtained = Number(marksObtained);
        var percentageOfMarksObtained = Math.round((marksObtained/maxMarks)*100);
        alert(" you got " + percentageOfMarksObtained + "% marks ");
        var isTopper;
        if (percentageOfMarksObtained > 90) {
            alert("congratulations !! you are the topper ")
        }
        break;
}