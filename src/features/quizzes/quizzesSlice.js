import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

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

export const createQuizFromId = (payload) => {
    const { quizId, topicId } = payload;
    return (dispatch) => {
      dispatch(addQuiz(payload));
      dispatch(addQuizId({topicId: topicId, quizId: quizId}));
    };
};

