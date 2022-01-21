import { Card, Container, Table } from "react-bootstrap"
import IncomeList from "./income/IncomeList";

const Cashflow = () => {
    return (
        <>
            <h2><b>Income</b></h2>
            <Card className="mb-3 p-2">
                <Container>
                    <div className="d-flex flex-row justify-content-around px-3">
                        <div style={{textAlign: "center"}} className="w-100"><h5><b>Name</b></h5></div>
                        <div style={{textAlign: "center"}} className="w-100"><h5><b>Amount</b></h5></div>
                        <div style={{textAlign: "center"}} className="w-100"><h5><b>Frequency</b></h5></div>
                    </div>
                    <IncomeList />
                </Container>
            </Card>
            <Card className="mb-3 p-2">
                <Container>
                    <Card.Title><h3><b>Expenses</b></h3></Card.Title>
                    <Table borderless hover>
                        <thead>
                            <th>Expense</th>
                            <th>Cost</th>
                            <th>Frequency</th>
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                </Container>
            </Card>
        </>
    );
};

export default Cashflow;