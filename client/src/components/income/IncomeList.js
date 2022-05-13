import IncomeItem from "./IncomeItem";
import { Button, Collapse } from "react-bootstrap";
import NewIncomeForm from "./NewIncomeForm";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGrossIncome } from "../../state/action-creators/grossIncomeActionCreators";
import { calculateIncomeTax, calculateIncomeTotal } from "../../utils";
import { updateTax } from "../../state/action-creators/taxActionCreators";

const IncomeList = () => {
    const [open, setOpen] = useState(false);
    const income = useSelector((state) => state.income.incomeSources);
    const dispatch = useDispatch();

    useEffect(() => {
        if (income.length > 0) {
            const incomeTotal = calculateIncomeTotal(income);
            window.localStorage.setItem("grossIncome", JSON.stringify(incomeTotal));
            dispatch(updateGrossIncome(incomeTotal));

            const tax = calculateIncomeTax(incomeTotal, "single");
            window.localStorage.setItem("tax", JSON.stringify(tax));
            dispatch(updateTax(tax));
        } else {
            window.localStorage.setItem("grossIncome", JSON.stringify(0));
            dispatch(updateGrossIncome(0));

            window.localStorage.setItem("tax", JSON.stringify(0));
            dispatch(updateTax(0));
        };
    }, [income]);

    return (
        <>
            <div className="text-center">
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
                        <div className="my-5" ><h6><i>No income to display.</i></h6></div>
                }
                <Button onClick={() => setOpen(!open)}>{open ? "Cancel" : "Add New"}</Button>
            </div>
            <Collapse in={open}>
                <div>
                    <NewIncomeForm
                        open={open}
                        setOpen={setOpen}
                    />
                </div>
            </Collapse>
        </>
    );
};

export default IncomeList;