import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button, Label } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid';

import { add } from '../store/taskReducer'

const MAX_SYMBOLS = 20;

function AddItemForm() {
    const dispatch = useDispatch();
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
        if (!error) {
            const newTask = {
              id: uuid(),
              description: input,
              active: true,
            };
        
            dispatch(add(newTask));
            setInput('');
        }
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div className='contained-row'>
                <Input
                    error={error}
                    value={input}
                    placeholder='Add a task...' 
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