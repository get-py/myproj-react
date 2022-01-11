import { useEffect } from 'react';
import { useState } from 'react';
import './Clock.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="clock-wrapper">
      <div className="clock">
        <p className="date">2021-10-05 TUE</p>
        <p className="time">{date.toISOString().slice(11, 19)}</p>
        <p className="text">Powered by React.js</p>
      </div>
    </div>
  );
}

export default Clock;
