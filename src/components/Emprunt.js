

const Emprunt = ({emprunt}) => {
    return (
        <div >
            <h3>{emprunt.id}</h3>
            <p>{emprunt.doc.title}</p>
        </div>
    )
}
export default Emprunt