import { Form, Input, Button } from 'semantic-ui-react'

function AddItemForm({ onSubmit }) {
    return (
        <Form 
            onSubmit={onSubmit}
        >
            <Input placeholder='Add an action...' />
            <Button type='submit'>Add</Button>
        </Form>
    )
};

export default AddItemForm;