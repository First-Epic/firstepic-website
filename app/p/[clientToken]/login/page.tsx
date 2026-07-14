'use client'

import { Inter } from 'next/font/google'
import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

// Identity is collected here at login (name + email) instead of in a separate
// pop-up after entry. Only the password is required; name/email are captured
// when given and written to the fe_identity cookie the tracker reads, plus
// fe_identity_seen so the post-login prompt never appears.
function rememberIdentity(name: string, email: string) {
  try {
    const n = name.trim()
    const em = email.trim()
    if (n || em) {
      const payload = encodeURIComponent(
        JSON.stringify({ name: n || undefined, email: em || undefined }),
      )
      document.cookie = `fe_identity=${payload}; path=/; max-age=${60 * 60 * 24 * 90}; SameSite=Lax`
    }
    // They saw the fields here, so never show the separate identify prompt.
    document.cookie = `fe_identity_seen=1; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
  } catch {
    /* best-effort; never block login */
  }
}

export default function ClientDashboardLogin() {
  const params = useParams<{ clientToken: string }>()
  const clientToken = params.clientToken
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/p-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientToken, password }),
    })

    if (res.ok) {
      rememberIdentity(name, email)
      router.push(`/p/${clientToken}`)
    } else {
      setError(true)
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 mb-4'

  return (
    <div className={`${inter.className} bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6`}>
      <div className="w-full max-w-sm">
        <div className="text-xl font-bold tracking-widest text-white flex items-center gap-2 mb-10 justify-center">
          <span className="bg-white text-black w-8 h-8 inline-flex items-center justify-center text-sm font-black">FE</span>
          FIRST EPIC
        </div>
        <form onSubmit={handleSubmit} className="bg-[#111] border border-gray-800 rounded-xl p-8">
          <h1 className="text-white font-semibold text-lg mb-2">Sign in to review</h1>
          <p className="text-gray-500 text-sm mb-6">
            Enter the password to continue. Adding your name and email lets us tag your feedback.
          </p>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            autoComplete="name"
            className={inputClass}
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
            className={inputClass}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className={inputClass}
          />
          {error && <p className="text-red-400 text-sm mb-4">Incorrect password.</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {loading ? 'Checking...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}
