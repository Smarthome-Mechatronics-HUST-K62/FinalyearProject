import React from 'react'
import './Navigationbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
function Navigationbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">IOT SMARTHOME</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                    <span className="topIconBadge">10</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">1</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Navigationbar
