import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import "./Header.scss";
import logo from"./letter-i.png";
import axios from 'axios';

export const Header = () => {

    const [searchValue ,setSearchValue] = useState('');

    const searchHandler = async(e)=>{
        e.preventDefault();
        const searchedData = await axios.get()
    }

    console.log(process.env);

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
                <form onSubmit={searchHandler}>
                    <input type='text' onChange={(e)=>setSearchValue(e.target.value)} placeholder='What are you looking for ?'/>
                    <button type='submit' ><IoMdSearch /></button>
                </form>
            </div>
        </nav>
    )
}
