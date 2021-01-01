import React from 'react'

import './SidebarOptions.css'
const SidebarOptions = (props) => {
    const { title, Icon, number,selected } = props

    return (
        <div className={`sidebar__options ${selected && "sidebar__options__active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptions
