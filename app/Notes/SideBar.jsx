import Link from "next/link"
import DeleteNoteToggle from "./DeleteNoteToggle"

function SideBar() {
  return (
    <div className="flex items-stretch w-[16rem] border-blue-600 border flex-col">
        <div><h3><Link href={'Notes/AddNote'}>+ Add note</Link></h3></div>
        <DeleteNoteToggle/>
    </div>
  )
}

export default SideBar