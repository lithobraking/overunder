import { Card, CloseButton } from "react-bootstrap";

const IncomeItem = ({incomeId, name, amount, frequency, setIncome }) => {
    const handleClick = () => {
        let income = JSON.parse(window.localStorage.getItem('incomeSources'));
        console.log(income);
        income.splice(incomeId, 1);
        income.forEach((e, idx) => {
            // can be optimised by starting from the index of the element removed instead
            // of the beginning of the array, I'm just being lazy
            if (e.id !== idx) {
                e.id = idx
            };
        });
        console.log(income);
        window.localStorage.setItem('incomeSources', JSON.stringify(income));
        setIncome(JSON.parse(window.localStorage.getItem('incomeSources')));
    };

    return (
        <Card className="d-flex flex-row justify-content-around p-3 mb-2">
            <div className="w-100" style={{ textAlign: "center" }}>
                {name}
            </div>
            <div className="w-100" style={{ textAlign: "center" }}>
                {amount}
            </div>
            <div className="w-100" style={{ textAlign: "center" }}>
                {frequency}
            </div>
            <CloseButton className="position-absolute end-0 me-2" onClick={handleClick}/>
        </Card>
    );
};

export default IncomeItem;