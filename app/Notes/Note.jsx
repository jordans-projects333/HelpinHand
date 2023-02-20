import Link from 'next/link'
import DeleteNote from './DeleteNote'

function Note({title, id}) {
    return (
        <div className="note aspect-square border border-green-500 relative">
            <Link href={`/Notes/${id}`}>
                <div className='h-full w-full flex items-center justify-center'>
                    <h3>{title}</h3>
                </div>
            </Link>
            <DeleteNote id={id}/>
        </div>
    )
}

export default Note