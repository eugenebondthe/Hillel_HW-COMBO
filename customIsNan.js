function customIsNan(value) {
    return value !== value;
}

console.log(customIsNan(9));
console.log(customIsNan('asd'));
console.log(customIsNan(NaN));
console.log(customIsNan(Math.sqrt(-1)));