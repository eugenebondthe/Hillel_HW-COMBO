function calculateOperations(num1, operation, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    throw new Error("Incorrect number input!");
  }

  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    throw new Error("Incorrect operation input!");
  }

  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error("Incorrect input of arithmetical operation.");
  }
}

try {
  const num1 = parseInt(prompt("Input first number:\n"));
  const operation = prompt("Input preferable action (+, -, *, /):\n");
  const num2 = parseInt(prompt("Input second number:\n"));

  const result = calculateOperations(num1, operation, num2);
  console.log(`Result of your action:\n${result}`);
} catch (error) {
  console.error(error.message);
}
