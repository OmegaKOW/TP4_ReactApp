import {useState, useEffect} from 'react'
import Clients from '../components/Clients'
import AddClient from '../components/AddClient';
import ClientHeader from '../components/ClientHeader';




function ClientPage(){
    const [showAddClient, setShowAddClient] = useState(false)
    const [clients, setClients] = useState([])

    useEffect(() => {
        const getClients = async () => {
         const clientsFromServer = await fetchClients()
         setClients(clientsFromServer)
     }
    getClients()
  }, [])  // Ajout de dependency array pour prevenir le 'useEffect' a chaquer 'render()'
  // C'est comme le lifecycle event 'ComponentDidMount'

  const fetchClients = async () => {
    const res = await fetch('http://localhost:8080/clients')
    const data = await res.json()
    return data
  }

  

  const addClient = async (client) => {
    const res = await fetch('http://localhost:8080/client',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(client)
    })
    const data = await res.json()
    setClients([...clients, data])

    
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  const deleteClient = async (id) => {
    await fetch(`http://localhost:8080/client/${id}`, {
      method: 'DELETE'
    })
    setClients(clients.filter((client) => client.id !== id))
  }
    return (
        <div className='container'>
                <ClientHeader onAdd={() => setShowAddClient(!showAddClient)}
                showAdd={showAddClient}/>
            
            <div>
                <>
                {showAddClient && <AddClient onAdd={addClient} />}
                {clients.length > 0 ?
                    <Clients clients={clients} 
                    onDelete={deleteClient}/>
                : 'No clients'} 
                </>
                
            </div>
        </div>
    
    )
    
}

export default ClientPage