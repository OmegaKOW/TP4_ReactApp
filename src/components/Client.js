import { FaTimes} from 'react-icons/fa'

const Client = ({client, onDelete, onToggle}) => {
    return (
        <div 
             onDoubleClick={() => onToggle(client.id)}>
            <h3>{client.clientName} <FaTimes 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(client.id)}/></h3>
            <p>{client.clientAddress}</p>
        </div>
    )
}

export default Client
