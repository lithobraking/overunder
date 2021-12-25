import { Col, Container, Row } from "react-bootstrap";

const IncomeItem = ({ name, amount, frequency }) => {
    return (
        <>
            <Container>
                <Row >
                    <Col>{name}</Col>
                    <Col className="min-w-25">${amount}</Col>
                    <Col className="min-w-25">{frequency}</Col>
                </Row>
            </Container>
        </>
    );
};

export default IncomeItem;