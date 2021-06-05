import { List, Segment, Button } from 'semantic-ui-react'

function ListItem({ description, active, onToggleActive, onDelete }) {
    return (
        <List.Item as='li' >
            <Segment padded>
                <List.Content onClick={onToggleActive}>
                    <List.Icon name={active ? 'circle outline' : 'check circle outline'} />
                    {description}
                </List.Content>
                <Button color='red' onClick={onDelete} >Delete</Button>
            </Segment>
        </List.Item>
    )
};

export default ListItem;