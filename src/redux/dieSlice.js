import { createSlice } from '@reduxjs/toolkit'
import { getRandomDieNum } from '../helpers/getRandomNums';

// Define initial state
const initialState = {
  die1: { num: getRandomDieNum(), hold: false },
  die2: { num: getRandomDieNum(), hold: false },
  die3: { num: getRandomDieNum(), hold: false },
  die4: { num: getRandomDieNum(), hold: false },
  die5: { num: getRandomDieNum(), hold: false }
};
  
// Define slice
const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    rollDice(state) {
      Object.keys(state).forEach((dieID) => {
        if (!state[dieID].hold) {
          state[dieID].num = getRandomDieNum();
        }
      });
    },
    toggleHold(state, action) {
      const { dieID } = action.payload;
      state[dieID].hold = !state[dieID].hold;
    }
  }
});

// Export actions
export const { rollDice, toggleHold } = diceSlice.actions;

export default diceSlice.reducer