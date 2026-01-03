// frontend/src/components/ContactForm.jsx
import React, { useState } from "react";
import { API_BASE } from "../lib/config";

/**
 * ContactForm
 * - Validates required fields (name, email, message).
 * - `subject` is optional (your backend accepts null).
 * - Posts to POST /api/contact and shows success/error states.
 * - Uses simple HTML + minimal CSS classes (no Tailwind required).
 */
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

    // Basic client validation
    if (!form.name || !form.email || !form.message) {
      setNotice({ type: "error", text: "Please fill name, email, and message." });
      return;
    }
    if (form.message.trim().length < 10) {
      setNotice({ type: "error", text: "Message must be at least 10 characters." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          // backend accepts null/omitted subject
          subject: form.subject || null,
          message: form.message,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.detail || `Request failed (${res.status})`);
      }
      setNotice({ type: "success", text: "Thanks! Your message has been sent." });
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
        <div
          className={`notice ${notice.type === "success" ? "success" : "error"}`}
          role="alert"
        >
          {notice.text}
        </div>
      )}

      <div className="form-field">
        <label htmlFor="name">Name *</label>
        <input
          id="name" name="name" type="text"
          value={form.name} onChange={onChange}
          placeholder="Your full name" required
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email *</label>
        <input
          id="email" name="email" type="email"
          value={form.email} onChange={onChange}
          placeholder="you@example.com" required
        />
      </div>

      <div className="form-field">
        <label htmlFor="subject">Subject <span className="muted">(optional)</span></label>
        <input
          id="subject" name="subject" type="text"
          value={form.subject} onChange={onChange}
          placeholder="What’s this about?"
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message" name="message" rows="5"
          value={form.message} onChange={onChange}
          placeholder="Write at least 10 characters…" required
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
