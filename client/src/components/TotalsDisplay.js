import { useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { updateNetIncome } from "../state/action-creators/netIncomeActionCreators";
import CountUp from "react-countup";

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
    });

    return (
        <Container>
            <Card className="bg-primary border-light shadow-soft">
                <Card.Body>
                    <div className="mb-3">
                        <h2><b>Totals</b></h2>
                    </div>
                    <h3>Gross Income</h3>
                    <h4><CountUp
                        end={grossIncome}
                        prefix="$"
                        suffix=" /year"
                        separator=","
                        decimals={2}
                        preserveValue />
                    </h4>
                    <h3>Taxes</h3>
                    <h4><CountUp end={tax} prefix="$" suffix=" /year" separator="," decimals={2} preserveValue /></h4>
                    <h3>Total Expenses</h3>
                    <h4><CountUp end={totalExpenses} prefix="$" suffix=" /year" separator="," decimals={2} preserveValue /></h4>
                    <h3>Net Income</h3>
                    <h4>
                        <CountUp
                            end={netIncome}
                            prefix="$"
                            separator=","
                            decimals={2}
                            preserveValue
                            style={{ color: netIncome >= 0 ? "#262833" : "red" }}
                        />
                        /year
                    </h4>
                    <ProgressBar now={((totalExpenses + tax) / grossIncome) * 100} />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TotalsDisplay;