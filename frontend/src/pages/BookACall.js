import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function BookACall() {
  const form = useRef();
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !message) {
      setStatus('error');
      setFeedback('Please fill in all fields.');
      return;
    }
  
    if (!emailRegex.test(email)) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }
  
    emailjs
      .sendForm(
        'Personal_Portefolio',
        'template_7ipf30u',
        form.current,
        'PnQaTaTut6OZf-AzA'
      )
      .then(
        () => {
          setStatus('success');
          setFeedback('Message sent successfully!');
          form.current.reset();
        },
        () => {
          setStatus('error');
          setFeedback('Something went wrong. Try again later.');
        }
      );
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-800 to-zinc-900 text-white px-4">
      <div className="w-full max-w-lg bg-zinc-950/80 p-8 rounded-2xl shadow-xl backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Book a Call</h1>
        <p className="mb-6 text-center text-zinc-300">Fill out the form and I’ll get back to you shortly.</p>

        {/* Feedback */}
        {feedback && (
          <div
            className={`text-center mb-5 py-3 px-4 rounded-lg font-medium transition-all ${
              status === 'success'
                ? 'bg-green-500/20 text-green-300 border border-green-400'
                : 'bg-red-500/20 text-red-300 border border-red-400'
            }`}
          >
            {feedback}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 placeholder-zinc-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 placeholder-zinc-400"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            required
            className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 placeholder-zinc-400"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-zinc-200 transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookACall;
