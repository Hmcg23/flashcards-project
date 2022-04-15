import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon, quizIds } = action.payload;
            state.topics[quizIds] = {
                id: id,
                name: name,
                icon: icon
            };
        }
    }
})

// selector
export const selectTopics = state => state.topics.topics;

export default topicsSlice.reducer;
