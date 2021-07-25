import React from 'react';
import './Admin.css';
import VerticalNav from '../VerticalNav/VerticalNav';
import { useParams } from 'react-router-dom';
import AddFruit from '../AddFruit/AddFruit';
import ManageFruit from '../ManageFruit/ManageFruit';
import EditFruit from '../EditFruit/EditFruit';

const Admin = () => {
    let { action } = useParams();
    let pageContent;
    if (action === 'add') {
        pageContent = <AddFruit />
    } else if (action === "manage") {
        pageContent = <ManageFruit />
    } else if (action === "edit") {
        pageContent = <EditFruit />
    } else {
        pageContent = <ManageFruit />
    }

    return (
        <>
            <VerticalNav></VerticalNav>
            <div className="page-content" id="content">
                {pageContent}
            </div>
        </>
    );
};

export default Admin;