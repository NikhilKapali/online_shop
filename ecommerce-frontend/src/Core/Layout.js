import React from 'react'
import Menu from './Menu';

function Layout({ title = 'Title', description = 'Description', className, children }) {
    return (
        <>
            <Menu />

            <div className="jumbotron">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>
                {children}
            </div>
        </>
    )
}

export default Layout
