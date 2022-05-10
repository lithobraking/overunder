import Expense from "./Expense";
import NewExpenseForm from "./NewExpenseForm";
import { Button, Collapse } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalExpenses } from "../../state/action-creators/totalExpensesActionCreators";
import { calculateExpenseTotal } from "../../utils";

const ExpenseList = () => {
    // const [expense, setExpense] = useState(JSON.parse(window.localStorage.getItem('expenses')));
    const [open, setOpen] = useState(false);
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
            <div className="text-center">
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
                        <div className="my-5" ><h6><i>No expenses to display.</i></h6></div>
                }
                <Button variant="outline-primary" onClick={() => setOpen(!open)}>Add New</Button>
            </div>
            <Collapse in={open}>
                <div>
                    <NewExpenseForm
                        open={open}
                        setOpen={setOpen}
                    />
                </div>
            </Collapse>
        </>
    );
};

export default ExpenseList;