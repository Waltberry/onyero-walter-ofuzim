// frontend/src/components/ContactForm.jsx
import React, { useState } from "react";
import { API_BASE } from "../lib/config";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setNotice(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setNotice({ type: "error", text: "Please fill name, email, and message." });
      return;
    }
    if (message.length < 10) {
      setNotice({ type: "error", text: "Message must be at least 10 characters." });
      return;
    }

    setSubmitting(true);
    try {
      const payload = { name, email, message };
      if (subject) payload.subject = subject; // optional

      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.detail || `Request failed (${res.status})`);

      setNotice({ type: "success", text: data?.message || "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setNotice({
        type: "error",
        text: err?.message || "Failed to submit. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-card" onSubmit={onSubmit} noValidate>
      <h3 className="contact-title">Send a message</h3>

      {notice && (
        <div className={`notice ${notice.type === "success" ? "success" : "error"}`} role="alert">
          {notice.text}
        </div>
      )}

      <div className="form-field">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={onChange}
          placeholder="Your full name"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="form-field">
        <label htmlFor="subject">
          Subject <span className="muted">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={onChange}
          placeholder="What’s this about?"
          maxLength={200}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={onChange}
          placeholder="Write at least 10 characters…"
          required
          minLength={10}
          maxLength={2000}
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
