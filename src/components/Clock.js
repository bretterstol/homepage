import React, {useState, useEffect} from 'react';

function Clock(){

    const now = Date.now();

    const [time, setTime] = useState(now);

    useEffect(() => {
        setInterval(()=>{
            setTime(Date.now())
        }, 1000)
    }, [])

    return(
        <div>
            <h3>Tid</h3>
            {new Date(time).toLocaleString()}
        </div>

    )

}

export default Clock;