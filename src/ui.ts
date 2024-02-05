import { 
    textScoreElement, 
    textOverElement, 
    buttonCardElement, 
    buttonStopElement, 
    buttonGameOverElement, 
    buttonClueElement, 
    cardElement,
    numberOfGame,
    cardUrls,
    allCards,
 } from './model';

import{
    checkButton,
    activeButtonStop,
    getCardPoints,
    sumPoints,
    setScore,
    reviewGame,
    checkScore,
    getCartNumber,
    getRandomNumber
 } from './motor'

export const printUrlCard = (card: number) => {
    const cardElement = document.getElementById("card");
  
    if (
      cardElement !== null &&
      cardElement !== undefined &&
      cardElement instanceof HTMLImageElement
    ) {
      cardElement.src = cardUrls[card];
    }
  };

export const restartGame = (): void =>{
    if (cardElement && textOverElement !== null && textScoreElement !== null
      ) {
        cardElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        textOverElement.textContent = "";
        textScoreElement.textContent = numberOfGame.score.toString();
      }
}

export const restartButton = (): void =>{
    if (buttonCardElement && buttonStopElement && buttonGameOverElement && buttonClueElement) {
        buttonCardElement.disabled = false;
        buttonStopElement.disabled = true;
        buttonGameOverElement.disabled = true;
        buttonClueElement.classList.add("hide");
      }
}


export const stopGameFuntion = (): void => {
    if (buttonCardElement && buttonStopElement && buttonGameOverElement) {
      buttonCardElement.disabled = true;
      buttonStopElement.disabled = true;
      buttonGameOverElement.disabled = false;
    }
    if (numberOfGame.score < 4 && textOverElement != null) {
      textOverElement.textContent = "Has sido muy conservador";
    } else if (numberOfGame.score <= 5 && textOverElement != null) {
      textOverElement.textContent = "Te ha entrado el canguelo eh?";
    } else if (numberOfGame.score <= 7 && textOverElement != null) {
      textOverElement.textContent = "Casi casi...";
    } else if (numberOfGame.score === 7.5 && textOverElement != null) {
      textOverElement.textContent = "¡ Lo has clavado! ¡Enhorabuena!";
    }
  
    if (buttonClueElement) {
      buttonClueElement.classList.remove("hide");
    }
  
    checkButton();
  };

export const clueFuntion = (): void => {
    let nextRandomNumber = 0;
    nextRandomNumber =
      Math.floor(Math.random() * 10 + 1) + (nextRandomNumber > 7 ? 2 : 0);
  
    if (textOverElement != null) {
      const cardName = allCards[nextRandomNumber.toString()];
      textOverElement.innerHTML = `La siguiente hubiera sido la carta: <br>${cardName}`;
    }
  };

export const newCard = (): void => {
    const randomNumber = getRandomNumber();
    const card = getCartNumber(randomNumber);
    printUrlCard(card);
    const points = getCardPoints(card);
    const pointsSum = sumPoints(points);
    setScore(pointsSum);
    activeButtonStop();
    reviewGame();
    checkScore();
    checkButton()
  
    console.log("La puntuación es " + numberOfGame.score);
  };

export const playAgain = (): void => {
    numberOfGame.score = 0;
    numberOfGame.randomNumber = 0;
  restartGame()
  restartButton()
  checkButton()
};
