import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

function LandingPage() {
    const { type } = useParams(); // will be either 'student' or 'tutor'

    return (
        <div>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Section</h2>
            
            <Link to={`/${type}Signup`} style={{marginRight: '16px' }}>
                <Button variant="outline-warning" color="primary">
                    New {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
            </Link>
            <Link to={`/${type}Login`} >
                <Button variant="outline-warning" color="secondary">
                    Returning {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
            </Link>
        </div>
    );
}

export default LandingPage;
