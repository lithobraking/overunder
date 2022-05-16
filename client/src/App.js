import TotalsDisplay from "./components/TotalsDisplay";
import Cashflow from "./components/Cashflow";
import { Container, Row, Col, Navbar, Dropdown, Collapse } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMaritalStatus, updateIgnoreTax, updateDarkMode } from "./state/action-creators/preferencesActionCreator";

function App() {
	const [maritalStatusOpen, showMaritalStatusOpen] = useState(false);
	const [shadow, displayShadow] = useState(false);
	const maritalStatus = useSelector((state) => state.preferences.maritalStatus);
	const isIgnoringTax = useSelector((state) => state.preferences.isIgnoringTax);
	const dispatch = useDispatch();

	// note: this isn't an ideal way to do this, but it's a quick and dirty way to deal the marital status dropdown
	// I don't feel like refactoring this to do it properly, so this is how I'm doing it for now
	const [singleActive, setSingleActive] = useState((maritalStatus === "single"));
	const [marriedJointActive, setMarriedJointActive] = useState((maritalStatus === "marriedJoint"));
	const [marriedSeparateActive, setMarriedSeparateActive] = useState((maritalStatus === "marriedSeparate"));

	const handleMaritalStatusSelect = () => {
		showMaritalStatusOpen(!maritalStatusOpen);
		displayShadow(!shadow);
	};

	const handleMaritalStatusChange = (e) => {
		const maritalStatus = {
			"Single": "single",
			"Married - Joint": "marriedJoint",
			"Married - Separate": "marriedSeparate"
		};
		window.localStorage.setItem("maritalStatus", JSON.stringify(maritalStatus[e.target.innerText]));
		dispatch(updateMaritalStatus(maritalStatus[e.target.innerText]));

		switch (e.target.innerText) {
			case "Single":
				setSingleActive(true);
				setMarriedJointActive(false);
				setMarriedSeparateActive(false);
				break;
			case "Married - Joint":
				setSingleActive(false);
				setMarriedJointActive(true);
				setMarriedSeparateActive(false);
				break;
			case "Married - Separate":
				setSingleActive(false);
				setMarriedJointActive(false);
				setMarriedSeparateActive(true);
				break;
			default:
				break;
		};
	};

	const handleIgnoreTaxChange = (e) => {
		window.localStorage.setItem("ignoreTax", JSON.stringify(e.target.checked));
		dispatch(updateIgnoreTax(e.target.checked));
	};

	return (
		<>
			<Navbar>
				<Container className="d-flex justify-content-center">
					<Navbar.Brand className="me-0"><h1 className="mb-0"><strong>OverUnder</strong></h1></Navbar.Brand>
				</Container>
				<div className="position-absolute" style={{
					right: "20px",
				}}>
					<Dropdown navbar autoClose="outside">
						<Dropdown.Toggle>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
								<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
								<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
							</svg>
						</Dropdown.Toggle>
						<Dropdown.Menu align="end">
							<Dropdown.Header>Preferences</Dropdown.Header>
							<Dropdown.Item className={shadow ? "shadow-sm" : null} onClick={() => handleMaritalStatusSelect()} style={{ zIndex: 1040 }} >
								Marital Status
							</Dropdown.Item>
							<Collapse in={maritalStatusOpen} >
								<div>
									<Dropdown.Item
										className="ps-4"
										onClick={(e) => handleMaritalStatusChange(e)}
										style={{ backgroundColor: singleActive ? "#93e9be" : "#ECF0F3" }}
									>
										Single
									</Dropdown.Item>
									<Dropdown.Item
										className="ps-4"
										onClick={(e) => handleMaritalStatusChange(e)}
										style={{ backgroundColor: marriedJointActive ? "#93e9be" : "#ECF0F3" }}
									>
										Married - Joint
									</Dropdown.Item>
									<Dropdown.Item
										className="ps-4"
										onClick={(e) => handleMaritalStatusChange(e)}
										style={{ backgroundColor: marriedSeparateActive ? "#93e9be" : "#ECF0F3" }}
									>
										Married - Separate
									</Dropdown.Item>
								</div>
							</Collapse>
							<Dropdown.Divider />
							<Dropdown.Item as="div">
								<div className="custom-control custom-switch">
									<input type="checkbox" className="custom-control-input" id="taxSwitch" checked={isIgnoringTax} onChange={(e) => handleIgnoreTaxChange(e)} />
									<label className="custom-control-label" htmlFor="taxSwitch">Disable Tax</label>
								</div>
							</Dropdown.Item>
							{/* <Dropdown.Item as="div">
								<div className="custom-control custom-switch">
									<input type="checkbox" className="custom-control-input" disabled id="darkMode" />
									<label className="custom-control-label" htmlFor="darkMode">Dark Mode</label>
								</div>
							</Dropdown.Item> */}
						</Dropdown.Menu>
					</Dropdown>
				</div>
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
