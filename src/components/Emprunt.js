import { FaArrowCircleUp} from 'react-icons/fa'

const Emprunt = ({emprunt, returnDocument, showReturnButton}) => {
    return (
        <div >
            <h3>{emprunt.id}</h3>
            <p>{emprunt.doc.title}
                {showReturnButton ?
                <FaArrowCircleUp onClick={()=>returnDocument(emprunt.doc.documentID)} style={{color: 'green', cursor: 'pointer'}}></FaArrowCircleUp>: null}
            </p>
        </div>
    )
}
export default Emprunt



