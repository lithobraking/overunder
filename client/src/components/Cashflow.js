import { useState } from "react";
import { Card, Container, Collapse, Button } from "react-bootstrap"
import ExpenseList from "./expenses/ExpenseList";
import IncomeList from "./income/IncomeList";
import NewIncomeForm from "./income/NewIncomeForm";
import NewExpenseForm from "./expenses/NewExpenseForm";

const Cashflow = () => {
    const [incomeOpen, setIncomeOpen] = useState(false);
    const [expenseOpen, setExpenseOpen] = useState(false);

    return (
        <>
            <Card
                className="mb-4 p-2 bg-primary border-light shadow-soft"
                style={{ minHeight: "17rem", }}
            >
                <Container>
                    <div className="mb-3">
                        <h2><b>Income</b></h2>
                    </div>
                    <div className="d-flex flex-row justify-content-around px-3">
                        <div style={{ textAlign: "center" }} className="w-100"><h5><b>Name</b></h5></div>
                        <div style={{ textAlign: "center" }} className="w-100"><h5><b>Amount</b></h5></div>
                        <div style={{ textAlign: "center" }} className="w-100"><h5><b>Frequency</b></h5></div>
                    </div>
                    <IncomeList />
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => setIncomeOpen(!incomeOpen)}>{incomeOpen ? "Cancel" : "Add New"}</Button>
                    </div>
                    <Collapse in={incomeOpen}>
                        <div>
                            <NewIncomeForm
                                open={incomeOpen}
                                setOpen={setIncomeOpen}
                            />
                        </div>
                    </Collapse>
                </Container>
            </Card>
            <Card className="mb-4 p-2 bg-primary border-light shadow-soft"
                style={{ minHeight: "17rem", }}
            >
                <Container>
                    <div className="mb-3">
                        <h2><b>Expenses</b></h2>
                    </div>
                    <div className="d-flex flex-row justify-content-around px-3">
                        <div style={{ textAlign: "center" }} className="w-100"><h5><b>Name</b></h5></div>
                        <div style={{ textAlign: "center" }} className="w-100"><h5><b>Cost</b></h5></div>
                        <div style={{ textAlign: "center" }} className="w-100"><h5><b>Frequency</b></h5></div>
                    </div>
                    <ExpenseList />
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => setExpenseOpen(!expenseOpen)}>{expenseOpen ? "Cancel" : "Add New"}</Button>
                    </div>
                    <Collapse in={expenseOpen}>
                        <div>
                            <NewExpenseForm
                                open={expenseOpen}
                                setOpen={setExpenseOpen}
                            />
                        </div>
                    </Collapse>
                </Container>
            </Card>
        </>
    );
};

export default Cashflow;