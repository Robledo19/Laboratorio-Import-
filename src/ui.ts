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

export const restartGame = (): void => {
  if (cardElement instanceof HTMLImageElement && textOverElement instanceof HTMLSpanElement && textScoreElement instanceof HTMLSpanElement) {
    cardElement.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    textOverElement.textContent = "";
    textScoreElement.textContent = numberOfGame.score.toString();
  }
};

export const restartButton = (): void => {
  if (
    buttonCardElement instanceof HTMLButtonElement &&
    buttonStopElement instanceof HTMLButtonElement &&
    buttonGameOverElement instanceof HTMLButtonElement &&
    buttonClueElement instanceof HTMLButtonElement
  ) {
    buttonCardElement.disabled = false;
    buttonStopElement.disabled = true;
    buttonGameOverElement.disabled = true;
    buttonClueElement.classList.add("hide");
  }
};

const printTextStopGame = ():string =>{
  if (numberOfGame.score < 4 && textOverElement) {
    return "Has sido muy conservador";
  } else if (numberOfGame.score <= 5 && textOverElement != null) {
    return "Te ha entrado el canguelo eh?";
  } else if (numberOfGame.score <= 7 && textOverElement != null) {
    return "Casi casi...";
  } else if (numberOfGame.score === 7.5 && textOverElement != null) {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  }
  return "";
}


export const stopGameFuntion = (): void => {
  if (buttonCardElement instanceof HTMLButtonElement && buttonStopElement instanceof HTMLButtonElement && buttonGameOverElement instanceof HTMLButtonElement) {
    buttonCardElement.disabled = true;
    buttonStopElement.disabled = true;
    buttonGameOverElement.disabled = false;
  }
  if (buttonClueElement) {
    buttonClueElement.classList.remove("hide");
  }
  const message = printTextStopGame()
  if (textOverElement) {
    textOverElement.textContent = message; 
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
