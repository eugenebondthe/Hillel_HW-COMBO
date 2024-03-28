function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const rndNum = Math.floor(Math.random() * (900 + 1) + 100);
    if (rndNum % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const percentOfEven = Math.round((evenCount / count) * 100);
  const percentOfOdd = Math.round((oddCount / count) * 100);

  console.log(`Generated numbers quantity = ${count}`);
  console.log(`Even numbers quantity = ${evenCount}`);
  console.log(`Odd numbers quantity = ${oddCount}`);
  console.log(
    `Percentage of even numbers to odd ones = ${percentOfEven}% / ${percentOfOdd}%`
  );
}

checkProbabilityTheory(666);
