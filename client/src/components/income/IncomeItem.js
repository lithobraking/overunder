import { Card, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome } from "../../state/action-creators/incomeActionCreators";

const IncomeItem = ({incomeId, name, amount, frequency }) => {
    const income = useSelector((state) => state.income.incomeItems)
    const dispatch = useDispatch();
    const handleRemove = () => {
        let income = JSON.parse(window.localStorage.getItem('incomeSources'));
        income.splice(incomeId, 1);
        
        income.forEach((e, idx) => {
            // can be optimised by starting from the index of the element removed instead
            // of the beginning of the array, I'm just being lazy
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