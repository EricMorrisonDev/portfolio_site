import { Resend } from 'resend'

const FROM = 'Eric Morrison Portfolio <noreply@contact.ericmorrisondev.com>'

const validateInput = (input) => {
    if (typeof input.firstName !== 'string'
        || typeof input.lastName !== 'string'
        || typeof input.subject !== 'string'
        || typeof input.content !== 'string'
        || input.firstName.length === 0
        || input.lastName.length === 0
        || input.subject.length === 0
        || input.content.length === 0
    ) return false

    return true
}

const validateEmail = (email) => {
    return (
        typeof email === 'string'
        && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    )
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' })
        return
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL
    if (!apiKey || !to) {
        console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL')
        res.status(500).json({ error: 'Server misconfigured' })
        return
    }

    let body = req.body
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body)
        } catch {
            res.status(400).json({ error: 'Invalid JSON' })
            return
        }
    }

    const { firstName, lastName, email, subject, content } = body ?? {}

    if (!validateInput({ firstName, lastName, subject, content }) || !validateEmail(email)) {
        res.status(400).json({ error: 'Invalid input' })
        return
    }

    const trimmed = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        subject: subject.trim(),
        content: content.trim(),
    }

    const text = [
        `Name: ${trimmed.firstName} ${trimmed.lastName}`,
        `Email: ${trimmed.email}`,
        '',
        trimmed.content,
    ].join('\n')

    const html = `<p><strong>Name:</strong> ${escapeHtml(trimmed.firstName)} ${escapeHtml(trimmed.lastName)}</p>
<p><strong>Email:</strong> ${escapeHtml(trimmed.email)}</p>
<p><strong>Subject:</strong> ${escapeHtml(trimmed.subject)}</p>
<hr />
<p>${escapeHtml(trimmed.content).replace(/\n/g, '<br />')}</p>`

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
        from: FROM,
        to,
        subject: `[Portfolio] ${trimmed.subject}`,
        replyTo: trimmed.email,
        text,
        html,
    })

    if (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to send message' })
        return
    }

    res.status(200).json({ ok: true, id: data?.id })
}
