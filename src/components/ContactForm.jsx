import { useState } from 'react'

const initialFields = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    content: '',
}

const inputClass =
    'w-full rounded-lg bg-zinc-800 border border-zinc-500/90 px-3 py-2 text-gray-100 cabin-regular text-sm md:text-base shadow-inner placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25'

const labelClass = 'block mb-1.5 cabin-medium text-xs md:text-sm text-gray-400'

export function ContactForm() {
    const [fields, setFields] = useState(initialFields)
    const [submitting, setSubmitting] = useState(false)
    const [status, setStatus] = useState(null)

    function updateField(name, value) {
        setFields((prev) => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus(null)
        setSubmitting(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fields),
            })

            const data = await res.json().catch(() => ({}))

            if (!res.ok) {
                setStatus({
                    type: 'error',
                    message: typeof data.error === 'string' ? data.error : 'Could not send your message.',
                })
                return
            }

            setStatus({ type: 'success', message: 'Thanks — your message was sent.' })
            setFields(initialFields)
        } catch {
            setStatus({
                type: 'error',
                message: 'Network error. If you are running locally, use `vercel dev` so /api/contact is available.',
            })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <>
            <h3 className="cabin-semibold text-lg md:text-xl text-gray-300 mb-12 mt-20 text-center leading-snug px-2">
                Or send me a message and I&apos;ll get back to you shortly!
            </h3>
            <form
                onSubmit={handleSubmit}
                className="md:w-1/2 w-9/10 mx-auto mt-8 p-6 md:p-8 rounded-xl bg-zinc-900 border border-zinc-700/70 shadow-md"
                noValidate
                >
                

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="contact-firstName" className={labelClass}>
                            First name
                        </label>
                        <input
                            id="contact-firstName"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            required
                            value={fields.firstName}
                            onChange={(e) => updateField('firstName', e.target.value)}
                            className={inputClass}
                            />
                    </div>
                    <div>
                        <label htmlFor="contact-lastName" className={labelClass}>
                            Last name
                        </label>
                        <input
                            id="contact-lastName"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            required
                            value={fields.lastName}
                            onChange={(e) => updateField('lastName', e.target.value)}
                            className={inputClass}
                            />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="contact-email" className={labelClass}>
                        Email
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={fields.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className={inputClass}
                        />
                </div>

                <div className="mb-4">
                    <label htmlFor="contact-subject" className={labelClass}>
                        Subject
                    </label>
                    <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        autoComplete="off"
                        required
                        value={fields.subject}
                        onChange={(e) => updateField('subject', e.target.value)}
                        className={inputClass}
                        />
                </div>

                <div className="mb-6">
                    <label htmlFor="contact-content" className={labelClass}>
                        Message
                    </label>
                    <textarea
                        id="contact-content"
                        name="content"
                        rows={5}
                        required
                        value={fields.content}
                        onChange={(e) => updateField('content', e.target.value)}
                        className={`${inputClass} resize-y min-h-[120px]`}
                        />
                </div>

                {status && (
                    <p
                    role="status"
                    className={`mb-4 cabin-regular text-sm md:text-base ${
                        status.type === 'success' ? 'text-cyan-400' : 'text-red-400'
                    }`}
                    >
                        {status.message}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-zinc-300 to-zinc-400 text-zinc-900 cabin-semibold text-sm md:text-base px-4 py-2 border border-zinc-200/80 hover:from-zinc-200 hover:to-zinc-300 hover:shadow-lg transition-all duration-300 shadow-md disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                    >
                    {submitting ? 'Sending…' : 'Send message'}
                </button>
            </form>
        </>
    )
}
