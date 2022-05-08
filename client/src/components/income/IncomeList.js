import IncomeItem from "./IncomeItem";
import { Button, Collapse } from "react-bootstrap";
import NewIncomeForm from "./NewIncomeForm";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGrossIncome } from "../../state/action-creators/grossIncomeActionCreators";
import { calculateIncomeTotal } from "../../utils";

const IncomeList = () => {
    const [open, setOpen] = useState(false);
    const income = useSelector((state) => state.income.incomeSources);
    const dispatch = useDispatch();

    useEffect(() => {
        if (income.length > 0) {
            const incomeTotal = calculateIncomeTotal(income);
            console.log(incomeTotal);
            window.localStorage.setItem("grossIncome", JSON.stringify(incomeTotal));
            dispatch(updateGrossIncome(incomeTotal));
        } else {
            window.localStorage.setItem("grossIncome", JSON.stringify(0));
            dispatch(updateGrossIncome(0));
        }
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
                <Button variant="outline-primary" onClick={() => setOpen(!open)}>Add New</Button>
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