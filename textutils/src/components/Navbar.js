import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" rel="noreferrer" target="_blank" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="noreferrer" target="_blank" href="https://sdweather.netlify.app">Weather</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="noreferrer" target="_blank" href="https://laughdude.netlify.app/">Jokes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="noreferrer" target="_blank" href="https://facts-generator.netlify.app/">Facts</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Set Title",
}