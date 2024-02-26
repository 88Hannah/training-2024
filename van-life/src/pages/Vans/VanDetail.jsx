import React from 'react'
import { useParams, Link, useLocation } from "react-router-dom"

export default function VanDetail() {

    const [van, setVan] = React.useState()

    const vanId = (useParams().id)

    const location = useLocation()

    React.useEffect(() => {
        fetch(`/api/vans/${vanId}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
            })
    }, [vanId])

    const search = location.state?.search || ""

    const prevTypeFilter = location.state?.type || 'all'

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {prevTypeFilter} vans</span></Link>

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