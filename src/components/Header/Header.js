import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { IconButton,Avatar } from '@material-ui/core';
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
             <IconButton>
                 <MenuIcon/>
             </IconButton>
             <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=""/>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input type="text" placeholder="Search mail"/>
                <ArrowDropDownIcon className="header__inputCard"/>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
