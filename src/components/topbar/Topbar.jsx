import React from "react";
import "./topbar.css";
import { NotificationsNone,Language,Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
      <div className="topbarLeft">
        <span className="logo">sumitAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <Language /> 
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <Settings />
            </div>
            <img src="https://cdn.pixabay.com/photo/2018/01/09/15/18/ornament-3071827_640.png" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
  );
}
