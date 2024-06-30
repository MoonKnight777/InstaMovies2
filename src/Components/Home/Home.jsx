import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Row } from '../Row/Row'
import axios from 'axios'

const url = process.env.REACT_APP_URL;
const apikey = process.env.REACT_APP_API_KEY;

const fetchdata = async(type,category)=>{
  try {
    const response = await axios.get(`${url}${type}/${category}?api_key=${apikey}`);
    return response.data.results;
} catch (error) {
    console.error("Error fetching data:", error);
    return [];
}
}

export const Home = () => {

  let [popularMovies, setPopularMovies] = useState([]);
  let [nowplaying, setNowplaying] = useState([]);
  let [topmovies, setTopmovies] = useState([]);
  let [topShows, setTopShows] = useState([]);

  
  useEffect(()=>{
    const fetchData = async () => {
      const popularMoviesData = await fetchdata('movie', 'popular');
      const nowPlayingData = await fetchdata('movie', 'upcoming');
      const topMoviesData = await fetchdata('movie', 'top_rated');
      const topShowsData = await fetchdata('tv', 'top_rated');

      setPopularMovies(popularMoviesData);
      setNowplaying(nowPlayingData);
      setTopmovies(topMoviesData);
      setTopShows(topShowsData);
  };

  fetchData();
  },[])

  return (
    <div className='home'>
        <div className="banner">
          <div className="banner-details">
          <span>Today's Pick</span>
          <h2>{popularMovies[0]?popularMovies[0].title : 'InstMovies....'}</h2>
          <p>{popularMovies[0]?popularMovies[0].overview : 'InstMovies....'}</p>
          <button>Watch Now</button>
          </div>
        {popularMovies.length > 0 && popularMovies[0].poster_path ? (
                    <img src={`${process.env.REACT_APP_IMG_URL}${popularMovies[0].backdrop_path}`} alt="HOME" />
                ) : (
                    <div>Loading...</div>
                )}
        </div>
        <Row title={"Upcoming"} type={"movie"} cardsArr={nowplaying} />
        <Row title={"Popular Now"}type={"movie"}  cardsArr={popularMovies}/>
        <Row title={"Top movies"} type={"movie"} cardsArr={topmovies}/>
        <Row title={"Top Shows"} type={"tv"} cardsArr={topShows}/>
    </div>
  )
}
