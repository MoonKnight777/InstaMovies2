import React from 'react'
import { Card } from '../Cards/Card'
import './Row.scss'

export const Row = ({ title,
    cardsArr = [], type
}) => {
    return (
        <div className='row'>

            <div className="row-head">
                <span>{title}</span>
            </div>

            <div className="cards-container">

                {cardsArr.map((item, index) => {
                    return <Card key={item.id} data={item} type={type} img={`${process.env.REACT_APP_IMG_URL}${item.poster_path}`} />
                })}
            </div>

        </div>
    )
}
