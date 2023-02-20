import SideBar from './SideBar'

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-1 flex-nowrap">
        {/* <SideBar/> */}
        {children}
    </div>
  )
}