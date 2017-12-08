import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">GO REST API</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">&nbsp;</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/get-people">Get People</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/add-person">Add Person</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/update-person">Update Person</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/delete-person">Delete Person</a>
                            </li>

                        </ul>
                    </div>
                </nav>

            </header>
        );
    }
}

export default Header;