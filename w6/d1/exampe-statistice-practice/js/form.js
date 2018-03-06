'use strict';
var subjectInput = document.querySelector('.add-subject');
var subjectIndex = subjectInput.selectedIndex;
var studentNameInput = document.querySelector('.add-student-name');
var grade = document.querySelector('.add-grade');

var validateSubject = document.querySelector('.validate-subject');
var validateSubjectValue = validateSubject.innerHTML;

var validateStudent = document.querySelector('.validate-student');
var validateStudentValue = validateStudent.innerHTML;

var validateGrade = document.querySelector('.validate-grade');
var validateGradeValue = validateStudent.innerHTML;


function collectData() {
    var subjectValue = subjectInput.options[subjectIndex].value;

    var studentNameText = studentNameInput.value;

    var gradeValue = grade.value;

    return {
        subject: subjectValue,
        studentID: studentNameText,
        grade: gradeValue
    }
};

function validateData() {

    var validateErrors = {
        SUBJECT_OK: 'OK',
        SUBJECT_ERROR: 'Please select subject',
        STUDENT_OK: 'OK',
        STUDENT_ERROR: 'Please enter name',
        GRADE_OK: 'OK',
        GRADE_ERROR: 'Please select grade'
    }

    /*
    if ((SubjectValue === '') && (!(isNaN(StudentNameText)) || StudentNameText === '') && (isNaN(gradeValue)) || gradeValue === '') {
        return (SubjectValue = validateErrors.SUBJECT_ERROR) + (StudentNameText = validateErrors.STUDENT_ERROR) + (gradeValue = validateErrors.GRADE_ERROR)

    }
    */
    if (subjectInput === '') {
        validateSubjectValue = validateErrors.SUBJECT_ERROR;
        return;
    };
    if (!(isNaN(studentNameInput)) || studentNameInput === '') {
        validateStudentValue = validateErrors.STUDENT_ERROR;
        return;
    };
    if ((isNaN(grade)) || grade === '') {
        validateGradeValue = validateErrors.GRADE_ERROR
        return;
    };
}

// var p = document.createElement('p');
// p.innerHTML = data.subject + " " + data.studentID + " " + data.grade
// var passedList = document.querySelector('passed-list').appendChild(p);
// var failedList = document.querySelector('failed-list').appendChild(p);
// if (data.grade > 5) {
//     passedList;
// }
// else if (data.grade < 5) {
//     failedList;
// };
// //provertiti sve ovo nije zavrseno!!!
// var passFailed = {
//     passed: 0,
//     failed: 0,
//     total: function () {
//         return this.passed + this.failed;
//     },
//     percent: function (x) {
//         var a = x * 100 / this.total();
//         return a.toPrecision(4) + '%';
//     }
// };



