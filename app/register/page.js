'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Register() {
  const [form, setForm] = useState({
    full_name: '', graduation_year: '', course: '', phone: '', email: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase
      .schema('buttvilla_alumni')
      .from('members')
      .insert([{
        full_name: form.full_name,
        graduation_year: parseInt(form.graduation_year),
        course: form.course,
        phone: form.phone,
        email: form.email || null
      }])
    setLoading(false)
    if (error) {
      alert('Error: ' + error.message)
      console.error(error)
    } else {
      alert('Registered successfully!')
      setForm({ full_name: '', graduation_year: '', course: '', phone: '', email: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-3 pt-24">
      <h1 className="text-2xl font-bold">Alumni Registration</h1>
      <input placeholder="Full Name" value={form.full_name} className="border p-2 w-full rounded" onChange={e=>setForm({...form, full_name: e.target.value})} required />
      <input placeholder="Graduation Year" type="number" value={form.graduation_year} className="border p-2 w-full rounded" onChange={e=>setForm({...form, graduation_year: e.target.value})} required />
      <input placeholder="Course" value={form.course} className="border p-2 w-full rounded" onChange={e=>setForm({...form, course: e.target.value})} />
      <input placeholder="Phone" value={form.phone} className="border p-2 w-full rounded" onChange={e=>setForm({...form, phone: e.target.value})} />
      <input placeholder="Email" type="email" value={form.email} className="border p-2 w-full rounded" onChange={e=>setForm({...form, email: e.target.value})} />
      <button disabled={loading} className="bg-black text-white p-2 w-full rounded">{loading ? 'Saving...' : 'Register'}</button>
    </form>
  )
}
