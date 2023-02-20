import { createNote, getNotes, deleteNote } from "@/lib/prisma/notes";

export default async function handler(req, res) {
    if(req.method === 'GET'){
        try{
            const { notes, error} = await getNotes()
            if(error) throw new Error(error)
            res.status(200).json({ notes })
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }

    if(req.method === 'POST'){
        try {
            const data = req.body
            const { note, error} = await createNote(data)
            if(error) throw new Error(error)
            return res.status(200).json({note})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    if(req.method === 'DELETE'){
        try {
            const data = req.body
            const { note, error} = await deleteNote(data)
            if(error) throw new Error(error)
            return res.status(200).json({note})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
    res.status(425).end(`Method ${req.method} is not allowed`)
  }
  