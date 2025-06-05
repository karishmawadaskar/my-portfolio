import axios from 'axios';
import { useState } from 'react';
import toast,{ Toaster } from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      toast.success('✅ Message send successfully!');
    } catch (err) {
      console.error(err);
      toast.error('❌ Failed to contact.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Contact Me</h1>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="mb-4 w-full px-4 py-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="mb-4 w-full px-4 py-2 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="mb-4 w-full px-4 py-2 border rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
