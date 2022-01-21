import { useState } from "react";
import { Button, Row, Col, Form, FormGroup } from "react-bootstrap";


const NewIncomeForm = ({ open, setOpen, setIncome }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [frequency, setFrequency] = useState('daily');

    const handleSubmit = (e) => {
        e.preventDefault();
        const income = {
            id: 0,
            name: name,
            amount: amount,
            frequency: frequency
        };

        setOpen(!open);
        setName('');
        setAmount(0);
        setFrequency('daily');
        if (localStorage.getItem('incomeSources')) {
            const sources = JSON.parse(window.localStorage.getItem('incomeSources'));
            income.id = sources.length;
            sources.push(income);
            window.localStorage.setItem('incomeSources', JSON.stringify(sources));
            setIncome(JSON.parse(window.localStorage.getItem('incomeSources')));

            console.log("income updated successfully: " + window.localStorage.getItem('incomeSources'));
        } else {
            const source = [income];
            window.localStorage.setItem('incomeSources', JSON.stringify(source));
            setIncome(JSON.parse(window.localStorage.getItem('incomeSources')));
            
            console.log("added new income successfully: " + window.localStorage.getItem('incomeSources'));
        };
    };

    return (
        <>
            <Form className="mt-2" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <FormGroup controlId="formIncomeName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formIncomeAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formIncomeFrequency">
                            <Form.Label>Frequency</Form.Label>
                            <Form.Select aria-label="select occurrence frequency"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)} >
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="biweekly">Bi-weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="yearly">Yearly</option>
                            </Form.Select>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="w-auto text-center mt-2">
                    <Button variant="primary" type="submit">Add</Button>
                </div>
            </Form>
        </>
    );
};

export default NewIncomeForm;