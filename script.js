let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let clear = document.querySelector("#refresh");
let options = ["rock", "paper", "scissor"];
choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        clear.style.display = "inline";
        let id = choice.getAttribute("id");
        let compChoice = Math.floor((Math.random()) * 3);
        checkAnswer(options.indexOf(id), compChoice);
    })
})
function checkAnswer(user, comp) {
    document.querySelector("#user_choice").textContent = `${options[user]}`;
    document.querySelector("#comp_choice").textContent = `${options[comp]}`;
    if (user == comp) {
        document.querySelector("#msg").textContent = "Draw"
    }
    else if ((user == 0 && comp == 2) || (user == 1 && comp == 0) || (user == 2 && comp == 1)) {
        userScore++;
        document.querySelector("#msg").textContent = "Player Won"
        document.querySelector("#user-score").textContent = userScore;
    }
    else if ((user == 2 && comp == 0) || (user == 0 && comp == 1) || (user == 1 && comp == 2)) {
        compScore++;
        document.querySelector("#msg").textContent = "Computer Won"
        document.querySelector("#comp-score").textContent = compScore;
    }
}
clear.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    document.querySelector("#user_choice").textContent ="";
    document.querySelector("#comp_choice").textContent ="";
    document.querySelector("#user-score").textContent = userScore;
    document.querySelector("#comp-score").textContent = compScore;
    document.querySelector("#msg").textContent = "Play Your Move";
    clear.style.display = "none";

})
