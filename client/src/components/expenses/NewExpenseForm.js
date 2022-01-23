import { useEffect, useState } from "react";
import { Button, Row, Col, Form, FormGroup, InputGroup } from "react-bootstrap";

const NewExpenseForm = ({ open, setOpen, setExpense }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [frequency, setFrequency] = useState('Daily');
    const [isDisabled, setDisabled] = useState(true);

    const handleCostChange = (e) => {
        const re = /^[0-9\b.]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setCost(e.target.value);
        };
    };

    useEffect(() => {
        if (name.length > 0 && cost > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [name.length, cost]);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false || name.length > 40 || cost <= 0) {
            e.preventDefault();
        };

        e.preventDefault();
        const expense = {
            id: 0,
            name: name,
            cost: cost,
            frequency: frequency
        };

        setOpen(!open);
        setName('');
        setCost('');
        setFrequency('Daily');
        if (localStorage.getItem('expenses')) {
            const expenses = JSON.parse(window.localStorage.getItem('expenses'));
            expense.id = expenses.length;
            expenses.push(expense);
            window.localStorage.setItem('expenses', JSON.stringify(expenses));
            setExpense(JSON.parse(window.localStorage.getItem('expenses')));
        } else {
            const newExpense = [expense];
            window.localStorage.setItem('expenses', JSON.stringify(newExpense));
            setExpense(JSON.parse(window.localStorage.getItem('expenses')));
        };
    };

    return (
        <>
            <Form className="mt-2" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <FormGroup controlId="formExpenseName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='ex. "Rent"'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formExpenseAmount">
                            <Form.Label>Cost</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder='ex. "1817"'
                                    inputMode="numeric"
                                    value={cost}
                                    onChange={handleCostChange}
                                    min={0}
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="formExpenseFrequency">
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

export default NewExpenseForm;