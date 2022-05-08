import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";


const TotalsDisplay = () => {
    const grossIncome = useSelector((state) => state.grossIncome.grossIncome);
    const tax = useSelector((state) => state.tax.tax);
    const netIncome = useSelector((state) => state.netIncome.netIncome);
    const totalExpenses = useSelector((state) => state.totalExpenses.totalExpenses);

    return (
        <Container>
            <Card className="shadow-sm">
                <Card.Body>
                    <div className="mb-3">
                        <h2><b>Totals</b></h2>
                    </div>
                    <h3>Gross Income</h3>
                    <h4>${grossIncome || 0}</h4>
                    <h3>Taxes</h3>
                    <h4>${tax}</h4>
                    <h3>Total Expenses</h3>
                    <h4>${totalExpenses}</h4>
                    <h3>Net Income</h3>
                    <h4>${netIncome}</h4>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TotalsDisplay;