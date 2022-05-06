import Document from './Document'
const Documents = ({documents, onDelete, onToggle}) => {
    return (
    
        <>
            {documents.map((document) => (
                <Document key={document.documentID} 
                document={document} 
                onDelete={onDelete}
                onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Documents