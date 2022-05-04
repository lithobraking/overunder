import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const TotalsDisplay = () => {
    const [gross, setGross] = useState(0);
    const [tax, setTax] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [net, setNet] = useState(0);

    useEffect(() => {
        const handleIncomeChange = () => {
            const income = JSON.parse(window.localStorage.getItem('incomeSources'));
            const amounts = income.map(item => parseFloat(item.amount));
            const startingValue = gross;
            const incomeTotal = amounts.reduce((previousValue, currentValue) => previousValue + currentValue, startingValue);
            setGross(incomeTotal);
        }
        // console.log("useEffect() called!");
        window.addEventListener('storage', handleIncomeChange);
        return () => {
            window.removeEventListener('storage', handleIncomeChange);
        }
    });

    return (
        <Container>
            <Card className="shadow-sm">
                <Card.Body>
                    <div className="mb-3">
                        <h2><b>Totals</b></h2>
                    </div>
                    <h3>Gross Income</h3>
                    <h4>{gross}</h4>
                    <h3>Taxes</h3>
                    <h4>{tax}</h4>
                    <h3>Total Expenses</h3>
                    <h4>{expenses}</h4>
                    <h3>Net Income</h3>
                    <h4>{net}</h4>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TotalsDisplay;