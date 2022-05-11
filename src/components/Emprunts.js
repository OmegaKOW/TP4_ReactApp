import Emprunt from "./Emprunt"
const Emprunts = ({emprunts, returnDocument, showReturnButton}) => {
    return (
    
        <>
            {emprunts.map((emprunt) => (
                <Emprunt key={emprunt.id} 
                emprunt={emprunt}
                returnDocument={returnDocument}
                showReturnButton={showReturnButton}/>
            ))}
        </>
    )
}

export default Emprunts