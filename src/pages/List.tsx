import React, { useEffect, useState } from 'react'

interface FormItem {
  _id?: string
  name: string
  email: string
  subject: string
  message: string
  createdAt?: string
}

const List: React.FC = () => {
  const [forms, setForms] = useState<FormItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('http://localhost:3000/forms', { signal: controller.signal })
        if (!res.ok) throw new Error(`Server error: ${res.status}`)
        const data: FormItem[] = await res.json()
        setForms(data)
      } catch (err: any) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to fetch')
      } finally {
        setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [])

  if (loading) return <div>Loading forms…</div>
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>

  if (forms.length === 0) return <div>No forms submitted yet.</div>

  return (
    <div>
      <h1>Submitted Forms</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {forms.map((f, idx) => (
          <li key={f._id ?? idx} style={{ border: '1px solid #e5e7eb', padding: 12, marginBottom: 8, borderRadius: 6 }}>
            <div style={{ fontWeight: 600 }}>{f.name} <span style={{ fontWeight: 400, color: '#6b7280' }}>&lt;{f.email}&gt;</span></div>
            <div style={{ marginTop: 6 }}><strong>Subject:</strong> {f.subject}</div>
            <div style={{ marginTop: 6 }}><strong>Message:</strong> {f.message}</div>
            {f.createdAt && (
              <div style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>Submitted: {new Date(f.createdAt).toLocaleString()}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List