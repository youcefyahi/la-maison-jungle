import { createSlice } from '@reduxjs/toolkit';

const panierState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  panierState,
  reducers: {
    addPanier: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removePanier: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
    clearPanier: (state) => {
      state.items = [];
    }
  },
});

export const { addPanier, removePanier, updateQuantity, clearPanier } = cartSlice.actions;

export default cartSlice.reducer;



