import {useState, useEffect} from 'react'
import Medias from '../components/Medias'
import AddMedia from '../components/AddMedia';
import MediaHeader from '../components/MediaHeader';




function MediasPage(){
    const [showAddMedia, setShowAddMedia] = useState(false)
    const [medias, setMedias] = useState([])

    useEffect(() => {
        const getMedias = async () => {
         const mediasFromServer = await fetchMedias()
         setMedias(mediasFromServer)
     }
    getMedias()
  }, [])  // Ajout de dependency array pour prevenir le 'useEffect' a chaquer 'render()'
  // C'est comme le lifecycle event 'ComponentDidMount'

  const fetchMedias = async () => {
    const res = await fetch('http://localhost:8080/medias')
    const data = await res.json()
    return data
  }

  

  const addMedia = async (media) => {
    const res = await fetch('http://localhost:8080/media',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(media)
    })
    const data = await res.json()
    setMedias([...medias, data])

    
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  const deleteMedia = async (documentID) => {
    await fetch(`http://localhost:8080/media/${documentID}`, {
      method: 'DELETE'
    })
    setMedias(medias.filter((media) => media.documentID !== documentID))
  }
    return (
        <div className='container'>
                <MediaHeader onAdd={() => setShowAddMedia(!showAddMedia)}
                showAdd={showAddMedia}/>
            
            <div>
                <>
                {showAddMedia && <AddMedia onAdd={addMedia} />}
                {medias.length > 0 ?
                    <Medias medias={medias} 
                    onDelete={deleteMedia}/>
                : 'No medias'} 
                </>
                
            </div>
        </div>
    
    )
    
}

export default MediasPage