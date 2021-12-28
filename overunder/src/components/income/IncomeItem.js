import { CloseButton, Col, Row } from "react-bootstrap";

const IncomeItem = ({ name, amount, frequency }) => {
    return (
        <>
            <Row className="align-items-center" >
                <Col>{name}</Col>
                <Col >${amount}</Col>
                <Col >{frequency}</Col>
                <CloseButton />
            </Row>
        </>
    );
};

export default IncomeItem;