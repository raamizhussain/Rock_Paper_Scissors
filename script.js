var Result;
var Score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function updateScoreUI() {
    $(".you").text(Score.wins);
    $(".comp").text(Score.losses);
    $(".ties").text(Score.ties);
}
updateScoreUI();

$("#rock").on("click", function() {
    ComputerMovefunc();
    playGame("rock");
});

$("#paper").on("click", function() {
    ComputerMovefunc();
    playGame("paper");
});

$("#scissors").on("click", function() {
    ComputerMovefunc();
    playGame("scissors");
});

$(".reset").on("click", function() {
    Score.wins = 0;
    Score.losses = 0;
    Score.ties = 0;
    updateScoreUI();
    $(".status").text("Scores reset! Choose your move.");
    localStorage.setItem('Score', JSON.stringify(Score)); // Store reset score
});

var ComputerMove = "";
function ComputerMovefunc() {
    var randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        ComputerMove = "rock";
        $("#computer-selection").text("✊");
    } else if (randomNum === 1) {
        ComputerMove = "paper";
        $("#computer-selection").text("✋"); 
    } else {
        ComputerMove = "scissors";
        $("#computer-selection").text("✌️"); 
    }
}

function playGame(playerMove) {
    if (playerMove === "rock") {
        if (ComputerMove === "rock") {
            Result = "Tie";
        } else if (ComputerMove === "paper") {
            Result = "You Lose";
        } else {
            Result = "You Win";
        }
    } else if (playerMove === "paper") {
        if (ComputerMove === "paper") {
            Result = "Tie";
        } else if (ComputerMove === "scissors") {
            Result = "You Lose";
        } else {
            Result = "You Win";
        }
    } else {
        if (ComputerMove === "scissors") {
            Result = "Tie";
        } else if (ComputerMove === "rock") {
            Result = "You Lose";
        } else {
            Result = "You Win";
        }
    }

    if (Result === "You Win") {
        Score.wins += 1;
        $(".you").text(Score.wins);
        $(".status").text("You Win!");
    } else if (Result === "You Lose") {
        Score.losses += 1;
        $(".comp").text(Score.losses);
        $(".status").text("You Lost!");
    } else {
        Score.ties += 1;
        $(".ties").text(Score.ties);
        $(".status").text("Tie!");
    }

    localStorage.setItem('Score', JSON.stringify(Score)); // Store updated score
}
