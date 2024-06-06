import React from 'react'
import './Header.css';

function Header() {

    return (
        <>

            <nav className="navbar" style={{ backgroundColor: "lightgray" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="navbar-logo.png" alt="" width={230} height={50} /></a>
                </div>
            </nav>

        </>
    )
}

export default Header