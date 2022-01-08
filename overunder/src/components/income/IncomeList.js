import IncomeItem from "./IncomeItem";
import incomeData from "../../mock-data/mock-income";
import { CloseButton, Stack } from "react-bootstrap";

const IncomeList = () => {
    const income = incomeData.income;
    return (
        <>
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
        </>
    );
};

export default IncomeList;