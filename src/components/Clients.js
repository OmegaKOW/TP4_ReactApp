import Client from './Client'
const Clients = ({clients, onDelete, getEmprunts, getDettes, payerDettes, emprunterLivre}) => {
    return (
    
        <>
            {clients.map((client) => (
                <Client key={client.clientID} 
                client={client} 
                onDelete={onDelete}
                getEmprunts={getEmprunts}
                getDettes={getDettes}
                payerDettes={payerDettes}
                emprunterLivre={emprunterLivre}/>
            ))}
        </>
    )
}

export default Clients
