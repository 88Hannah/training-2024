import React from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';

export default function HostVanLayout() {

    const [van, setVan] = React.useState();

    const { id } = useParams();

    React.useEffect(() => {

        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVan(data.vans[0])
            })

    }, [])

    return (
        <>
            { van ? <div>
                <img src={van.imageUrl} width='200'/>
                <i>{van.type}</i>
                <p>{van.name}</p>
                <p>{van.price}/day</p>
            </div> : null }
            <nav>
                <NavLink to={`/host/vans/${id}`}>Details</NavLink>
                <NavLink to={`/host/vans/${id}/pricing`}>Pricing</NavLink>
                <NavLink to={`/host/vans/${id}/photos`}>Photos</NavLink>
            </nav>
            <Outlet />
        </>
    )
}