import IncomeItem from "./IncomeItem";
import incomeData from "../../mock-data/mock-income";
import { Button, CloseButton, Stack } from "react-bootstrap";
import NewIncomeForm from "./NewIncomeForm";

const IncomeList = () => {
    const income = incomeData.income;
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
                <Button variant="outline-primary">Add New</Button>
            </div>
            <NewIncomeForm />
        </>
    );
};

export default IncomeList;