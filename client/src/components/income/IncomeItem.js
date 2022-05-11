import { Card, CloseButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteIncome } from "../../state/action-creators/incomeActionCreators";

const IncomeItem = ({incomeId, name, amount, frequency }) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        let income = JSON.parse(window.localStorage.getItem('incomeSources'));
        income.splice(incomeId, 1);
        income.forEach((e, idx) => {
            if (e.id !== idx) {
                e.id = idx
            };
        });
        dispatch(deleteIncome({id: incomeId}))
        window.localStorage.setItem('incomeSources', JSON.stringify(income));
    };

    return (
        <Card className="d-flex flex-row justify-content-around p-3 mb-2">
            <div className="w-100" style={{ textAlign: "center" }}>
                {name}
            </div>
            <div className="w-100" style={{ textAlign: "center" }}>
                ${amount}
            </div>
            <div className="w-100" style={{ textAlign: "center" }}>
                {frequency}
            </div>
            <CloseButton className="position-absolute end-0 me-2" onClick={handleRemove}/>
        </Card>
    );
};

export default IncomeItem;