import React, { Component } from 'react' ;
import { Container } from 'react-bootstrap';
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <div className= "Container">
                         <a href="/" className="navbar-brand"> Home </a>
                    </div>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Name</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Adress</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}