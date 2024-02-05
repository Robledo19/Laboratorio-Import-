import { 
    buttonCardElement, 
    buttonStopElement, 
    buttonGameOverElement, 
    buttonClueElement, 
 } from './model';

 import{
    checkScore,
 } from './motor'

import{
    stopGameFuntion,
    clueFuntion,
    newCard,
    playAgain
} from './ui'


window.addEventListener("DOMContentLoaded", checkScore);

if (
  buttonCardElement !== null &&
  buttonCardElement !== undefined &&
  buttonCardElement instanceof HTMLButtonElement
) {
  buttonCardElement.addEventListener("click", newCard);
}
buttonStopElement?.addEventListener("click", stopGameFuntion);
buttonGameOverElement?.addEventListener("click", playAgain);
buttonClueElement?.addEventListener("click", clueFuntion);
