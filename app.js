const theWholeGame = function(){
    let playerScore = 0; // gets player score
    let computerScore = 0; // gets computer score

    const startGame = function(){
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = function(){
        const options = document.querySelectorAll(".options button"); // selects all the play buttons
        const playerHand = document.querySelector(".player-hand") // gets image of player hand
        const computerHand = document.querySelector(".computer-hand"); //gets image of computerhand

        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });

        const computerOptions = ["rock","paper","scissors"];

        // generates computer choice
        options.forEach(option=>{
            option.addEventListener("click",function(){
                const computerRandomNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerRandomNumber];

                setTimeout(() => {
                    compareHand(this.textContent,computerChoice);

                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";

                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    // this function updates score on screen
    const updateScore = () => {
        const playerLocalScore = document.querySelector(".player-score p");
        const computerLocalScore = document.querySelector(".computer-score p");
        playerLocalScore.textContent = playerScore;
        computerLocalScore.textContent = computerScore;
    };

    // compare hands and update score and text
    const compareHand = function(playerChoice,computerChoice){
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "You won!!!";
                playerScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer won";
                computerScore++;
                updateScore();
                return;
            }
        }
        
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer won";
                computerScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "You won";
                playerScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "You won!!!";
                playerScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer won";
                computerScore++;
                updateScore();
                return;
            }
        }
    };

    // call all the inner functions
    startGame();
    playMatch();
    // updateScore();
};

// here is the beginning
theWholeGame();