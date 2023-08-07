import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      // mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// exporting one reducer from store reducers hencer "reducer"
export default cartSlice.reducer;
