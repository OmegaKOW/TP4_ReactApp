import Media from './Media'
const Medias = ({medias, onDelete}) => {
    return (
    
        <>
            {medias.map((media) => (
                <Media key={media.documentID} 
                media={media} 
                onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Medias