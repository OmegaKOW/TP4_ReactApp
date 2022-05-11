import Client from './Client'
const Clients = ({clients, onDelete, getEmprunts, getDettes, payerDettes, emprunterLivre, retournerLivre}) => {
    return (
    
        <>
            {clients.map((client) => (
                <Client key={client.clientID} 
                client={client} 
                onDelete={onDelete}
                getEmprunts={getEmprunts}
                getDettes={getDettes}
                payerDettes={payerDettes}
                emprunterLivre={emprunterLivre}
                retournerLivre={retournerLivre}/>
            ))}
        </>
    )
}

export default Clients
