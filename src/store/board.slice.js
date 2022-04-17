import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lists: []
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addList: (state, actions) => {
      const { payload } = actions;
      state.lists.push(payload)
    },
    addCards: (state, { payload }) => {
      const { listIndex, card } = payload;
      state.lists[listIndex].cards.push(card);
    },
    removeItem: (state, { payload }) => {
      const { type, listIndex, cardIndex } = payload;

      switch (type) {
        case 'list':
          state.lists.splice(listIndex, 1);
          break;
        case 'card':
          state.lists[listIndex].cards.splice(cardIndex, 1);
          break;
        default: 
          break
      }
    },
    onItemDrop: (state, { payload }) => {
      const { dragPosition, swapPosition } = payload;
      const { draggedListIndex, dragItemId } = dragPosition;
      const { listIndex, cardIndex } = swapPosition;
      let toPosition = state.lists[listIndex].cards.length;

      if (typeof cardIndex !== 'undefined') {
        toPosition = cardIndex;
      }

      const draggedCardIndex = state.lists[draggedListIndex].cards
        .findIndex(card => card.id === dragItemId);
      const [recoverItem] = state.lists[draggedListIndex].cards.splice(draggedCardIndex, 1);
      state.lists[listIndex].cards.splice(toPosition, 0, recoverItem);
    }
  }
});

export const { addList, addCards, removeItem, onItemDrop } = boardSlice.actions;

export default boardSlice.reducer;
