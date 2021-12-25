import IncomeItem from "./IncomeItem";
import incomeData from "../../mock-data/mock-income";

const IncomeList = () => {
    const income = incomeData.income;
    return (
        <>
            {
                income.length > 0 ?
                    income.map((item) => {
                        return (
                            <IncomeItem
                                key={item.id}
                                name={item.name}
                                amount={item.amount}
                                frequency={item.frequency}
                            />
                        )
                    }) :
                    "No income to display."
            }
        </>
    );
};

export default IncomeList;