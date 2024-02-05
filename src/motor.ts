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
    const buttons = [buttonCardElement, buttonStopElement, buttonClueElement, buttonGameOverElement];

    buttons.forEach(button => {
        if (button?.disabled) {
            button.classList.add('button-disabled');
        } else {
            button?.classList.remove('button-disabled');
        }
    });
};


export const activeButtonStop = () =>{
    if (buttonStopElement) {
        buttonStopElement.disabled = false;
      }
}

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
      if(textOverElement != null && buttonCardElement && buttonStopElement && buttonGameOverElement){
          textOverElement.textContent = "¡ Lo has clavado! ¡Enhorabuena!";
          buttonCardElement.disabled = true;
          buttonStopElement.disabled = true;
          buttonGameOverElement.disabled = false;
      }
  };
  
export const lostGame = () => {
      if (textOverElement != null && buttonGameOverElement && buttonStopElement && buttonCardElement) {
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
  