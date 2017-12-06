import React, {Component} from 'react';

class Header extends Component {
    render() {
        return(
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">GOlang REST API</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">&nbsp;</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Add Person</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Update Person</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Delete Person</a>
                            </li>

                        </ul>
                    </div>
                </nav>

            </header>
        );
    }
}

export default Header;