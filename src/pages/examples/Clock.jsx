import { useEffect } from 'react';
import { useState } from 'react';
import './Clock.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  const Weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
        <p className="date">
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}{' '}
          {Weekdays[date.getDay()]}
        </p>
        <p className="time">
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </p>
        <p className="text">Powered by React.js</p>
      </div>
    </div>
  );
}

export default Clock;
