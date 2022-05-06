import { FaTimes} from 'react-icons/fa'

const Document = ({document, onDelete, onToggle}) => {
    return (
        <div 
             >
            <h3>{document.documentID} <FaTimes 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(document.documentID)}/></h3>
            <p>{document.title}</p>
            <p>{document.author}</p>
            <p>{document.editor}</p>
            <p>{document.exemplaires}</p>
        </div>
    )
}

export default Document
