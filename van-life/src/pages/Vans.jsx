import React from 'react';
import '../server';

export default function Vans() {

    const [vanData, setVanData] = React.useState([])

    React.useEffect(() => {
        fetch('/api/vans')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setVanData(data.vans)})
    }, [])

    let vanInfo;

    function createVanInfo() {
        vanInfo = vanData.map((van) => {
            return (
                <div key={van.id}>
                    <img src={van.imageUrl} height='200' />
                    <h2>{van.name}</h2>
                    <h3>{van.price}</h3>
                    <p>{van.type}</p>
                    <p>{van.description}</p>
                </div>
            )
        })      
    } 

    createVanInfo()


    return (    
        vanInfo
    )
}


