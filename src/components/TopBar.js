import React from 'react';
import "../assets/css/app.css";
import Walke from "../assets/images/jordan-walke.png";

function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul classNameName="navbar-nav ml-auto">


                <li classNameNameName="nav-item dropdown no-arrow mx-1">
                    <a classNameName="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i classNameName="fas fa-bell fa-fw"></i>

                        <span classNameName="badge badge-danger badge-counter">3+</span>
                    </a>
                </li>


                <li classNameName="nav-item dropdown no-arrow mx-1">
                    <a classNameName="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i classNameName="fas fa-envelope fa-fw"></i>

                        <span classNameName="badge badge-danger badge-counter">7</span>
                    </a>
                </li>

                <div classNameName="topbar-divider d-none d-sm-block"></div>


                <li classNameName="nav-item dropdown no-arrow">
                    <a classNameName="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span classNameName="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
                        <img classNameName="img-profile rounded-circle" src={Walke} alt="Jordan Walke - Creador de React" width="60" />
                    </a>
                </li>

            </ul>

        </nav>

    )
}

export default TopBar;