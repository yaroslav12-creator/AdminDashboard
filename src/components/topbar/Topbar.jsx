import React from 'react';
import "./topbar.css";
import {Language, NotificationsNone, Settings} from '@material-ui/icons';
import { Link } from '@material-ui/core';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">AdminPanel</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img 
                        src="https://images.unsplash.com/photo-1627150413993-4f29101ff61a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                        alt="" 
                        className="topAvatar" 
                    />
                </div>
            </div>
        </div>
    );
}