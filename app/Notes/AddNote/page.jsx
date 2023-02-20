'use client'

import { useRef } from "react"

function AddNote() {
    let titleInput = useRef('')
    let textInput = useRef('')
    const postNote = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleInput.current,
                note: textInput.current
            })
        })
    }
    return (
        <div>
            <form>
                <label>Add Title</label>
                <input type={'text'} onChange={(e) => titleInput.current = e.target.value}/>
                <label>Add Note</label>
                <textarea type={'text'} onChange={(e) => textInput.current = e.target.value}/>
                <button type="submit" onClick={(e) => postNote(e)}>Post note</button>
            </form>
        </div>
    )
}

export default AddNote