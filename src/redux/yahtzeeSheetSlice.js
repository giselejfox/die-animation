import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playerNames: [],
    playerSheets: {}
}

// Define slice
const yahtzeeSheetSlice = createSlice({
    name: 'yahtzeeSheets',
    initialState,
    reducers: {
      addPlayerSheet(state, action) {
        const { playerName } = action.payload
        state.playerNames.push(playerName)
      }
    }
});

// Export actions
export const { addPlayerSheet } = yahtzeeSheetSlice.actions;

export default yahtzeeSheetSlice.reducer;