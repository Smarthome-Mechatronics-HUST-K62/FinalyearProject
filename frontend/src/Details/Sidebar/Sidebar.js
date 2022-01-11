import React from 'react'
import './Sidebar.css'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    ChatBubbleOutline,
} from "@mui/icons-material"
import {Link} from "react-router-dom"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to="/app" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Environment Statistics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Graphs
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/app/signin" className="link">
                            <li className="sidebarListItem active">
                                <PermIdentity className="sidebarIcon" />
                                Control
                            </li>
                        </Link>
                        <Link to="/app/signup" className="link">
                            <li className="sidebarListItem active">
                            <Storefront className="sidebarIcon" />
                                Sensors / Devices
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Projects 
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Auto Settings 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar