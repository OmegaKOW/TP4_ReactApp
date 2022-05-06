import { FaTimes} from 'react-icons/fa'

const Document = ({document, onDelete, onToggle}) => {
    return (
        <div 
             onDoubleClick={() => onToggle(document.id)}>
            <h3>{document.title} <FaTimes 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(document.id)}/></h3>
            <p>{document.title}</p>
            <p>{document.author}</p>
            <p>{document.editor}</p>
            <p>{document.exemplaires}</p>
        </div>
    )
}

export default Document
