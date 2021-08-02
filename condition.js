var marksObtained = window.prompt('please enter the marks obtained');
if (marksObtained == undefined || marksObtained == null || marksObtained == '') {
    console.log('invalid input');
} else if (marksObtained < 0 || marksObtained > 100) {
    console.log('Input a number between 0 to 100');
} else {    var totalMarks = 100;
    var percentageOfMarksObtained = (marksObtained / totalMarks)*100;

    isTopper = (percentageOfMarksObtained > 90)?true:false
    console.log (isTopper)
}