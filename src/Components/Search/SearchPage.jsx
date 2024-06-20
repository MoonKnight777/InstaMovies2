import React from 'react'
import { useLocation } from 'react-router-dom';
import './SearchPage.scss'
import defaultPoster from './default.avif'

const SearchPageRow = ({ data }) => {
    const media_type = data.media_type;
    const releaseYear = data.release_date || data.first_air_date ? new Date((media_type === 'movie') ? data.release_date : data.first_air_date).getFullYear() : 'N/A';
    const posterUrl = data.poster_path ? `${process.env.REACT_APP_IMG_URL}${data.poster_path}` : defaultPoster; // Provide a default image path
    return (
        <div className="search-row-container">
            <div className="left">
                <img src={posterUrl} alt="" />
            </div>
            <div className="right">
                <div className="head">{(media_type === 'movie') ? data.title : data.name}</div>
                <div className="media-type">({data.media_type})</div>
                <div className="year">{releaseYear}</div>
                <div className="overview">{data.overview}</div>
                <div className="rating">Rating : {data.vote_average}</div>
            </div>
        </div>

    )
}


export const SearchPage = () => {

    const location = useLocation();
    const { results } = location.state || [];
    return (
        <div>
            <div className="search-result-head">
                <span>Top Results</span>
            </div>
            {results
                .filter(item => item.poster_path)
                .map(item => (
                    <SearchPageRow key={item.id} data={item} />
                ))}
        </div>
    )
}
