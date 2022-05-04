import { useEffect, useState } from "react";
import { Button, Row, Col, Form, FormGroup, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createIncome } from "../../state/action-creators/incomeActionCreators";

const NewIncomeForm = ({ open, setOpen, setIncome }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState('Daily');
    const [isDisabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    const handleAmountChange = (e) => {
        // makes sure 'Amount' input box only accepts numbers
        const re = /^[0-9\b.]+$/;
        if (e.target.valuegit === '' || re.test(e.target.value)) {
            setAmount(e.target.value);
        };
    };

    useEffect(() => {
        if (name.length > 0 && amount > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [name.length, amount]);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false || name.length > 40 || amount <= 0) {
            e.preventDefault();
        };

        e.preventDefault();
        const income = {
            id: 0,
            name: name,
            amount: amount,
            frequency: frequency
        };

        const incomeState = {
            id: 0,
            name: name,
            amount: amount,
            frequency: frequency
        };

        setOpen(!open);
        setName('');
        setAmount('');
        setFrequency('Daily');
        if (localStorage.getItem('incomeSources')) {
            const sources = JSON.parse(window.localStorage.getItem('incomeSources'));
            income.id = sources.length;
            incomeState.id = sources.length;
            sources.push(income);
            window.localStorage.setItem('incomeSources', JSON.stringify(sources));
        } else {
            // if incomeSources doesn't exist in localStorage, create it
            const source = [income];
            window.localStorage.setItem('incomeSources', JSON.stringify(source));
        };
        dispatch(createIncome(incomeState));
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
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Bi-weekly">Bi-weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Quarterly">Quarterly</option>
                                <option value="Yearly">Yearly</option>
                            </Form.Select>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="w-auto text-center mt-2">
                    <Button variant="primary" type="submit" disabled={isDisabled} >Add</Button>
                </div>
            </Form>
        </>
    );
};

export default NewIncomeForm;