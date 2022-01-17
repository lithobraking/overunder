import { Card, CloseButton } from "react-bootstrap";

const IncomeItem = ({incomeId, name, amount, frequency }) => {
    const handleClick = () => {
        let income = JSON.parse(window.localStorage.getItem('incomeSources'));
        income.splice(incomeId, 1);
        window.localStorage.setItem('incomeSources', JSON.stringify(income));
        console.log(window.localStorage.getItem('incomeSources'));
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