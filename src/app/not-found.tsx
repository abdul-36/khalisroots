'use client'

import Link from 'next/link'
import SocialLinks from '../components/SocialLinks'
import Image from 'next/image'
import { useState } from 'react'

export default function NotFound() {
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

                <h1 className="main-heading">404 - Page Not Found</h1>

                <p className="subtitle">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div style={{ marginBottom: '3rem' }}>
                    <Link href="/" className="notify-button" style={{ textDecoration: 'none', display: 'inline-flex', justifyContent: 'center' }}>
                        Back to Home
                        <span className="button-icon">→</span>
                    </Link>
                </div>

                <SocialLinks />
            </div>
        </div>
    )
}
