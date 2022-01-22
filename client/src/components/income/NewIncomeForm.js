import { useState } from "react";
import { Button, Row, Col, Form, FormGroup, InputGroup } from "react-bootstrap";


const NewIncomeForm = ({ open, setOpen, setIncome }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState('daily');

    const handleAmountChange = (e) => {
        // makes sure 'Amount' input box only accepts numbers
        const re = /^[0-9\b\.]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setAmount(e.target.value);
        };
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false || name.length > 40 || amount <= 0) {
            e.preventDefault();
            e.stopPropigation();
        };

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
        } else {
            const source = [income];
            window.localStorage.setItem('incomeSources', JSON.stringify(source));
            setIncome(JSON.parse(window.localStorage.getItem('incomeSources')));
        };
    };

    return (
        <>
            <Form className="mt-2" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <FormGroup controlId="formIncomeName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='ex. "Paycheck 1"'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formIncomeAmount">
                            <Form.Label>Amount</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder='ex. "1312"'
                                    inputMode="numeric"
                                    value={amount}
                                    onChange={handleAmountChange}
                                    min={0}
                                    required
                                />
                            </InputGroup>
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