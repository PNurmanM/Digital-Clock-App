import { useState, useEffect } from 'react'

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        document.title = "Digital Clock"
    }, []);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date());
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

        h = h % 12 || 12;

        return padZero(h) + ':' + padZero(m) + ':' + padZero(s) + ' ' + AP;
    }

    function getDtYr(t){
        const match = {0:"January", 1:"February", 2:"March", 3:"April", 4:"May", 5:"June", 6:"July", 7:"August", 8:"September", 9:"October", 10:"November", 11:"December"};
        const y = t.getFullYear();
        const mt = t.getMonth();
        const d = t.getDate();

        return match[mt] + ' ' + d + ', ' + y;

    }

    function padZero(t){
        return(t < 10 ? "0" + t : t)
    }

    return(
        <>
            <div className='container'>
                <div className='clockCont'>
                    <div className='clock'>
                        <span className='time'>
                            {formatTime(time)}
                        </span>
                    </div>      
                </div>
                <div className='dateCont'>
                <p className='date'>{getDtYr(time)}</p>
                </div>
            </div>
        </>
    );
}

export default DigitalClock