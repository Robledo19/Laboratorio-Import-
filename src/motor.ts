import { 
    textScoreElement, 
    textOverElement, 
    buttonCardElement, 
    buttonStopElement, 
    buttonGameOverElement, 
    buttonClueElement, 
    numberOfGame,
 } from './model';

export const checkButton = () => {
  if (buttonCardElement instanceof HTMLButtonElement && buttonCardElement.disabled) {
    buttonCardElement.classList.add("button-disabled");
  } else {
    buttonCardElement?.classList.remove("button-disabled");
  }

  if (buttonStopElement instanceof HTMLButtonElement && buttonStopElement.disabled) {
    buttonStopElement.classList.add("button-disabled");
  } else {
    buttonStopElement?.classList.remove("button-disabled");
  }

  if (buttonClueElement instanceof HTMLButtonElement && buttonClueElement.disabled) {
    buttonClueElement.classList.add("button-disabled");
  } else {
    buttonClueElement?.classList.remove("button-disabled");
  }

  if (buttonGameOverElement instanceof HTMLButtonElement && buttonGameOverElement.disabled) {
    buttonGameOverElement.classList.add("button-disabled");
  } else {
    buttonGameOverElement?.classList.remove("button-disabled");
  }
};

export const activeButtonStop = () => {
  if (buttonStopElement instanceof HTMLButtonElement) {
    buttonStopElement.disabled = false;
  }
};

export const getCardPoints = (card: number) => {
    return card > 7 ? 0.5 : card;
  };
  
export const sumPoints = (points: number) => {
    return numberOfGame.score + points;
  };
  
export const setScore = (newScore: number) => {
      numberOfGame.score = newScore;
  };
  
export const winGame = () => {
  if (
    textOverElement != null &&
    buttonCardElement instanceof HTMLButtonElement &&
    buttonStopElement instanceof HTMLButtonElement &&
    buttonGameOverElement instanceof HTMLButtonElement
  ) {
    textOverElement.textContent = "¡ Lo has clavado! ¡Enhorabuena!";
    buttonCardElement.disabled = true;
    buttonStopElement.disabled = true;
    buttonGameOverElement.disabled = false;
  }
};
  
export const lostGame = () => {
  if (
    textOverElement != null &&
    buttonGameOverElement instanceof HTMLButtonElement &&
    buttonStopElement instanceof HTMLButtonElement &&
    buttonCardElement instanceof HTMLButtonElement
  ) {
    textOverElement.textContent = "Te has pasado";
    buttonGameOverElement.disabled = false;
    buttonStopElement.disabled = true;
    buttonCardElement.disabled = true;
  }
};
  
export const reviewGame = () => {
    if (numberOfGame.score === 7.5) {
      winGame();
    }
  
    if (numberOfGame.score > 7.5) {
      lostGame();
    }
  };
  
  export const getRandomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
  };
  
  export const getCartNumber = (randomNumber: number) => {
    return randomNumber > 7 ? randomNumber + 2 : randomNumber;
  };
  
  
  export const checkScore = (): void => {
    if (textScoreElement !== null) {
      if (numberOfGame.randomNumber <= 7) {
          numberOfGame.score += numberOfGame.randomNumber;
      } else {
          numberOfGame.score += 0.5;
      }
      textScoreElement.textContent = numberOfGame.score.toString();
    }
  
    checkButton();
  };
  
  
