import React from 'react';
import { Link } from 'react-router-dom'
import RecFlixLogo from '../../assets/img/RecFlixLogo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={RecFlixLogo} alt="RecFlix Logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;