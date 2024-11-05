import { useState, useEffect } from 'react'

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(newDate());
        }, 1000)

        return () => {
            clearInterval(timeInterval);
        }
    }, []);

    function formatTime(t){
        let h = t.getHours();
        const m = t.getMinutes();
        const s = t.getSeconds();
        const AP = h > 12 ? "PM" : "AM";

        return h + ':' + m + ':' + s + AP;
    }

    return(
        <div className='clockCont'>
            <div className='clock'>
                <span className='time'>
                    {formatTime(time)}
                </span>
            </div>
        </div>
    );
}

export default DigitalClock