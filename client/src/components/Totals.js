import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const Totals = () => {
    return (
        <Container>

            <Card className="shadow-sm">
                <Card.Body>
                    <h3>Gross Income</h3>
                    <h3>Taxes</h3>
                    <h3>Total Expenses</h3>
                    <h3>Net Income</h3>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Totals;