const game = () => {
  // use let to update the scores
  let pScore = 0;
  let cScore = 0;

  //  Another function to start the game!!!

  // fades out the intro section
  // fades in the match section
  const startGame = () => {
    /* Variables for start game including the start game button, the intro section
     and the actual game section */
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
      /*When you click the play button, the intro screen disappears and the 
      match screen appears */
    });
  };

  // Another function for Play match

  // Evetything in here revovles around the actual game

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = " ";
        // Everytime the animation ends, the hand function will run
      });
    });

    /* Computer options 
    Must generate random numbers using the random method 
    */
    const computerOptions = ["rock", "paper", "scissor"];

    options.forEach((options) => {
      options.addEventListener("click", function () {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        // This generates number from 1 to 3
        // Math floor will provide an integer
        const computerChoice = computerOptions[computerNumber];
        // Update the text depending on the outcome

        // function for animation
        setTimeout(() => {
          // where we call compare hands
          computerHands(this.textContent, computerChoice);
          // updating the images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 1000);
        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer  2s ease";
      });
    });
  };
  // function to update scores
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore; // the variable at the top
    computerScore.textContent = cScore;
  };
  /*This function must be called everytime a choice is made donwn in 
  the computerhand function */

  // Another function who should get the score and who is winning

  const computerHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return; // this ends the function
    }
    // cehck for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        winner.textContent = "Player wins";
        pScore++; // to update the score when player wins
        updateScore(); /* calls the function whenever there is a change in the 
        /variable */
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++; // to update the score when computer wins
        updateScore();
        return;
      }
    }
    // check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissor") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
    // check for scissor

    if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // call the inner function and execute the startgame and playmatchfunction

  startGame(); // this is where the small codes are executed
  playMatch();
};
// this is where you execute the big function
game();
