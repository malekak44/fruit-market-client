import React from 'react';
import './VerticalNav.css';
import logo from '../../icons/logo.png';
import gridIcon from '../../icons/grid.png';
import plusIcon from '../../icons/plus.png';
import editIcon from '../../icons/edit.png';
import { Link } from 'react-router-dom';

const VerticalNav = () => {
    return (
        <div className="vertical-nav" id="sidebar">
            <div className="pt-4 px-3 mb-4">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <div className="media d-flex align-items-center"><img src={logo} alt="logo" width="65" className="mr-3" />
                        <div className="media-body">
                            <h3 style={{ fontFamily: "Bebas Neue" }} className="m-0">Fruits Market</h3>
                        </div>
                    </div>
                </Link>
            </div>

            <ul className="nav flex-column mb-0">
                <li className="nav-item">
                    <Link to="/admin/manage" style={{ textDecoration: "none"}}>
                        <p className="link">
                            <img src={gridIcon} alt="edit" /> <span>Manage Fruits</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/add" style={{ textDecoration: "none"}}>
                        <p className="link">
                            <img src={plusIcon} alt="edit" /> <span>Add Fruit</span>
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/edit" style={{ textDecoration: "none" }}>
                        <p className="link">
                            <img src={editIcon} alt="edit" /> <span>Edit Fruit</span>
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default VerticalNav;