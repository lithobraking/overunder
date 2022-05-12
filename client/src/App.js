import TotalsDisplay from "./components/TotalsDisplay";
import Cashflow from "./components/Cashflow";
import { Container, Row, Col, Navbar } from "react-bootstrap";

function App() {
	return (
		<>
			<Navbar>
				<Container className="d-flex justify-content-center">
					<Navbar.Brand className="me-0"><h1><strong>OverUnder</strong></h1></Navbar.Brand>
				</Container>
			</Navbar>
			<Container className="vh-100 pt-5">
				<Row>
					<Col><Cashflow /></Col>
					<Col><TotalsDisplay /></Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
