'use client'

import { Inter } from 'next/font/google'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function CollierSimonLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/collier-simon-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/collier-simon')
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className={`${inter.className} bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6`}>
      <div className="w-full max-w-sm">
        <div className="text-xl font-bold tracking-widest text-white flex items-center gap-2 mb-10 justify-center">
          <span className="bg-white text-black w-8 h-8 inline-flex items-center justify-center text-sm font-black">FE</span>
          FIRST EPIC
        </div>
        <form onSubmit={handleSubmit} className="bg-[#111] border border-gray-800 rounded-xl p-8">
          <h1 className="text-white font-semibold text-lg mb-6">Enter password to continue</h1>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 mb-4"
          />
          {error && <p className="text-red-400 text-sm mb-4">Incorrect password.</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {loading ? 'Checking…' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}
