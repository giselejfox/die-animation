import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playerNames: [],
    playerSheets: {}
}

const tempInitialState = {
  playerNames: ["Alice"],
  playerSheets: { 
    Alice : {
      ones: "empty",
      twos: "empty",
      threes: "empty",
      fours: "empty",
      fives: "empty",
      sixes: "empty",
      threeOfAKind: "empty",
      fourOfAKind: "empty",
      fullHouse: "empty",
      smallStraight: "empty",
      largeStraight: "empty",
      yahtzee: "empty",
      chance: "empty",
      extraYahtzeePoints: 0,
    }
  }
}

// Define the initial structure of a player's score sheet
const initialScoreSheet = {
    ones: "empty",
    twos: "empty",
    threes: "empty",
    fours: "empty",
    fives: "empty",
    sixes: "empty",
    threeOfAKind: "empty",
    fourOfAKind: "empty",
    fullHouse: "empty",
    smallStraight: "empty",
    largeStraight: "empty",
    yahtzee: "empty",
    chance: "empty",
    extraYahtzeePoints: 0,
};

// Define slice
const yahtzeeSheetSlice = createSlice({
    name: 'yahtzeeSheets',
    initialState: tempInitialState,
    reducers: {
      addPlayerSheet(state, action) {
        const { playerName } = action.payload
        state.playerNames.push(playerName)
        state.playerSheets[playerName] = { ...initialScoreSheet };
      },
      updateSheet(state, action) {
        const { playerName, sectionID, score } = action.payload;
        if (state.playerSheets[playerName] && state.playerSheets[playerName][sectionID] === "empty") {
          state.playerSheets[playerName][sectionID] = score;
        }
      },
      addExtraYahtzeePoints(state, action) {
        const { playerName } = action.payload;
        state.playerSheets[playerName]["extraYahtzeePoints"] = state.playerSheets[playerName]["extraYahtzeePoints"] + 100
      },
    }
});

// Export actions
export const { addPlayerSheet } = yahtzeeSheetSlice.actions;
export const { updateSheet } = yahtzeeSheetSlice.actions;
export const { addExtraYahtzeePoints } = yahtzeeSheetSlice.actions;

export default yahtzeeSheetSlice.reducer;