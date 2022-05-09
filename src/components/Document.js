
const Document = ({document}) => {
    return (
        <div 
             >
            <h3>{document.documentID}</h3>
            <p>{document.title}</p>
            <p>{document.author}</p>
            <p>{document.editor}</p>
            <p>{document.exemplaires}</p>
        </div>
    )
}

export default Document
