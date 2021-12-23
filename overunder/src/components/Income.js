import { Accordion, Card } from "react-bootstrap"

const Income = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Accordion>
                <Accordion.Item eventKey={"0"}>
                    <p>Item Name</p>
                    <p>Frequency</p>
                </Accordion.Item>
            </Accordion>
        </Card>
    );
};

export default Income;