const guessElement = document.getElementById("guess");
const submitGuessButton = document.getElementById("submit-guess");
const messageElement = document.getElementById("message");
const remainingGuessesElement = document.getElementById("remaining-guesses");

const randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 8;

submitGuessButton.addEventListener("click", () => {
    const guessedNumber = parseInt(guessElement.value, 8);
    
    if (isNaN(guessedNumber)) {
        messageElement.textContent = "請輸入有效的數字";
        return;
    }

    remainingGuesses--;

    if (guessedNumber === randomNumber) {
        messageElement.textContent = "恭喜你，猜對了！";
        submitGuessButton.disabled = true;
    } else if (remainingGuesses === 0) {
        messageElement.textContent = `很遺憾，你沒有猜對。正確答案是 ${randomNumber}。`;
        submitGuessButton.disabled = true;
    } else if (guessedNumber < randomNumber) {
        messageElement.textContent = "太小了，再試一次！";
    } else {messageElement.textContent = "太大了，再試一次！";
}
remainingGuessesElement.textContent = remainingGuesses;
guessElement.value = "";
});


