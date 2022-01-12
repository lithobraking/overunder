import IncomeItem from "./IncomeItem";
import incomeData from "../../mock-data/mock-income";
import { Button, CloseButton, Collapse, Stack } from "react-bootstrap";
import NewIncomeForm from "./NewIncomeForm";
import { useState } from "react";

const IncomeList = () => {
    const income = incomeData.income;

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="text-center">
                {
                    income.length > 0 ?
                        income.map((income) => {
                            return (
                                <IncomeItem
                                    key={income.id}
                                    name={income.name}
                                    amount={income.amount}
                                    frequency={income.frequency}
                                />
                            )
                        }) :
                        "No income to display."
                }
                <Button variant="outline-primary" onClick={() => setOpen(!open)}>Add New</Button>
            </div>
            <Collapse in={open}>
                <div>
                    <NewIncomeForm />
                </div>
            </Collapse>
        </>
    );
};

export default IncomeList;