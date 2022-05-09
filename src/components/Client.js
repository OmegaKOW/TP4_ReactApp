import { FaTimes} from 'react-icons/fa'
import { FaCreditCard} from 'react-icons/fa'
import { FaDollarSign} from 'react-icons/fa'
import { FaBook} from 'react-icons/fa'
import { FaShoppingBasket} from 'react-icons/fa'

const Client = ({client, onDelete, getEmprunts, getDettes, payerDettes, emprunterLivre}) => {
    return (
        <div>
            <h3>{client.clientName} <FaTimes 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(client.clientID)}/>
            <FaCreditCard 
            style={{color: 'purple', cursor: 'pointer'}}
            onClick={()=>getEmprunts(client.clientID)}/>
            <FaDollarSign 
            style={{color: 'green', cursor: 'pointer'}}
            onClick={()=>getDettes(client.clientID)}/>
            <FaBook
            style={{color: 'orange', cursor: 'pointer'}}
            onClick={()=>payerDettes(client.clientID)}/>
            <FaShoppingBasket
            style={{color: 'blue', cursor: 'pointer'}}
            onClick={()=>emprunterLivre(client.clientID)}/></h3>
            <p>{client.clientAddress}</p>
        </div>
    )

}



export default Client
