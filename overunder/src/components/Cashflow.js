import { Accordion, Card, Stack } from "react-bootstrap"

const Cashflow = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={"0"}>
                <Accordion.Header>Income</Accordion.Header>
                <Accordion.Body>
                    <Stack direction="horizontal" gap="4">
                        <p className="ms-auto">Income Name</p>
                        <div className="vr ms-auto" />
                        <p className="ms-auto">Amount</p>
                        <div className="vr ms-auto" />
                        <p className="ms-auto">Frequency</p>
                    </Stack>
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