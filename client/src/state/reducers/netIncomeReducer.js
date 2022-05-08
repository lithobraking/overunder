import { createReducer } from "@reduxjs/toolkit";
import { updateNetIncome } from "../action-creators/netIncomeActionCreators";

const initialState = {
    netIncome: 0
};

const netIncomeReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateNetIncome, (state, action) => {
        state.netIncome = action.payload;
    });
});

export default netIncomeReducer;