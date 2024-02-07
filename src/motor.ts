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
  if (buttonCardElement instanceof HTMLButtonElement && buttonCardElement.disabled && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonCardElement.classList.add("button-disabled");
  } else if(buttonCardElement instanceof HTMLButtonElement && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonCardElement.classList.remove("button-disabled");
  }

  if (buttonStopElement instanceof HTMLButtonElement && buttonStopElement.disabled && buttonStopElement !== undefined && buttonStopElement !== null) {
    buttonStopElement.classList.add("button-disabled");
  } else if(buttonStopElement instanceof HTMLButtonElement && buttonStopElement !== undefined && buttonStopElement !== null){
    buttonStopElement.classList.remove("button-disabled");
  }

  if (buttonClueElement instanceof HTMLButtonElement && buttonClueElement.disabled && buttonClueElement !== undefined && buttonClueElement !== null) {
    buttonClueElement.classList.add("button-disabled");
  } else if(buttonClueElement instanceof HTMLButtonElement && buttonClueElement !== undefined && buttonClueElement !== null){
    buttonClueElement.classList.remove("button-disabled");
  }

  if (buttonGameOverElement instanceof HTMLButtonElement && buttonGameOverElement.disabled && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonGameOverElement.classList.add("button-disabled");
  } else if(buttonGameOverElement instanceof HTMLButtonElement && buttonCardElement !== undefined && buttonCardElement !== null){
    buttonGameOverElement.classList.remove("button-disabled");
  }
};

export const activeButtonStop = () => {
  if (buttonStopElement instanceof HTMLButtonElement && buttonStopElement !== undefined && buttonStopElement !== null) {
    buttonStopElement.disabled = false;
  }
};

export const getCardPoints = (card: number) => {
  return card > 7 ? 0.5 : card;
};
  
export const sumPoints = (points: number) => {
  return numberOfGame.score + points;
};;
  
export const setScore = (newScore: number) => {
  numberOfGame.score = newScore;
};
  
export const winGame = () => {
  if (
    textOverElement !== null && textOverElement !== undefined && textOverElement instanceof HTMLSpanElement &&
    buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement &&
    buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
    buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement
  ) {
    textOverElement.textContent = "¡Lo has clavado! ¡Enhorabuena!";
    buttonCardElement.disabled = true;
    buttonStopElement.disabled = true;
    buttonGameOverElement.disabled = false;
  }
};
  
export const lostGame = () => {
  if (
    textOverElement !== null && textOverElement !== undefined && textOverElement instanceof HTMLSpanElement &&
    buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement &&
    buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
    buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement
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

export const printScore = (score: number) => {
  if (textScoreElement !== null && textScoreElement !== undefined && textScoreElement instanceof HTMLSpanElement) {
    textScoreElement.textContent = score.toString();
  }
};
  
  
  export const checkScore = (): void => {
    if (textScoreElement !== null && textScoreElement !== undefined && textScoreElement instanceof HTMLSpanElement) {
      textScoreElement.textContent = '0';
    }
    checkButton();
  };
  

  export const resertClueFuntion = () =>{
    if (buttonClueElement !== null && buttonClueElement !== undefined && buttonClueElement instanceof HTMLButtonElement) {
      buttonClueElement.disabled = false; 
    }
  }import { 
    textScoreElement, 
    textOverElement, 
    buttonCardElement, 
    buttonStopElement, 
    buttonGameOverElement, 
    buttonClueElement, 
    numberOfGame,
 } from './model';

export const checkButton = () => {
  if (buttonCardElement instanceof HTMLButtonElement && buttonCardElement.disabled && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonCardElement.classList.add("button-disabled");
  } else if(buttonCardElement instanceof HTMLButtonElement && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonCardElement.classList.remove("button-disabled");
  }

  if (buttonStopElement instanceof HTMLButtonElement && buttonStopElement.disabled && buttonStopElement !== undefined && buttonStopElement !== null) {
    buttonStopElement.classList.add("button-disabled");
  } else if(buttonStopElement instanceof HTMLButtonElement && buttonStopElement !== undefined && buttonStopElement !== null){
    buttonStopElement.classList.remove("button-disabled");
  }

  if (buttonClueElement instanceof HTMLButtonElement && buttonClueElement.disabled && buttonClueElement !== undefined && buttonClueElement !== null) {
    buttonClueElement.classList.add("button-disabled");
  } else if(buttonClueElement instanceof HTMLButtonElement && buttonClueElement !== undefined && buttonClueElement !== null){
    buttonClueElement.classList.remove("button-disabled");
  }

  if (buttonGameOverElement instanceof HTMLButtonElement && buttonGameOverElement.disabled && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonGameOverElement.classList.add("button-disabled");
  } else if(buttonGameOverElement instanceof HTMLButtonElement && buttonCardElement !== undefined && buttonCardElement !== null){
    buttonGameOverElement.classList.remove("button-disabled");
  }
};

export const activeButtonStop = () => {
  if (buttonStopElement instanceof HTMLButtonElement && buttonStopElement !== undefined && buttonStopElement !== null) {
    buttonStopElement.disabled = false;
  }
};

export const getCardPoints = (card: number) => {
  return card > 7 ? 0.5 : card;
};
  
export const sumPoints = (points: number) => {
  return numberOfGame.score + points;
};;
  
export const setScore = (newScore: number) => {
  numberOfGame.score = newScore;
};
  
export const winGame = () => {
  if (
    textOverElement !== null && textOverElement !== undefined && textOverElement instanceof HTMLSpanElement &&
    buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement &&
    buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
    buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement
  ) {
    textOverElement.textContent = "¡Lo has clavado! ¡Enhorabuena!";
    buttonCardElement.disabled = true;
    buttonStopElement.disabled = true;
    buttonGameOverElement.disabled = false;
  }
};
  
export const lostGame = () => {
  if (
    textOverElement !== null && textOverElement !== undefined && textOverElement instanceof HTMLSpanElement &&
    buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement &&
    buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
    buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement
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

export const printScore = (score: number) => {
  if (textScoreElement !== null && textScoreElement !== undefined && textScoreElement instanceof HTMLSpanElement) {
    textScoreElement.textContent = score.toString();
  }
};
  
  
  export const checkScore = (): void => {
    if (textScoreElement !== null && textScoreElement !== undefined && textScoreElement instanceof HTMLSpanElement) {
      textScoreElement.textContent = '0';
    }
    checkButton();
  };
  

  export const resertClueFuntion = () =>{
    if (buttonClueElement !== null && buttonClueElement !== undefined && buttonClueElement instanceof HTMLButtonElement) {
      buttonClueElement.disabled = false; 
    }
  }
