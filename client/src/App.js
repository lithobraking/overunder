import Totals from "./components/Totals";
import Cashflow from "./components/Cashflow";
import {Container, Row, Col} from "react-bootstrap";

function App() {
	return (
		<Container className="vh-100 pt-5">
			<Row>
				<Col><Cashflow /></Col>
				<Col><Totals /></Col>
			</Row>
		</Container>

	);
}

export default App;
