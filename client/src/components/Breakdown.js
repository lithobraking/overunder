import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";

const Breakdown = () => {


    return (
        <Card className="mb-4 bg-primary border-light shadow-soft">
            <Container>
                <div className="mb-3 text-center">
                    <h2><b>Details</b></h2>
                </div>
                <div className="d-flex flex-row justify-content-around px-3">
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Frequency</b></h5></div>
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Income</b></h5></div>
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Expenses</b></h5></div>
                    <div style={{ textAlign: "center" }} className="w-100"><h5><b>Net Total</b></h5></div>
                </div>
            </Container>
        </Card>
    );
};

export default Breakdown;