import React from 'react';
import Header from '../components/Header';

const Layout = ({history, children}) => {

    return(
        <div className="layout">
            <Header history={history}/>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Layout;