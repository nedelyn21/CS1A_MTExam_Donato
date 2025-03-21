// Favorite Number Calculation
let theFavNumber = 21;
let guess;

while(true){
    guess = parseInt(prompt("Guess my favorite number:"));

    if (guess > theFavNumber){
        console.log("Too high!");
    }else if (guess < theFavNumber){
        console.log("Too low!");
    }else{
        console.log("Correct! My favorite number is", theFavNumber);
        break;
    }
}