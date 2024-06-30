import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './ShowDetails.scss'

export const ShowDetails = () => {

  const [programDetails, setProgramDetails] = useState({});

  const location = useLocation();
  const { id } = useParams();


  useEffect(() => {

    const { type } = location.state || 'movie';
    const url = `${process.env.REACT_APP_URL}${type}/${id}`;
    console.log(url);
    const params = {
      language: 'en-US',
      api_key: process.env.REACT_APP_API_KEY
    }
    const fetchDetails = async () => {
      const response = await axios.get(url, { params })
      const details = response.data;
      try {
        console.log(details)
        setProgramDetails(details);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDetails();
  }, [])


  const {
    title,
    backdrop_path,
    poster_path,
    genres = [],
    overview,
    release_date,
    runtime,
    vote_average,
    vote_count,
    tagline,
    homepage,
    budget,
    revenue,
    popularity,
    imdb_id,
  } = programDetails;

  return (
    <div className="show-details">
      <div className="show-backdrop" style={{ backgroundImage: `url(${process.env.REACT_APP_IMG_URL}${backdrop_path})` }}>
        <div className="show-poster">
          <img src={`${process.env.REACT_APP_IMG_URL}${poster_path}`} alt={title} />
        </div>
        <div className="show-info">
          <h1>{title}</h1>
          <p className="show-tagline">{tagline}</p>
          <div className="show-genres">
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <p className="show-overview">{overview}</p>
          <div className="show-details-grid">
            <div>Release Date: <span>{new Date(release_date).toDateString()}</span></div>
            <div>Runtime: <span>{runtime} min</span></div>
            <div>Budget: <span>${budget}</span></div>
            <div>Revenue: <span>${revenue}</span></div>
            <div>Popularity: <span>{popularity}</span></div>
            <div>Vote Average: <span>{vote_average}</span></div>
            <div>Vote Count: <span>{vote_count}</span></div>
            <div>IMDB ID: <span><a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noopener noreferrer">{imdb_id}</a></span></div>
            {/* <div>Homepage: <span><a href={homepage} target="_blank" rel="noopener noreferrer">{homepage}</a></span></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
