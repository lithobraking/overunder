import { Card, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../../state/action-creators/expenseActionCreators";

const Expense = ({ expenseId, name, cost, frequency }) => {
    const expenses = useSelector((state) => state.expenses.expenses);
    const dispatch = useDispatch();

    const handleRemove = () => {
        let expense = JSON.parse(window.localStorage.getItem('expenses'));
        expense.splice(expenseId, 1);
        // TODO: replace with array.filter()
        expense.forEach((e, idx) => {
            if (e.id !== idx) {
                e.id = idx
            };
        });
        dispatch(deleteExpense({id: expenseId}))
        window.localStorage.setItem('expenses', JSON.stringify(expense));
    };

    return (
        <Card className="d-flex flex-row justify-content-around p-3 mb-2">
            <div className="w-100" style={{ textAlign: "center" }}>
                {name}
            </div>
            <div className="w-100" style={{ textAlign: "center" }}>
                ${cost}
            </div>
            <div className="w-100" style={{ textAlign: "center" }}>
                {frequency}
            </div>
            <CloseButton className="position-absolute end-0 me-2" onClick={handleRemove} />
        </Card>
    );
};

export default Expense;