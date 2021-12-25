import { Accordion, Card, Stack } from "react-bootstrap"
import IncomeList from "./income/IncomeList";

const Cashflow = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={"0"}>
                <Accordion.Header>Income</Accordion.Header>
                <Accordion.Body>
                    <IncomeList />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={"1"}>
                <Accordion.Header>Expenses</Accordion.Header>
                <Accordion.Body>
                    <p>Expense Name</p>
                    <p>Amount</p>
                    <p>Frequency</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
};

export default Cashflow;