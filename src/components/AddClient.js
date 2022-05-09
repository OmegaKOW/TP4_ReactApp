import {useState} from 'react'

const AddClient = ({onAdd}) => {
    const [clientName, setClientName] = useState('')
    const [clientAddress, setClientAddress] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!clientName) {
            alert('Please add name')
            return
        }

        onAdd({clientName, clientAddress})
        setClientName('')
        setClientAddress('')
    
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Client Name</label>
                <input type='text' placeholder='clientName'
                value={clientName} 
                onChange={(e) => setClientName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Client Address</label>
                <input type='text' placeholder='Address'
                value={clientAddress} 
                onChange={(e) => setClientAddress(e.target.value)} />
            </div>
            <input type='submit' value='Save Client' className='btn btn-block'/>
        </form>
    )
}

export default AddClient
