import { Card, Container } from "react-bootstrap"
import ExpenseList from "./expenses/ExpenseList";
import IncomeList from "./income/IncomeList";
// className="mb-3 p-2 shadow-sm" 
const Cashflow = () => {
    return (
        <>
            <Card className="mb-3 p-2 bg-primary border-light shadow-soft">
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
                </Container>
            </Card>
            <Card className="mb-3 p-2 bg-primary border-light shadow-soft">
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
                </Container>
            </Card>
        </>
    );
};

export default Cashflow;