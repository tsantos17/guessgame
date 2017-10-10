
function getRandomInt(min, max) { //This generates a random number between 2 values
  min = Math.ceil(min); //The minimum digit you can guess 
  max = Math.floor(max);//The maximum digit you can guess                                                               
  return Math.floor(Math.random() * (max - min)) + min; //Returns a random digit between 1 and 100
}

function playGame(player) {
    var Turns = 0; //Counts how many turns you take, declares variable Turns
    var Correct = 0; //Set correct to zero, declares variable correct 
    var Answer = getRandomInt(1,100); //Generates random number 1 - 100 *, declares variable answer
    do { //Defines the beginning of the while loop}
        var Guess = prompt("Guess the integer between 1 and 100!"); //Prompts user to guess a number 1 - 100 
        Turns++; // Adds the amount of turns until you finish the game.
        if (isNaN(Guess) !== true) { // If you guess the number right, it will prompt you got it right in a certain amount of turns, 
            if (Guess == Answer) { // If guess equals answer, then you guessed it right and you win. 
                alert("CORRECT! You guessed it in "+Turns+" turns."); //You guess it right and it says "CORRECT! You guessed it in ____ amount of turns." 
                Correct = 1; //In boolean, 1 = true so if the guess is correct, or true, it ends the while loop
            }
            else if (Guess > Answer) { //If Guess is greater than answer
                alert("Hint: Try a lower number!"); //If you guess the number wrong, it will prompt you to guess lower  
            }
            else { //if guess if less than answer
                alert("Hint: Try a higher number!"); // If you guess the number wrong, it will prompt you to guess higher 
            }
        }
        else { //Start of an else statement
            alert("Quitter!"); //Gives an alert that says quitter
            player.losses ++; //Counts the losses
        }
    }
    while (Correct == 0); //Keep looping while answer is wrong until the answer is right. 
}

function start() { // Starts the function that is called start, so the game can start.
    var playAgain = 'y'; //Declares the variable playAgain and sets equal to 'y' 
    do { //Defines the beginning of the while loop
        playGame(); //Uses the function playGame
	playAgain = prompt("Would you like to play again? (y or n)"); //Prompts if you would like to play again or not, and to press y or n. 
    }
    while(playAgain == 'y');//Input "y" if you want to play again 
}



alert("Steel your mind for this, the ultimate game of skill!"); //Shows text on the screen that says "Steel your mind for this, the ultimate game of skill!"
start();//This calls the program start