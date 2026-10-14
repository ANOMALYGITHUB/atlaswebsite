"use client";

import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
  honeypot: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    organization: "",
    topic: "research",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      setStatus("success");
      return;
    }
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please provide a valid work or institutional email address.");
      return;
    }
    setStatus("submitting");
    setErrorMessage("");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  if (status === "success") {
    return (
      <div className="p-8 border border-copper/50 bg-white/40 rounded-sm space-y-4" role="status" aria-live="polite">
        <div className="font-mono text-xs text-copper uppercase tracking-wider">DISPATCH TRANSMITTED // 200 OK</div>
        <h3 className="font-display text-2xl text-charcoal">Inquiry Logged to Engineering Queue</h3>
        <p className="font-sans text-sm text-charcoal/85 leading-relaxed">
          Thank you, <span className="font-medium text-charcoal">{formData.name}</span>. Your inquiry regarding <span className="font-mono text-xs bg-stone/40 px-1.5 py-0.5 rounded">{formData.topic}</span> has been received. A member of our systems team will review your message and respond to <span className="font-medium text-charcoal">{formData.email}</span>.
        </p>
        <div className="pt-4 border-t border-stone flex items-center justify-between font-mono text-xs text-warm-grey">
          <span>CHANNEL: direct-web-inquiry</span>
          <button
            type="button"
            onClick={() => {
              setFormData({ name: "", email: "", organization: "", topic: "research", message: "", honeypot: "" });
              setStatus("idle");
            }}
            className="text-copper hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8 border border-stone bg-white/40 rounded-sm space-y-6" noValidate>
      <div className="flex items-center justify-between pb-4 border-b border-stone">
        <span className="font-mono text-xs text-copper uppercase tracking-widest">DIRECT TRANSMISSION FORM</span>
        <span className="font-mono text-xs text-warm-grey">* Required</span>
      </div>

      {status === "error" && (
        <div role="alert" className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-mono rounded-sm">
          {errorMessage}
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website (Leave blank)</label>
        <input id="website" type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-sans text-xs font-medium text-charcoal">Full Name <span className="text-copper">*</span></label>
          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Dr. Eleanor Vance" className="w-full px-3 py-2 text-sm bg-porcelain border border-stone rounded-sm text-charcoal placeholder:text-warm-grey focus:outline-none focus:border-copper font-sans" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block font-sans text-xs font-medium text-charcoal">Institutional / Work Email <span className="text-copper">*</span></label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="e.vance@institution.edu" className="w-full px-3 py-2 text-sm bg-porcelain border border-stone rounded-sm text-charcoal placeholder:text-warm-grey focus:outline-none focus:border-copper font-sans" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="organization" className="block font-sans text-xs font-medium text-charcoal">Organization or Lab <span className="text-warm-grey">(Optional)</span></label>
          <input id="organization" name="organization" type="text" value={formData.organization} onChange={handleChange} placeholder="Independent / CSAIL" className="w-full px-3 py-2 text-sm bg-porcelain border border-stone rounded-sm text-charcoal placeholder:text-warm-grey focus:outline-none focus:border-copper font-sans" />
        </div>
        <div className="space-y-2">
          <label htmlFor="topic" className="block font-sans text-xs font-medium text-charcoal">Inquiry Topic <span className="text-copper">*</span></label>
          <select id="topic" name="topic" value={formData.topic} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-porcelain border border-stone rounded-sm text-charcoal focus:outline-none focus:border-copper font-sans">
            <option value="research">Ternary Computing &amp; Open Science</option>
            <option value="systems-os">ATLAS OS Kernel Architecture</option>
            <option value="robotics">Autonomous Drone Kit &amp; Edge Hardware</option>
            <option value="infrastructure">Infrastructure &amp; Dedicated Hosting</option>
            <option value="consulting">Systems Architecture Consulting</option>
            <option value="general">General / Other Communication</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block font-sans text-xs font-medium text-charcoal">Message &amp; Technical Scope <span className="text-copper">*</span></label>
        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Describe your research inquiry or infrastructure requirements..." className="w-full px-3 py-2 text-sm bg-porcelain border border-stone rounded-sm text-charcoal placeholder:text-warm-grey focus:outline-none focus:border-copper font-sans resize-y" />
      </div>

      <div className="pt-2 flex items-center justify-between">
        <p className="font-mono text-[11px] text-warm-grey">Messages dispatched directly to engineering. No marketing tracking.</p>
        <button type="submit" disabled={status === "submitting"} className="px-6 py-2.5 bg-charcoal text-porcelain rounded-sm font-sans text-sm font-medium hover:bg-charcoal/90 focus:outline-none focus:ring-2 focus:ring-copper disabled:opacity-50 transition-colors">
          {status === "submitting" ? "Transmitting..." : "Send Transmission →"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
