'use client'
import { useStore } from "@/Zustand/store"

const DeleteNote = ({id}) => {
    let { deleteToggle } = useStore()
    const deleteNoteClick = async (e) => {
            const response = await fetch('/api/users/', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(id)
            })
            if(response.status === 200){
                e.target.closest('.note').remove()
            }else{
                const data = response.json()
                console.log(data)
            }
        
    }
    return (
        <div className={`absolute top-0 w-full h-full bg-purple-600 cursor-pointer ${!deleteToggle && 'opacity-0 pointer-events-none'}`}
            onClick={(e) => deleteNoteClick(e)}>DeleteNote</div>
    )
}

export default DeleteNote