const Media = ({media}) => {
    return (
        <div >
            <h3>{media.documentID}</h3>
            <p>{media.title}</p>
            <p>{media.author}</p>
            <p>{media.editor}</p>
            <p>{media.exemplaires}</p>
        </div>
    )
}
export default Media