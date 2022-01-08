import { Card, CloseButton, Col, Row } from "react-bootstrap";

const IncomeItem = ({ name, amount, frequency }) => {
    return (
        <Card className="d-flex flex-row justify-content-around p-3 mb-2">
            <div className="w-100">
                {name}
            </div>
            <div className="w-100">
                {amount}
            </div>
            <div className="w-100">
                {frequency}
            </div>
        </Card>
    );
};

export default IncomeItem;