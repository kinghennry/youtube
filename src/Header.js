import React, {useState} from "react"
import './Header.css'
import {Link} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import avatrImg from "./images/IMG_8721.JPG"
const Header = () => {
    const [input, setInput] = useState("")
    return (
        <div className="header flex ai sb">
            <div className="header__left flex ai">
                <MenuIcon className="menu__icon" />
        <Link to="/">
            <div className="header__logo">
<img  src="data:image/png;base64,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" alt="" />

                    </div>
        </Link>
            </div>
            <div className="header__input flex ai">
                <input type="text" placeholder="Search" id="search" value={input} onChange={(e) => setInput(e.target.value)} />
                <Link to={`/search/${input}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
            
            </div>
            <div className="header__icons flex ai">
            <VideoCallIcon className="header__icon" />
            <AppsIcon  className="header__icon" />
            <NotificationsIcon className="header__icon" />
                <Avatar src={avatrImg} className="avatr_img"/>
            </div>
           
        </div>
    )
}

export default Header
