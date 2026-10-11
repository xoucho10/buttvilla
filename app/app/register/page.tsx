'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Register() {
  const [form, setForm] = useState({
    full_name: '', graduation_year: '', course: '', phone: '', email: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
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
        email: form.email
      }])
    setLoading(false)
    if (error) {
      alert(error.message)
      console.log(error)
    } else {
      alert('Registered successfully!')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-3">
      <input placeholder="Full Name" className="border p-2 w-full" 
        onChange={e=>setForm({...form, full_name: e.target.value})} required />
      <input placeholder="Graduation Year e.g. 2020" type="number" className="border p-2 w-full"
        onChange={e=>setForm({...form, graduation_year: e.target.value})} required />
      <input placeholder="Course" className="border p-2 w-full"
        onChange={e=>setForm({...form, course: e.target.value})} />
      <input placeholder="Phone" className="border p-2 w-full"
        onChange={e=>setForm({...form, phone: e.target.value})} />
      <input placeholder="Email" className="border p-2 w-full"
        onChange={e=>setForm({...form, email: e.target.value})} />
      <button disabled={loading} className="bg-black text-white p-2 w-full rounded">
        {loading ? 'Saving...' : 'Register'}
      </button>
    </form>
  )
}
