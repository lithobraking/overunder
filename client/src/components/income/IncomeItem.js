import { Card } from "react-bootstrap";

const IncomeItem = ({ name, amount, frequency }) => {
    return (
        <Card className="d-flex flex-row justify-content-around p-3 mb-2">
            <div className="w-100" style={{textAlign: "center"}}>
                {name}
            </div>
            <div className="w-100" style={{textAlign: "center"}}>
                {amount}
            </div>
            <div className="w-100" style={{textAlign: "center"}}>
                {frequency}
            </div>
        </Card>
    );
};

export default IncomeItem;