import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back
            };
        }
    }
})

// selector
export const selectCards = state => state.cards.cards;
// reducer
export default cardsSlice.reducer;
// action creator
export const { addCard } = cardsSlice.actions;
