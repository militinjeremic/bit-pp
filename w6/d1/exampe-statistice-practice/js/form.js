'use strict';
var subjectInput = document.querySelector('.add-subject');
// var subjectIndex = subjectInput.selectedIndex;
var studentNameInput = document.querySelector('.add-student-name');
var grade = document.querySelector('.add-grade');

var validateSubject = document.querySelector('.validate-subject');
// var validateSubjectValue = validateSubject.innerHTML;

var validateStudent = document.querySelector('.validate-student');
// var validateStudentValue = validateStudent.innerHTML;

var validateGrade = document.querySelector('.validate-grade');
var countExamPassed = document.querySelector('.exam-passed-count');
var countExamFailed = document.querySelector('.exam-failed-count');
var examCountTotal = document.querySelector('.exam-total');
var percentageExamPassed = document.querySelector('.exam-passed-percentage');
var percentageExamFailed = document.querySelector('.exam-failed-percentage');


// var validateGradeValue = validateStudent.innerHTML;

function collectData() {
    var subjectSelectedValue= subjectInput.value;
    // var subjectValue = subjectInput.options[subjectIndex].text;
    var studentNameText = studentNameInput.value;
    var gradeValue = grade.value;

    return {
        subject: subjectSelectedValue,
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
    if (subjectInput.value == '') {
        setSubjectError(validateErrors.SUBJECT_ERROR);
        // validateSubjectValue = validateErrors.SUBJECT_ERROR;
        // return;
    };
    if (studentNameInput.value == '') {
        setStudentError(validateErrors.STUDENT_ERROR);
        // validateStudentValue = validateErrors.STUDENT_ERROR;
        // return;
    };
    if (grade.value == '') {
        setGradeError(validateErrors.GRADE_ERROR);
        // validateGradeValue = validateErrors.GRADE_ERROR
        // return;
    };
}

var setSubjectError = function(dataMsg){
    return validateSubject.innerHTML = dataMsg
}

var setStudentError = function(dataMsg){
    return validateStudent.innerHTML = dataMsg
}
var setGradeError = function(dataMsg){
    return validateGrade.innerHTML = dataMsg
}

//provertiti sve ovo nije zavrseno!!!
var passFailed = {
    passed: 0,
    failed: 0,
    total: function () {
        return this.passed + this.failed;
    },
    percent: function (x) {
        var a = x * 100 / this.total();
        return a.toPrecision(4) + '%';
    }
};

var addStudentInList = function(){
    var subject= subjectInput.value;
    // var subjectValue = subjectInput.options[subjectIndex].text;
    var studentName = studentNameInput.value;
    var studentGrade = grade.value;
    
    var li = document.createElement('li');
    var student = subject + " " + studentName + " " + studentGrade;
    var studentTxt = document.createTextNode(student);
    li.appendChild(studentTxt);
    // p.innerHTML = subject + " " + studentName + " " + grade
    // var passedList = document.querySelector('passed-list').appendChild(p);
    // var failedList = document.querySelector('failed-list').appendChild(p);
    if (studentGrade > 5) {
        passFailed.passed++;
        document.querySelector('.passed-list').appendChild(li);
    }
    else if (studentGrade <= 5) {
        passFailed.failed++;
        document.querySelector('.failed-list').appendChild(li);
    };

    refreshGradesAndPercent();
}

var refreshGradesAndPercent = function(){
    countExamPassed.innerHTML = passFailed.passed;
    countExamFailed.innerHTML = passFailed.failed;
    examCountTotal.innerHTML = passFailed.total();
    percentageExamFailed.innerHTML = passFailed.percent(passFailed.failed);
    percentageExamPassed.innerHTML = passFailed.percent(passFailed.passed);
    //iscitamo querySelctorom ona dva polja 
    //da setujemo passFailed.passed i failed
    //i da setujemo procente sto je funckcija procenti hasfailed metode

}





