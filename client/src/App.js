import TotalsDisplay from "./components/TotalsDisplay";
import Cashflow from "./components/Cashflow";
import {Container, Row, Col} from "react-bootstrap";

function App() {
	return (
		<Container className="vh-100 pt-5">
			<Row>
				<Col><Cashflow /></Col>
				<Col><TotalsDisplay /></Col>
			</Row>
		</Container>
	);
}

export default App;
