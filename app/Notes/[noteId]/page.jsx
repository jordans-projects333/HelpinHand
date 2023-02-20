import { getNoteById } from "@/lib/prisma/notes"

async function InsideNote({params}) {
    const {note} = await getNoteById(params.noteId)
    return (
        <div>{note.note}</div>
    )
}

export default InsideNote