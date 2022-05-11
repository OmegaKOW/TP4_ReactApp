import { FaTimes} from 'react-icons/fa'
import { FaCreditCard} from 'react-icons/fa'
import { FaDollarSign} from 'react-icons/fa'
import { FaBook} from 'react-icons/fa'
import { FaShoppingBasket} from 'react-icons/fa'
import { FaArrowCircleUp} from 'react-icons/fa'

const Client = ({client, onDelete, getEmprunts, getDettes, payerDettes, emprunterLivre, retournerLivre}) => {
    return (
        <div>
            <h3>{client.clientName}<FaTimes 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(client.clientID)}/></h3>
            <p> 
            Vos Emprunts 
            <FaCreditCard 
            style={{color: 'purple', cursor: 'pointer'}}
            onClick={()=>getEmprunts(client.clientID)}/>
            </p>
            <p> 
            Vos Dettes    
            <FaDollarSign 
            style={{color: 'green', cursor: 'pointer'}}
            onClick={()=>getDettes(client.clientID)}/>
            </p>
            <p>
                Payer vos dettes 
            <FaBook
            style={{color: 'orange', cursor: 'pointer'}}
            onClick={()=>payerDettes(client.clientID)}/>
            </p>
            <p> 
                Faire un emprunt
            <FaShoppingBasket
            style={{color: 'blue', cursor: 'pointer'}}
            onClick={()=>emprunterLivre(client.clientID)}></FaShoppingBasket>
            </p>
            
            <p> 
                Remettre un livre
            <FaArrowCircleUp
            style={{color: 'black', cursor: 'pointer'}}
            onClick={()=>retournerLivre(client.clientID)}></FaArrowCircleUp>
            </p>
            <p>Votre adresse : {client.clientAddress}</p>
        </div>
    )

}



export default Client
