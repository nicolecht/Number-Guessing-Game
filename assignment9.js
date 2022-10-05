const prompt = require("prompt-sync")({ sigint: true });

// const name = prompt("what is your name?");
// console.log(`hey there ${name}`);

// Bonus Point: prompt user and provide option for user to start a new game after winning

const results = () => {
  // Generate random number
  let numberInMind = (Math.floor(Math.random() * 10) + 1).toString();
  let foundCorrectNumber = false;

  while (!foundCorrectNumber) {
    const userNumber = prompt("What is the secret number (1 to 10)?");

    if (numberInMind > userNumber) {
      console.log(`Your number of ${userNumber} is too small`);
    } else if (numberInMind < userNumber) {
      display = "too big";
      console.log(`Your number of ${userNumber} is too big`);
    } else {
      foundCorrectNumber = true;
      console.log(`Your number of ${userNumber} is correct. You win!`);
    }
  }
};

results();
