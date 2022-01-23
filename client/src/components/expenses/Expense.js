import { Card, CloseButton } from "react-bootstrap";

const Expense = ({ expenseId, name, cost, frequency, setExpense }) => {
    const handleRemove = () => {
        let expense = JSON.parse(window.localStorage.getItem('expenses'));
        expense.splice(expenseId, 1);
        expense.forEach((e, idx) => {
            if (e.id !== idx) {
                e.id = idx
            };
        });
        window.localStorage.setItem('expenses', JSON.stringify(expense));
        setExpense(JSON.parse(window.localStorage.getItem('expenses')));
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