import React from 'react'
import '../../../server';

export default function HostVans() {

    const [hostVans, setHostVans] = React.useState()

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => {
                setHostVans(data.vans)
            })
    })

    return (
        <>
            { hostVans ? 
            <div>
                {hostVans.map(van => (
                    <div key={van.id}>
                        <img src={van.imageUrl} />
                        <h3>{van.name}</h3>
                        <p>{van.price}/day</p>
                    </div>
                ))}
            </div> 
            : null}
        </>
    )
}