import { createReducer } from "@reduxjs/toolkit";
import {createExpense, deleteExpense} from "../action-creators/expenseActionCreators";

const initialState = {
    expenseSources: JSON.parse(window.localStorage.getItem('expenses')) || []
};

const expenseReducer = createReducer(initialState, (builder) => {
    builder.addCase(createExpense, (state, action) => {
        state.expenseSources.push(action.payload);
    });
    builder.addCase(deleteExpense, (state, action) => {
        state.expenseSources = state.expenseSources.filter((expense) => expense.id !== action.payload.id);
    });
});

export default expenseReducer;
