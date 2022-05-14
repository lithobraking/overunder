import Expense from "./Expense";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalExpenses } from "../../state/action-creators/totalExpensesActionCreators";
import { calculateExpenseTotal } from "../../utils";

const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses.expenseSources);
    const dispatch = useDispatch();

    useEffect(() => {
        if (expenses.length > 0) {
            const expenseTotal = calculateExpenseTotal(expenses);
            window.localStorage.setItem("expenseTotal", JSON.stringify(expenseTotal));
            dispatch(updateTotalExpenses(expenseTotal));
        } else {
            window.localStorage.setItem("expenseTotal", JSON.stringify(0));
            dispatch(updateTotalExpenses(0));
        };
    }, [expenses]);

    return (
        <>
            <div className="text-center" style={{ minHeight: "7.3rem" }}>
                {
                    expenses && expenses.length > 0 ?
                        expenses.map((expense) => {
                            return (
                                <Expense
                                    key={expense.id}
                                    expenseId={expense.id}
                                    name={expense.name}
                                    cost={expense.cost}
                                    frequency={expense.frequency}
                                />
                            )
                        }) :
                        <div className="d-flex flex-grow-1 justify-content-center" style={{ height: "7.3rem" }}>
                            <div className="align-self-center" ><h6><i>No expenses to display.</i></h6></div>
                        </div>
                }
            </div>
        </>
    );
};

export default ExpenseList;