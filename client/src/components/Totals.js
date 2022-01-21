import Card from "react-bootstrap/Card";


const Totals = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <h3>Gross Income</h3>
                <h3>Taxes</h3>
                <h3>Total Expenses</h3>
                <h3>Net Income</h3>
            </Card.Body>
        </Card>
    );
}

export default Totals;