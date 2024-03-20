function guessNumber(triesLeft = 3) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (triesLeft === 0) {
    console.log(
      "You have used all of available tries. Original number was: " +
        randomNumber
    );
    return;
  }

  let userInput = prompt(
    `Guess the number from 1 to 10. You have ${triesLeft} tries left.`
  );
  userInput = parseInt(userInput);

  if (isNaN(userInput) || userInput < 1 || userInput > 10 || userInput !== Math.floor(userInput)) {
    console.log("Please input the correct number from 1 to 10.");
    guessNumber(triesLeft);
    return;
  }

  if (userInput === randomNumber) {
    console.log("Congratulations! You have guessed the number!");
    return;
  } else {
    const message = userInput < randomNumber ? "Too small" : "Too large";
    console.log(message);
    guessNumber(triesLeft - 1);
  }
}

guessNumber();
