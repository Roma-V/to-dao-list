import { useState } from 'react'
import { Input, Button, Label } from 'semantic-ui-react'

const MAX_SYMBOLS = 20;

function AddItemForm({ onSubmit }) {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    function validate(event, data) {
        setInput(data.value);

        if (input.length <= MAX_SYMBOLS) {
            setError(false);
        } else {
            setError(true);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!error) onSubmit(input);
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div className='contained-row'>
                <Input
                    error={error}
                    value={input}
                    placeholder='Add an action...' 
                    onChange={validate}
                />
                <Button
                    active={!error}
                    primary
                    type='submit'
                >Add</Button>
            </div>
            <div className='contained-row'>
                {error &&  <Label pointing>Please use {MAX_SYMBOLS} symbols max</Label>}
            </div>
        </form>
    )
};

export default AddItemForm;