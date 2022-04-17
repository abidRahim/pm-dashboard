import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './board.slice';

export default configureStore({
  reducer: {
    board: boardReducer
  }
});
