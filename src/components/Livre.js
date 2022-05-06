import { FaTimes} from 'react-icons/fa'

const Livre = ({livre, onDelete, onToggle}) => {
    return (
        <div 
             onDoubleClick={() => onToggle(livre.id)}>
            <h3>{livre.title} <FaTimes 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(livre.id)}/></h3>
            <p>{livre.title}</p>
            <p>{livre.author}</p>
            <p>{livre.editor}</p>
            <p>{livre.exemplaires}</p>
        </div>
    )
}

export default Livre