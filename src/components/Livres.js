import Livre from './Livre'
const Livres = ({livres, onDelete, onToggle}) => {
    return (
    
        <>
            {livres.map((livre) => (
                <Livre key={livre.documentID} 
                livre={livre} 
                onDelete={onDelete}
                onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Livres