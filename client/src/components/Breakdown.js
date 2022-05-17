import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { recurringTransactionTotal } from "../utils";
import CountUp from "react-countup";

const Breakdown = () => {
    const income = useSelector((state) => state.income.incomeSources);;
    const expenses = useSelector((state) => state.expenses.expenseSources);

    const incomeBreakdown = (incomeList) => {
        return {
            daily: recurringTransactionTotal(incomeList, 'income', "Daily"),
            weekly: recurringTransactionTotal(incomeList, 'income', "Weekly"),
            biweekly: recurringTransactionTotal(incomeList, 'income', "Bi-weekly"),
            monthly: recurringTransactionTotal(incomeList, 'income', "Monthly"),
            quarterly: recurringTransactionTotal(incomeList, 'income', "Quarterly"),
        };
    };

    const expenseBreakdown = (expenseList) => {
        return {
            daily: recurringTransactionTotal(expenseList, 'expense', "Daily"),
            weekly: recurringTransactionTotal(expenseList, 'expense', "Weekly"),
            biweekly: recurringTransactionTotal(expenseList, 'expense', "Bi-weekly"),
            monthly: recurringTransactionTotal(expenseList, 'expense', "Monthly"),
            quarterly: recurringTransactionTotal(expenseList, 'expense', "Quarterly"),
        };
    };

    // lmao this is way too long, I should probably break it up into smaller at some point
    // not gonna be today tho, so that's task is going into the tech debt pile
    return (
        <Card className="mb-4 bg-primary border-light shadow-soft">
            <Container>
                <div className="mb-3 text-center">
                    <h2><b>Details</b></h2>
                </div>
                <div className="d-flex flex-row justify-content-around px-3">
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Frequency</b></h5></div>
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Income</b></h5></div>
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Expenses</b></h5></div>
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Net Total</b></h5></div>
                </div>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{ textAlign: "center" }}><h5>Quarterly</h5></div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={incomeBreakdown(income).quarterly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        <div className="w-100" style={{ textAlign: "center" }}>
                            {
                                <CountUp
                                    end={expenseBreakdown(expenses).quarterly}
                                    prefix="$"
                                    separator=","
                                    decimals={2}
                                    preserveValue
                                />
                            }
                        </div>
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={incomeBreakdown(income).quarterly - expenseBreakdown(expenses).quarterly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                                style={{ color: incomeBreakdown(income).quarterly - expenseBreakdown(expenses).quarterly >= 0 ? "#262833" : "red" }}
                            />
                        }
                    </div>
                </Card>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{ textAlign: "center" }}><h5>Monthly</h5></div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={incomeBreakdown(income).monthly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={expenseBreakdown(expenses).monthly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                                                {
                            <CountUp
                                end={incomeBreakdown(income).monthly - expenseBreakdown(expenses).monthly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                                style={{ color: incomeBreakdown(income).monthly - expenseBreakdown(expenses).monthly >= 0 ? "#262833" : "red" }}
                            />
                        }
                    </div>
                </Card>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{ textAlign: "center" }}><h5>Bi-weekly</h5></div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={incomeBreakdown(income).biweekly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }</div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={expenseBreakdown(expenses).biweekly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                                                {
                            <CountUp
                                end={incomeBreakdown(income).biweekly - expenseBreakdown(expenses).biweekly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                                style={{ color: incomeBreakdown(income).biweekly - expenseBreakdown(expenses).biweekly >= 0 ? "#262833" : "red" }}
                            />
                        }
                    </div>
                </Card>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{ textAlign: "center" }}><h5>Weekly</h5></div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={incomeBreakdown(income).weekly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={expenseBreakdown(expenses).weekly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                                                {
                            <CountUp
                                end={incomeBreakdown(income).weekly - expenseBreakdown(expenses).weekly}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                                style={{ color: incomeBreakdown(income).weekly - expenseBreakdown(expenses).weekly >= 0 ? "#262833" : "red" }}
                            />
                        }
                    </div>
                </Card>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{ textAlign: "center" }}><h5>Daily</h5></div>
                    <div className="w-100" style={{ textAlign: "center" }}>                        {
                        <CountUp
                            end={incomeBreakdown(income).daily}
                            prefix="$"
                            separator=","
                            decimals={2}
                            preserveValue
                        />
                    }</div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                        {
                            <CountUp
                                end={expenseBreakdown(expenses).daily}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                            />
                        }
                    </div>
                    <div className="w-100" style={{ textAlign: "center" }}>
                                                {
                            <CountUp
                                end={incomeBreakdown(income).daily - expenseBreakdown(expenses).daily}
                                prefix="$"
                                separator=","
                                decimals={2}
                                preserveValue
                                style={{ color: incomeBreakdown(income).daily - expenseBreakdown(expenses).daily >= 0 ? "#262833" : "red" }}
                            />
                        }
                    </div>
                </Card>
            </Container>
        </Card>
    );
};

export default Breakdown;