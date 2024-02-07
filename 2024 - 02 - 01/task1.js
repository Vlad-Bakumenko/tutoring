// Task 1

function randomNum() {
    return  Math.floor((Math.random() * (10 - 1 + 1)) + 1);
    // Math.floor((Math.random() * (max - min + 1)) + min);
}

function guessingGame() {
    let number = randomNum();
    let count = 1;
    let guess = +prompt("Guess a number 1-10.")
    while (count !== 3 || guess !== number) {
        if (count === 3){
            alert(`Sorry, you have failed to guess the number in 3 attempts. The number was ${number} ${typeof guess}`)
            break;
        } else if (guess === number){
            alert(`Success, the number was ${number}! Attempts: ${count}`)
            break;
        } else if (guess !== number) {
                guess = +prompt("Wrong number. Please try again");
                count++
    }
    }
}

guessingGame();