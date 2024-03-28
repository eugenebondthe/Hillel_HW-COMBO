function sumOfIntegersInString(str) {
    let sum = 0;
    let currentNum = 0;

    for (let i = 0; i <= str.length; i++) {
        const char = str[i];

        if (!isNaN(char) && char !== ' ') {
            currentNum += char;
        } else if (currentNum !== '') {
            sum += parseInt(currentNum);
            currentNum = '';
        }
    }

    if (currentNum !== '') {
        sum += parseInt(currentNum);
    }

    return sum;
}

const inputString = '123asdg 1 11,..a; 9 1 2a';
console.log(`Sum of integers in string equals: ${sumOfIntegersInString(inputString)}`);