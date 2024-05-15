import React from 'react'

export default function Countdown({ date }: { date: Date }) {
    const [days, setDays] = React.useState(0)
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = date.getTime() - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
        }, 1000)

        return () => clearInterval(interval)
    }, [date])

  return (
    <div className="countdown">

        <div className="days">

            <p>DAYS</p>
            <p>{days}</p>

        </div>

        <div className="hours">

            <p>HOURS</p>
            <p>{hours}</p>

        </div>

        <div className="minutes">

            <p>MINUTES</p>
            <p>{minutes}</p>

        </div>

        <div className="seconds">

            <p>SECONDS</p>
            <p>{seconds}</p>

        </div>

    </div>

  )
}
