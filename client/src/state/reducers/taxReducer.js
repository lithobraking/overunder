import { createReducer } from "@reduxjs/toolkit";
import { updateTax } from "../action-creators/taxActionCreators";


const initialState = {
    tax: JSON.parse(window.localStorage.getItem('tax')) || 0
}

const taxReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateTax, (state, action) => {
        state.tax = action.payload;
    });
});

export default taxReducer;