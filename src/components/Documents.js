import Document from './Document'
const Documents = ({documents, onDelete, onToggle, showEmpruntButton, emprunterLivre}) => {
    return (
    
        <>
            {documents.map((document) => (
                <Document key={document.documentID} 
                document={document} 
                onDelete={onDelete}
                onToggle={onToggle}
                showEmpruntButton={showEmpruntButton}
                emprunterLivre={emprunterLivre}/>
            ))}
        </>
    )
}

export default Documents