import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./reducers/incomeReducer";
import expenseReducer from "./reducers/expenseReducer";
import taxReducer from "./reducers/taxReducer";
import netIncomeReducer from "./reducers/netIncomeReducer";
import totalExpensesReducer from "./reducers/totalExpensesReducer";
import grossIncomeReducer from "./reducers/grossIncomeReducer";
import preferencesReducer from "./reducers/preferencesReducer";

export const store = configureStore({
    reducer: {
        income: incomeReducer,
        expenses: expenseReducer,
        grossIncome: grossIncomeReducer,
        tax: taxReducer,
        totalExpenses: totalExpensesReducer,
        netIncome: netIncomeReducer,
        preferences: preferencesReducer
    }
});