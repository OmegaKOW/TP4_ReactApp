

const Livre = ({livre}) => {
    return (
        <div >
            <h3>{livre.documentID} </h3>
            <p>{livre.title}</p>
            <p>{livre.author}</p>
            <p>{livre.editor}</p>
            <p>{livre.exemplaires}</p>
        </div>
    )
}

export default Livre