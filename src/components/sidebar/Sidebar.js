import React from 'react'
import './Sidebar.css'
import SidebarList from './SidebarList'

function Sidebar() {

    const lists = [{
        title: 'dashboard',
        list: [{
            id: 0,
            item: 'Dashboard',
            arrow: false,
            font: 'medium'
        },
        {
            id: 1,
            item: 'Record',
            arrow: false,
            font: 'medium'
        },
        {
            id: 2,
            item: 'Report',
            arrow: true,
            font: 'medium'
        },
        {
            id: 3,
            item: 'Analyse',
            arrow: false,
            font: 'medium'
        },
        {
            id: 4,
            item: 'Learn',
            arrow: false,
            font: 'medium'
        },]
    },
    {
        title: 'pages',
        list: [{
            id: 0,
            item: 'help center',
            arrow: true,
            font: 'semibold'
        },
        {
            id: 1,
            item: 'file manager',
            arrow: true,
            font: 'semibold'
        }]
    }
    ]

    return (
        <aside className='sidebar' >
            <img draggable='false' src='./assets/images/sidebarLogo.svg' alt='side__logo' />
            {
                lists?.map((data, i) => (
                    <SidebarList title={data?.title} list={data?.list} key={i} />
                ))
            }
        </aside >
    )
}

export default Sidebar