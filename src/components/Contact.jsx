import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // For a real portfolio, connect to an email API or service
  }

  return (
    <div className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      {submitted ? (
        <p className="text-green-600">Thank you for reaching out!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            className="block w-full px-4 py-2 border rounded"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="block w-full px-4 py-2 border rounded"
            placeholder="Your Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="block w-full px-4 py-2 border rounded"
            placeholder="Your Message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}