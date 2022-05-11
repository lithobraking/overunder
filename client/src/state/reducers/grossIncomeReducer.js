import { createReducer } from "@reduxjs/toolkit";
import { updateGrossIncome } from "../action-creators/grossIncomeActionCreators";

const initialState = {
    grossIncome: JSON.parse(window.localStorage.getItem('grossIncome'))
};

const grossIncomeReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateGrossIncome, (state, action) => {
        state.grossIncome = action.payload;
    });
});

export default grossIncomeReducer;