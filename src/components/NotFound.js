import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container mx-auto">
            <div className="card card-body">
                <h2>404 | Not Found <Link to="/" >Go Home</Link></h2>
            </div>
        </div>
    );
};

export default NotFound;