import { 
    numberOfGame,
 } from './model';


export const getCardPoints = (card: number) => {
  return card > 7 ? 0.5 : card;
};
  
export const sumPoints = (points: number) => {
  return numberOfGame.score + points;
};
  
export const setScore = (newScore: number) => {
  numberOfGame.score = newScore;
};
  
export const getRandomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
};
  
export const getCartNumber = (randomNumber: number) => {
    return randomNumber > 7 ? randomNumber + 2 : randomNumber;
};


  
  

  

