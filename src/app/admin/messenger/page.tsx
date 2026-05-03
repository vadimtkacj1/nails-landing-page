'use client'

import { useCallback, useEffect, useState } from 'react'
import AdminHeader from '@/components/admin/AdminHeader'
import type { MessengerBroadcastState } from '@/lib/messenger-broadcast-store'

const gradient = 'linear-gradient(92.63deg, #1B1BB3 14.57%, #530FAD 99.27%)'

export default function AdminMessengerPage() {
  const [state, setState] = useState<MessengerBroadcastState | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/messenger-broadcast', { cache: 'no-store' })
      if (res.ok) {
        setState(await res.json())
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const copyCode = async () => {
    if (!state?.subscribeCode) return
    await navigator.clipboard.writeText(state.subscribeCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading || !state) {
    return (
      <div>
        <AdminHeader title="" />
        <div className="p-8 text-center text-[#9ca3af] text-[14px]">טוען...</div>
      </div>
    )
  }

  return (
    <div className="min-w-0 max-w-full">
      <AdminHeader title="" />

      <div className="p-4 md:p-8 max-w-[900px]">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-wrap items-center gap-3">
            <code className="text-[22px] font-mono font-bold tracking-wider text-[#1B1BB3] bg-[#f1f5f9] px-4 py-2 rounded-lg border border-[#e2e8f0]">
              {state.subscribeCode}
            </code>
            <button
              type="button"
              onClick={copyCode}
              className="px-4 py-2 rounded-lg text-[13px] font-semibold text-white hover:opacity-90"
              style={{ background: gradient }}
            >
              {copied ? 'copied' : 'copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
