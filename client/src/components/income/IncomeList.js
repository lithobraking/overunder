import IncomeItem from "./IncomeItem";
import { Button, Collapse } from "react-bootstrap";
import NewIncomeForm from "./NewIncomeForm";
import { useEffect, useState } from "react";

const IncomeList = () => {
    const [income, setIncome] = useState(JSON.parse(window.localStorage.getItem('incomeSources')));
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log('useEffect called.');
    }, [income]);

    return (
        <>
            <div className="text-center">
                {
                    income.length > 0 ?
                        income.map((income) => {
                            return (
                                <IncomeItem
                                    key={income.id}
                                    incomeId={income.id}
                                    name={income.name}
                                    amount={income.amount}
                                    frequency={income.frequency}
                                    setIncome={setIncome}
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
                        setIncome={setIncome} />
                </div>
            </Collapse>
        </>
    );
};

export default IncomeList;