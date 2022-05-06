import {useState} from 'react'

const AddLivre = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [editor, setEditor] = useState('')
    const [exemplaires, setExemplaires] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [nbPages, setNbPages] = useState('')
    const [genre, setGenre] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert('Please add a title')
            return
        }

        onAdd({title, author, editor, exemplaires, releaseYear,nbPages,genre})
        setTitle('')
        setAuthor('')
        setEditor('')
        setExemplaires('')
        setReleaseYear('')
        setNbPages('')
        setGenre('')
        
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='title'
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input type='text' placeholder='Author'
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Editor</label>
                <input type='text' placeholder='Editor'
                value={editor} 
                onChange={(e) => setEditor(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Exemplaires</label>
                <input type='text' placeholder='Exemplaires'
                value={exemplaires} 
                onChange={(e) => setExemplaires(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Release Year</label>
                <input type='text' placeholder='Release Year'
                value={releaseYear} 
                onChange={(e) => setReleaseYear(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Genre</label>
                <input type='text' placeholder='Genre'
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>nbPages</label>
                <input type='text' placeholder='nbPages'
                value={nbPages} 
                onChange={(e) => setNbPages(e.target.value)} />
            </div>
            <input type='submit' value='Save Livre' className='btn btn-block'/>
        </form>
    )
}

export default AddLivre