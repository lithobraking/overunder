import { Button, Form, FormGroup } from "react-bootstrap";


const NewIncomeForm = () => {
    return (
        <>
            <Form>
                <FormGroup controlId="formIncomeName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control />
                </FormGroup>
                <FormGroup controlId="formIncomeAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control />
                </FormGroup>
                <FormGroup controlId="formIncomeFrequency">
                    <Form.Label>Frequency</Form.Label>
                    <Form.Select aria-label="select occurrence frequency">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                    </Form.Select>
                </FormGroup>
                <Button variant="primary" type="submit">Add</Button>
            </Form>
        </>
    );
};

export default NewIncomeForm;