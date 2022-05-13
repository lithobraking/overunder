import { createReducer } from "@reduxjs/toolkit";
import { updateMaritalStatus, updateIgnoreTax, updateDarkMode } from "../action-creators/preferencesActionCreator";

const initialState = {
    maritalStatus: JSON.parse(window.localStorage.getItem("maritalStatus")) || "single",
    isIgnoringTax: JSON.parse(window.localStorage.getItem("isIgnoringTax")) || false,
    darkModeEnabled: JSON.parse(window.localStorage.getItem("darkModeEnabled")) || false,
};

const preferencesReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateMaritalStatus, (state, action) => {
        state.maritalStatus = action.payload;
    });
    builder.addCase(updateIgnoreTax, (state, action) => {
        state.isIgnoringTax = action.payload;
    });
    builder.addCase(updateDarkMode, (state, action) => {
        state.darkModeEnabled = action.payload;
    });
});

export default preferencesReducer;