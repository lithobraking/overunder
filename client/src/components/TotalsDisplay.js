import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { updateNetIncome } from "../state/action-creators/netIncomeActionCreators";


const TotalsDisplay = () => {
    const grossIncome = useSelector((state) => state.grossIncome.grossIncome);
    const tax = useSelector((state) => state.tax.tax);
    const netIncome = useSelector((state) => state.netIncome.netIncome);
    const totalExpenses = useSelector((state) => state.totalExpenses.totalExpenses);
    const dispatch = useDispatch();

    useEffect(() => {
        const netIncome = grossIncome - totalExpenses - tax;
        window.localStorage.setItem("netIncome", JSON.stringify(netIncome));
        dispatch(updateNetIncome(netIncome));
    }, [grossIncome, totalExpenses, tax]);


    return (
        <Container>
            <Card className="shadow-sm">
                <Card.Body>
                    <div className="mb-3">
                        <h2><b>Totals</b></h2>
                    </div>
                    <h3>Gross Income</h3>
                    <h4>${grossIncome || 0} / yr</h4>
                    <h3>Taxes</h3>
                    <h4>${tax} / yr</h4>
                    <h3>Total Expenses</h3>
                    <h4>${totalExpenses} / yr</h4>
                    <h3>Net Income</h3>
                    <h4>${netIncome} / yr</h4>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TotalsDisplay;