const prompt = require("prompt-sync")({ sigint: true });

const results = () => {
  // Generate random number
  let numberInMind = (Math.floor(Math.random() * 10) + 1).toString();
  let foundCorrectNumber = false;

  while (!foundCorrectNumber) {
    const userNumber = prompt("What is the secret number (1 to 10)?");

    // Display results
    if (numberInMind > userNumber) {
      console.log(`Your number of ${userNumber} is too small`);
    } else if (numberInMind < userNumber) {
      display = "too big";
      console.log(`Your number of ${userNumber} is too big`);
    } else {
      foundCorrectNumber = true;
      console.log(`Your number of ${userNumber} is correct. You win!`);

      // Bonus Point: prompt user and provide option for user to start a new game after winning
      const playAgain = prompt(
        "Do you want to play again? (reply 'Y' or 'N') "
      );
      if (playAgain === "N" || playAgain === "n") {
        console.log(`Game has ended`);
      } else if (playAgain === "Y" || playAgain === "y") {
        console.log(`New game has begin`);
        results();
      } else {
        console.log(`Invalid input. Game has ended`);
      }
    }
  }
};

results();
