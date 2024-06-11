import React from 'react'
import { Card } from '../Cards/Card'
import './Row.scss'

export const Row = ({ title,
    cardsArr = []
}) => {
    return (
        <div className='row'>

            <div className="row-head">
                <span>{title}</span>
            </div>

            <div className="cards-container">

                {cardsArr.map((item, index) => {
                    // console.log(item)
                    return <Card key={index} img={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                })}
            </div>

        </div>
    )
}
