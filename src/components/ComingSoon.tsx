'use client'

import { useState, useEffect } from 'react'
import Countdown from '../components/Countdown'
import EmailForm from '../components/EmailForm'
import SocialLinks from '../components/SocialLinks'
import Image from 'next/image'

export default function ComingSoon() {
    const [logoLoaded, setLogoLoaded] = useState(false)
    const [logoError, setLogoError] = useState(false)

    return (
        <div className="container">
            <div className="background-animation">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="content">
                <div className="logo-container">
                    {/* Replace with your actual logo */}
                    {!logoError && (
                        <Image
                            src="/logo.png"
                            alt="Khalis Roots Logo"
                            width={200}
                            height={200}
                            className="logo"
                            style={{ display: logoLoaded ? 'block' : 'none' }}
                            onLoad={() => setLogoLoaded(true)}
                            onError={() => setLogoError(true)}
                            priority
                        />
                    )}

                    {(!logoLoaded || logoError) && (
                        <div className="logo-placeholder">
                            <div className="placeholder-text">KHALIS ROOTS</div>
                        </div>
                    )}
                </div>

                <h1 className="main-heading">Something Amazing is Coming Soon</h1>

                <p className="subtitle">
                    We&apos;re working hard to bring you an exceptional experience. Stay tuned for our launch!
                </p>

                <Countdown />

                <div className="notify-section">
                    <h2 className="notify-heading">Get Notified When We Launch</h2>
                    <EmailForm />
                    <p className="privacy-text">We respect your privacy. Unsubscribe at any time.</p>
                </div>

                <SocialLinks />
            </div>
        </div>
    )
}
