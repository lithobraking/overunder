import { createReducer } from "@reduxjs/toolkit";
import { createIncome, deleteIncome } from "../action-creators/incomeActionCreators";

const initialState = {
    incomeSources: JSON.parse(window.localStorage.getItem('incomeSources')) || []
};

const incomeReducer = createReducer(initialState, (builder) => {
    builder.addCase(createIncome, (state, action) => {
        state.incomeSources.push(action.payload);
    });
    builder.addCase(deleteIncome, (state, action) => {
        state.incomeSources = state.incomeSources.filter((income) => income.id !== action.payload.id);
        state.incomeSources.forEach((e, idx) => {
            if (e.id !== idx) {
                e.id = idx
            };
        });
    });
});

export default incomeReducer;
