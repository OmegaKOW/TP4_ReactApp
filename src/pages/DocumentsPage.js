import {useState, useEffect} from 'react'
import Documents from '../components/Documents'
import AddLivre from '../components/AddLivre';
import DocumentHeader from '../components/DocumentHeader';




function DocumentPage(){
    const [showAddDocument, setShowAddDocument] = useState(false)
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        const getDocuments = async () => {
         const documentsFromServer = await fetchDocuments()
         setDocuments(documentsFromServer)
     }
    getDocuments()
  }, [])  // Ajout de dependency array pour prevenir le 'useEffect' a chaquer 'render()'
  // C'est comme le lifecycle event 'ComponentDidMount'

  const fetchDocuments = async () => {
    const res = await fetch('http://localhost:8080/documents')
    const data = await res.json()
    return data
  }

  

  const addDocument = async (document) => {
    const res = await fetch('http://localhost:8080/document',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(document)
    })
    const data = await res.json()
    setDocuments([...documents, data])

    
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  const deleteDocument = async (id) => {
    await fetch(`http://localhost:8080/document/${id}`, {
      method: 'DELETE'
    })
    setDocuments(documents.filter((document) => document.id !== id))
  }
    return (
        <div className='container'>
                <DocumentHeader onAdd={() => setShowAddDocument(!showAddDocument)}
                showAdd={showAddDocument}/>
            
            <div>
                <>
                {showAddDocument && <AddLivre onAdd={addDocument} />}
                {documents.length > 0 ?
                    <Documents documents={documents} 
                    onDelete={deleteDocument}/>
                : 'No documents'} 
                </>
                
            </div>
        </div>
    
    )
    
}

export default DocumentPage