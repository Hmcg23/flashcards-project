import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
})

// selector
export const selectQuiz = state => state.quizzes.quizzes;
// reducer
export const quizzesReducer = quizzesSlice.reducer;
// action creator
export const { addQuiz } = quizzesSlice.actions;

