function generateRandGrade() {
    return Math.floor(Math.random() * 100) + 1;
}

function evaluateGrade(grade) {
    if (grade >= 90 && grade <= 100) {
        return 'Perfect';
    } else if (grade >= 70 && grade <= 89) {
        return 'Good';
    } else if (grade >= 50 && grade <= 69) {
        return 'Setisfactorily';
    } else {
        return 'Unsatisfactory';
    }
}

const grade = generateRandGrade();
const gradeEvaluation = evaluateGrade(grade);

console.log(`Grade: ${grade},\nGrade evaluation: ${gradeEvaluation}`);