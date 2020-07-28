import React from 'react';
import RecFlixLogo from '../../assets/img/RecFlixLogo.png'
import './Menu.css'
//import Button from '../Button'
import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={RecFlixLogo} alt="RecFlix Logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu;