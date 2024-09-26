/* eslint-disable */
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import "./Header.scss";
import logo from"./letter-i.png";
import axios from 'axios';


export const Header = () => {

    const navigate = useNavigate();

    const [searchValue ,setSearchValue] = useState('');
    const [searchCate ,setSearchCate] = useState('multi');
    const [includeAdult,setIncludeAdult] = useState(true);

    const searchHandler = async(e)=>{
        e.preventDefault();
        console.log(searchValue);
        const url = `${process.env.REACT_APP_URL}search/${searchCate}`;
        const params = {
            query : searchValue,
            include_adult : true,
            language : 'en-US',
            page : 1,
            api_key : process.env.REACT_APP_API_KEY
        }
        try {
            const {data} = await axios.get(url,{params})
            console.log(data.results);
            if(data && data.results.length > 0)
                {
                navigate('/search',{state : {results : data.results}})
            }
            else
            {
                redirect('/search/no_results')
            }
        } catch (error) {
            console.error("Search request failed:", error);
            navigate('/search/error');
        }
    }


    return (
        <nav className='header'>
            <div className="left" onClick={()=>navigate('/')}>
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
