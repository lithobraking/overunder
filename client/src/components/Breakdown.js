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
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{textAlign: "center"}}><h5>Quarterly</h5></div>
                    <div className="w-100" style={{textAlign: "center"}}>12948</div>
                    <div className="w-100" style={{textAlign: "center"}}>89237</div>
                    <div className="w-100" style={{textAlign: "center"}}>23821</div>
                </Card>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{textAlign: "center"}}><h5>Monthly</h5></div>
                    <div className="w-100" style={{textAlign: "center"}}>12948</div>
                    <div className="w-100" style={{textAlign: "center"}}>89237</div>
                    <div className="w-100" style={{textAlign: "center"}}>23821</div>
                </Card>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{textAlign: "center"}}><h5>Weekly</h5></div>
                    <div className="w-100" style={{textAlign: "center"}}>12948</div>
                    <div className="w-100" style={{textAlign: "center"}}>89237</div>
                    <div className="w-100" style={{textAlign: "center"}}>23821</div>
                </Card>
                <Card className="d-flex flex-row justify-content-around p-1 mb-2">
                    <div className="w-100" style={{textAlign: "center"}}><h5>Daily</h5></div>
                    <div className="w-100" style={{textAlign: "center"}}>12948</div>
                    <div className="w-100" style={{textAlign: "center"}}>89237</div>
                    <div className="w-100" style={{textAlign: "center"}}>23821</div>
                </Card>
            </Container>
        </Card>
    );
};

export default Breakdown;