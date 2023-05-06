import React from 'react'
import './SidebarList.css'

function SidebarList({ title, list }) {
    return (
        <div className='sidebarList'>
            <h3 className='sidebarList__title'>{title}</h3>
            <ul className='sidebarList__list'>
                {list?.map((data, i) => (
                    <li key={i} className={`${data?.font === "medium" ? 'font__medium' : 'font__semibold'}`}>
                        {data?.item}
                        {data?.arrow ?
                            <img draggable='false' src='./assets/icons/downArrow.svg' alt='down__arrow' />
                            :
                            <></>}
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default SidebarList