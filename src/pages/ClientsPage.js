import {useState, useEffect} from 'react'
import Clients from '../components/Clients'
import AddClient from '../components/AddClient';
import ClientHeader from '../components/ClientHeader';
import Emprunts from '../components/Emprunts';
import Dettes from '../components/Dettes';




function ClientPage(){
    const [showAddClient, setShowAddClient] = useState(false)
    const [clients, setClients] = useState([])
    const [emprunts, setEmprunts] = useState([])
    const [dettes, setDettes] = useState([])

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

  const getMyEmprunts = async (id) => {
    const res = await fetch(`http://localhost:8080/emprunts/${id}`)
    const data = await res.json()
    console.log(data)
    setEmprunts(data)
  }

  const getMyDettes = async (id) => {
    const res = await fetch(`http://localhost:8080/dettes/${id}`)
    const data = await res.json()
    console.log(data)
    setDettes(data)
  }

  const payerDettes = async (id) => {
    await fetch(`http://localhost:8080/payer/${id}`)
    getMyDettes(id)
  }

  const emprunterUnLivre = async (id) => {
    let clientId = id;
    var bookId = window.prompt("Enter the book's ID")
    const res = await fetch(`http://localhost:8080/emprunter/${clientId}/${bookId}`)
    console.log(res)
  }


    return (
        <div className='container'>
                <ClientHeader onAdd={() => setShowAddClient(!showAddClient)}
                showAdd={showAddClient}/>
            
            <div>
                <>
                {showAddClient && <AddClient onAdd={addClient}/>}
                {clients.length > 0 ?
                    <Clients clients={clients} 
                    onDelete={deleteClient}
                    getEmprunts={getMyEmprunts}
                    getDettes={getMyDettes}
                    payerDettes={payerDettes}
                    emprunterLivre={emprunterUnLivre} 
                    />
                : 'No clients'} 
                </>

                <>
                  <h3>Emprunts</h3>
                  { emprunts.length > 0 ?
                    <Emprunts emprunts={emprunts}/> :
                    'empty'
                  }
                  
                </>
                <>
                  <h3>dettes</h3>
                  { dettes.length > 0 ?
                    <Dettes dettes={dettes}/> :
                    'empty'
                  }
                  
                </>


            </div>
        </div>
    
    )
    
}

export default ClientPage