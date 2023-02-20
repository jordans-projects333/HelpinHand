'use client'
import { usePathname } from 'next/navigation';

const NavItems = ({name, link}) => {
    const pathname = usePathname();
    return (
        <div className={`${pathname === link && 'bg-blue-400'}`}>{name}</div>
    )
}

export default NavItems