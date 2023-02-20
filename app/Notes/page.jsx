import { getNotes } from "@/lib/prisma/notes"
import Note from "./Note"

async function Notes() {
    const {notes} = await getNotes()
    return (
      <div className="grid gridtest overflow-y-auto w-full relative">
        {notes.map(note => (
          <Note title={note.title} key={note.id} id={note.id}/>
        ))}
        <div className="absolute top-0 h-8 w-[30%] bg-red-200"></div>
      </div>
    )
  }
  
  export default Notes