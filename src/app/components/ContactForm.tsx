'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 w-full"
          rows={4}
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-gray-500 text-white p-3 px-6 rounded-md">
        Submit
      </button>
    </form>
  );
}
