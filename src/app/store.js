import { configureStore } from '@reduxjs/toolkit';
import diceReducer from '../redux/dieSlice';
import yahtzeeSheetReducer from '../redux/yahtzeeSheetSlice';

// Create store
export default configureStore({
    reducer: {
        dice: diceReducer,
        yahtzeeSheets: yahtzeeSheetReducer,
    }
});