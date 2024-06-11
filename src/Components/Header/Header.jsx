import React from 'react';
import {Link} from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import "./Header.scss"

export const Header = () => {
    return (
        <nav className='header'>
            <div className="left">
                <img src='/letter-i.png' alt="I" />
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
