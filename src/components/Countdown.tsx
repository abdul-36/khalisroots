'use client'

import { useState, useEffect } from 'react'

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        // Set your launch date here
        const launchDate = new Date('February 1, 2026 00:00:00').getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = launchDate - now

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [])

    const formatNumber = (num: number) => String(num).padStart(2, '0')

    return (
        <div className="countdown">
            <div className="countdown-item">
                <span className="countdown-value">{formatNumber(timeLeft.days)}</span>
                <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-value">{formatNumber(timeLeft.hours)}</span>
                <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-value">{formatNumber(timeLeft.minutes)}</span>
                <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-value">{formatNumber(timeLeft.seconds)}</span>
                <span className="countdown-label">Seconds</span>
            </div>
        </div>
    )
}
