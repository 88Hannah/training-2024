import React from 'react'
import { useParams } from "react-router-dom"

export default function VanDetail() {

    const [van, setVan] = React.useState()


    const vanId = (useParams().id)

    React.useEffect(() => {
        fetch(`/api/vans/${vanId}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
            })
    }, [vanId])


    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}