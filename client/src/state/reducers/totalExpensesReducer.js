import { createReducer } from "@reduxjs/toolkit";
import { updateTotalExpenses } from "../action-creators/totalExpensesActionCreators";

const initialState = {
    totalExpenses: JSON.parse(window.localStorage.getItem('totalExpenses')) || 0
};

const totalExpensesReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateTotalExpenses, (state, action) => {
        state.totalExpenses = action.payload;
    });
});

export default totalExpensesReducer;