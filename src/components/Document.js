import { FaShoppingBasket} from 'react-icons/fa'
const Document = ({document, showEmpruntButton, emprunterLivre}) => {
    return (
        <div>
            <h3>{document.documentID} {showEmpruntButton ? <FaShoppingBasket
            style={{color: 'blue', cursor: 'pointer'}}
            onClick={()=>emprunterLivre(document.documentID)}/> : null}</h3>
            <p>{document.title}</p>
            <p>{document.author}</p>
            <p>{document.editor}</p>
            <p>{document.exemplaires}</p>
            
        </div>
    )
}

export default Document
