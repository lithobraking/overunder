import IncomeItem from "./IncomeItem";
import { Button, Collapse } from "react-bootstrap";
import NewIncomeForm from "./NewIncomeForm";
import { useState } from "react";
import { useSelector } from "react-redux";

const IncomeList = () => {
    const income = useSelector((state) => state.income.incomeSources);
    const [open, setOpen] = useState(false);

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