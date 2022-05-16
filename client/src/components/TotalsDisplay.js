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
    const isIgnoringTax = useSelector((state) => state.preferences.isIgnoringTax);
    const dispatch = useDispatch();

    useEffect(() => {
        const netIncome = isIgnoringTax ? grossIncome - totalExpenses : grossIncome - (totalExpenses + tax);
        window.localStorage.setItem("netIncome", JSON.stringify(netIncome));
        dispatch(updateNetIncome(netIncome));
    });

    const updateProgressBar = (grossIncome, totalExpenses, tax) => {
        if (grossIncome === 0 && totalExpenses > 0) {
            return 100;
        } else if (grossIncome === 0 && totalExpenses === 0) {
            return 0;
        } else if (isIgnoringTax) {
            return totalExpenses / grossIncome * 100;
        } else {
            return totalExpenses / (grossIncome - tax) * 100;
        };
    };

    return (
        <Container>
            <Card className="bg-primary border-light shadow-soft">
                <Card.Body>
                    <div className="mb-3 text-center">
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
                    <h4>
                        {isIgnoringTax ?
                            <del className="text-muted">
                                <CountUp end={tax} prefix="$" suffix=" /year" separator="," decimals={2} preserveValue />
                            </del>
                            :
                            <CountUp end={tax} prefix="$" suffix=" /year" separator="," decimals={2} preserveValue />
                        }
                    </h4>
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
                        /> /year
                    </h4>
                    <ProgressBar
                        variant={(totalExpenses / (grossIncome - tax) * 100) < 100 ? null : "danger"}
                        now={updateProgressBar(grossIncome, totalExpenses, tax)}
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TotalsDisplay;