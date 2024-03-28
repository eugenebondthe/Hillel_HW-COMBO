function sumOfNumbersOneToHundred() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        i % 3 !== 0 ? sum += i : sum; 
    }
    return sum;
}

console.log(`Sum of numbers from 1 to 100 which are not multiplies of 3 = ${sumOfNumbersOneToHundred()}`);