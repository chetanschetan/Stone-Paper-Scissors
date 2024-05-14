let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userNewScore = document.querySelector("#scoreA");
let compNewScore = document.querySelector("#scoreB");

const genCompChoice = () => {
    let object = ["stone","paper","scissors"];
    let compChoice = Math.floor(Math.random() * 3);
    return object[compChoice];
}

const showWinner = (userwin,userChoice,compChoice) => {
    if(userwin){
         userNewScore.innerText = ++userScore;
     msg.innerText = `You Win! Your ${userChoice} beated ${compChoice}.`;
     
    }else{
         compNewScore.innerText = ++compScore; 
        msg.innerText = `You Lose! Your ${userChoice} was beaten by ${compChoice}.`;
       
    }
}

const playgame = (userChoice) => {
    console.log(userChoice);
    let compChoice = genCompChoice();
    console.log(compChoice);

    //Draw

    if(userChoice === compChoice){
        draw(userChoice);
    }else{
        let userwin = true;
        if(userChoice === "stone"){
            userwin = (compChoice === "paper") ? false : true;
        }else if(userChoice === "paper"){
            userwin = (compChoice === "scissors") ? false : true;
        }else{
            userwin = (compChoice === "stone") ? false : true;
        }

        showWinner(userwin,userChoice,compChoice); 

    }
}

const draw = (userChoice) => {
    msg.innerText = `Match Draw! You both have choosen ${userChoice}.`;
  
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})