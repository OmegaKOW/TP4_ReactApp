import {useState, useEffect} from 'react'
import Livres from '../components/Livres'
import AddLivre from '../components/AddLivre';
import LivreHeader from '../components/LivreHeader';




function LivrePage(){
    const [showAddLivre, setShowAddLivre] = useState(false)
    const [livres, setLivres] = useState([])

    useEffect(() => {
        const getLivres = async () => {
         const livresFromServer = await fetchLivres()
         setLivres(livresFromServer)
     }
    getLivres()
  }, [])  // Ajout de dependency array pour prevenir le 'useEffect' a chaquer 'render()'
  // C'est comme le lifecycle event 'ComponentDidMount'

  const fetchLivres = async () => {
    const res = await fetch('http://localhost:8080/livres')
    const data = await res.json()
    return data
  }

  

  const addLivre = async (livre) => {
    const res = await fetch('http://localhost:8080/livre',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(livre)
    })
    const data = await res.json()
    setLivres([...livres, data])

    
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  const deleteLivre = async (documentID) => {
    await fetch(`http://localhost:8080/livre/${documentID}`, {
      method: 'DELETE'
    })
    setLivres(livres.filter((livre) => livre.documentID !== documentID))
  }
    return (
        <div className='container'>
                <LivreHeader onAdd={() => setShowAddLivre(!showAddLivre)}
                showAdd={showAddLivre}/>
            
            <div>
                <>
                {showAddLivre && <AddLivre onAdd={addLivre} />}
                {livres.length > 0 ?
                    <Livres livres={livres} 
                    onDelete={deleteLivre}/>
                : 'No livres'} 
                </>
                
            </div>
        </div>
    
    )
    
}

export default LivrePage