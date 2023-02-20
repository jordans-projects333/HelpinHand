import prisma from './index'

export async function getNotes(){
    try{
        const notes = await prisma.notes.findMany()
        return {notes}
    } catch (error){
        return error
    }
}

export async function createNote(note){
    try{
        const noteFromDB = await prisma.notes.create({ data: note})
        return {note: noteFromDB}
    } catch (error){
        return error
    }
}

export async function getNoteById(id){
    try{
        const note = await prisma.notes.findUnique({ where: {id}})
        return {note}
    } catch (error){return error}
}

export async function deleteNote(id){
    try{
        const note = await prisma.notes.delete({ where: {id}})
        return note
    } catch (error){return error}
}