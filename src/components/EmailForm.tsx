'use client'

import { useState, FormEvent } from 'react'

export default function EmailForm() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!email.trim()) return

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setMessage({ text: 'Please enter a valid email address', type: 'error' })
            return
        }

        setIsSubmitting(true)

        try {
            // Here you would send to your backend API
            // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })

            console.log('Email submitted:', email)

            setMessage({ text: "Thank you! We'll notify you when we launch.", type: 'success' })
            setEmail('')

            // Clear message after 5 seconds
            setTimeout(() => setMessage(null), 5000)
        } catch (error) {
            setMessage({ text: 'Something went wrong. Please try again.', type: 'error' })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <form className="notify-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                />
                <button type="submit" className="notify-button" disabled={isSubmitting}>
                    <span className="button-text">{isSubmitting ? 'Submitting...' : 'Notify Me'}</span>
                    <span className="button-icon">→</span>
                </button>
            </form>

            {message && (
                <div className={`message ${message.type}-message`}>
                    {message.text}
                </div>
            )}
        </>
    )
}
