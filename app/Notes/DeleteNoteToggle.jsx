'use client'
import { useStore } from "@/Zustand/store"

function DeleteNoteToggle() {
    const deleteToggleClick = () => {
        useStore.setState((state) => ({
            deleteToggle: state.deleteToggle = !state.deleteToggle
        }))
    }
    return (
        <button onClick={() => deleteToggleClick()}>Delete Note</button>
    )
}

export default DeleteNoteToggle