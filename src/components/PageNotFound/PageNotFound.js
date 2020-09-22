import React from 'react';
import Header from '../Header/Header';

const PageNotFound = () => {
    return (
        <div>
            <Header></Header>
            <div style={{color: 'red', textAlign: 'center'}}>
            <h1>page not found! <br/> error 404!</h1>
        </div>
        </div>
    );
};

export default PageNotFound;