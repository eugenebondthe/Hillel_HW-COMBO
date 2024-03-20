function parityCheck(num) {
    const result = num % 2 === 0 ? `The number: ${num} is even.` : `The number: ${num} is odd.`;
    console.log(`${result}`);
}

const num = Math.floor(Math.random() * 100) + 1;
parityCheck(num);