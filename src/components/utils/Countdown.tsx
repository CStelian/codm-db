import React from 'react';

export default function Countdown({ date }: { date: Date }) {
  const now = new Date().getTime();
  const initialTime = new Date(date).getTime();
  const timeRemaining = initialTime - now;

  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const timerInterval = setInterval(() => {
      setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [timeRemaining]);

  return (
    <div className='countdown'>
      <div className='days'>
        <p>DAYS</p>
        <p>{days}</p>
      </div>

      <div className='hours'>
        <p>HOURS</p>
        <p>{hours}</p>
      </div>

      <div className='minutes'>
        <p>MINUTES</p>
        <p>{minutes}</p>
      </div>

      <div className='seconds'>
        <p>SECONDS</p>
        <p>{seconds}</p>
      </div>
    </div>
  );
}

