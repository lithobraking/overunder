import IncomeItem from "./IncomeItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateIncomeTax, calculateIncomeTotal } from "../../utils";
import { updateGrossIncome } from "../../state/action-creators/grossIncomeActionCreators";
import { updateTax } from "../../state/action-creators/taxActionCreators";

const IncomeList = () => {
    const income = useSelector((state) => state.income.incomeSources);
    const maritalStatus = useSelector((state) => state.preferences.maritalStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (income.length > 0) {
            const incomeTotal = calculateIncomeTotal(income);
            window.localStorage.setItem("grossIncome", JSON.stringify(incomeTotal));
            dispatch(updateGrossIncome(incomeTotal));

            const tax = calculateIncomeTax(incomeTotal, maritalStatus);
            window.localStorage.setItem("tax", JSON.stringify(tax));
            dispatch(updateTax(tax));
        } else {
            window.localStorage.setItem("grossIncome", JSON.stringify(0));
            dispatch(updateGrossIncome(0));

            window.localStorage.setItem("tax", JSON.stringify(0));
            dispatch(updateTax(0));
        };
    }, [income, maritalStatus]);

    return (
        <>
            <div className="text-center" style={{ minHeight: "7.3rem" }}>
                {
                    income && income.length > 0 ?
                        income.map((income) => {
                            return (
                                <IncomeItem
                                    key={income.id}
                                    incomeId={income.id}
                                    name={income.name}
                                    amount={income.amount}
                                    frequency={income.frequency}
                                />
                            )
                        }) :
                        <div
                            className="d-flex flex-grow-1 justify-content-center" style={{ height: "7.3rem" }}>
                            <div className="align-self-center">
                                <h6><i>No income to display.</i></h6>
                            </div>
                        </div>
                }
            </div>
        </>
    );
};

export default IncomeList;