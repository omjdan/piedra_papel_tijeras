const game = ()=>{

    let pScore = 0;
    let cScore = 0;


    //start the game
    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
 introScreen.classList.add('fadeOut');
 match.classList.add('fadeIn');
        });
    };
    //playMatch
   
    const playMatch = () => {
const options = document.querySelectorAll('.options button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const hands = document.querySelectorAll('.hands img');
hands.forEach(hand =>{
    hand.addEventListener('animationend', function(){
        this.style.animation = '';
    })
})

//computer options

const computerOptions = ['piedra','papel','tijeras'];

options.forEach(option=>{
   option.addEventListener('click', function(){
       //Computer Choice
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
   
   
    // here we call compare hands
setTimeout(()=>{
    compareHands(this.textContent, computerChoice)



    //Udate images
    playerHand.src = `./assets/${this.textContent}.png`;
    computerHand.src = `./assets/${computerChoice}.png`;
},2000);


   
//Animation
   playerHand.style.animation = "shakePlayer 2s ease";
   computerHand.style.animation = "shakeComputer 2s ease";
    });
   });
 };

 // Update score
const updateScore = () =>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}




//Comparison Function

const compareHands = (playerChoice, computerChoice)=>{
    //Update text

const winner = document.querySelector('.winner');
//Check for a tie
    if (playerChoice === computerChoice){
    winner.textContent ='Empataste!';
    return;
    }
    //Check for a Rock
if (playerChoice === 'piedra'){
    if (computerChoice === 'tijeras'){
        winner.textContent = "Ganaste!!";
        pScore++;
        updateScore();
        return;
        
    } else {
        winner.textContent= "Pierdes!";
        cScore++;
        updateScore();
        return;
    }
}
//Check for paper
if (playerChoice === 'papel'){
    if (computerChoice === 'piedra'){
        winner.textContent = "Ganaste!!";
        pScore++;
        updateScore();
        return;
        
    }else {
        winner.textContent= "Pierdes!";
        cScore++;
        updateScore();
        return;
    }
}
//Check for scissors
if (playerChoice === 'tijeras'){
    if (computerChoice === 'papel'){
        winner.textContent = "Ganaste!!";
        pScore++;
        updateScore();
        return;
    }else {
        winner.textContent= "Pierdes!";
        cScore++;
        updateScore();
        return;
    }
}



}



// call all the inner functions
startGame();
playMatch();

};

//start the game
game();