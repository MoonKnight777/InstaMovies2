import React from 'react';
import {Link} from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import "./Header.scss"
import logo from"./letter-i.png"
export const Header = () => {
    return (
        <nav className='header'>
            <div className="left">
                <img src={logo} alt="I" />
                <span className='logo-sta'>NSTA</span>
                <span className='logo-movies'>MOVIES</span>
            </div>
            <div className="middle">
                <Link className='nav-links' to="/tvshows">TV Shows</Link>
                <Link className='nav-links' to="/movies">Movies</Link>
                <Link className='nav-links' to="/recentlyadded">Recently Added</Link>
                <Link className='nav-links' to="/mylist">My List</Link>
            </div>
            <div className="right">
                <IoMdSearch/>
            </div>
        </nav>
    )
}
