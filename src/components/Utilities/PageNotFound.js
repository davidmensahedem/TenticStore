import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return ( <>
        <main>
            <h2>Page Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to="/">Go back to the homepage</Link>
            </p>
        </main>
    </> );
}
 
export default PageNotFound;