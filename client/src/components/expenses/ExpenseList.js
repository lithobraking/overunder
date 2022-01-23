import Expense from "./Expense";
import NewExpenseForm from "./NewExpenseForm";
import { Button, Collapse } from "react-bootstrap";
import { useState } from "react";

const ExpenseList = () => {
    const [expense, setExpense] = useState(JSON.parse(window.localStorage.getItem('expenses')));
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="text-center">
                {
                    expense && expense.length > 0 ?
                        expense.map((expense) => {
                            return (
                                <Expense
                                    key={expense.id}
                                    expenseId={expense.id}
                                    name={expense.name}
                                    cost={expense.cost}
                                    frequency={expense.frequency}
                                    setExpense={setExpense}
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
                        setExpense={setExpense} />
                </div>
            </Collapse>
        </>
    );
};

export default ExpenseList;