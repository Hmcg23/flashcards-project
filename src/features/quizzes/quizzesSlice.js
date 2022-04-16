import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
})

// selector
export const selectQuizzes = state => state.quizzes.quizzes;
// reducer
export default quizzesSlice.reducer;
// action creator
export const { addQuiz } = quizzesSlice.actions;

export const createQuizTopicId = (payload) => {
    const { quizId, topicId } = payload;
    return (dispatch) => {
      dispatch(addQuiz(payload));
      dispatch(addQuizId({topicId: topicId, quizId: quizId}));
    };
};