import axios from 'axios';
import { useState } from 'react';
import toast,{ Toaster } from 'react-hot-toast';

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', feedback: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', form);
     toast.success('✅ Feedback submitted successfully!');
      setForm({ name: '', email: '', feedback: '' });
    } catch (err) {
      console.error(err);
       toast.error('❌ Failed to submit feedback.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  to-white">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">Give Feedback</h1>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border rounded px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border rounded px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
          required
        />

        <textarea
          name="feedback"
          value={form.feedback}
          onChange={handleChange}
          placeholder="Your Feedback"
          rows="4"
          className="border rounded px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 w-full rounded hover:bg-green-700 transition"
        >
          Submit Feedback
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
