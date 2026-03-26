"use client";

import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!form.firstName.trim()) return "First name is required.";
    if (!form.lastName.trim()) return "Last name is required.";
    if (!form.email.trim()) return "Email address is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email address.";
    if (!form.interest.trim()) return "Please select an option.";
    if (!form.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Message sent successfully. Please check your email for confirmation.",
      });

      setForm(initialForm);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to send message.";
      setStatus({ type: "error", message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F9F6EF] rounded-3xl p-10 border border-[#0B1D35]/6">
      <h3 className="text-2xl font-light text-[#0B1D35] mb-8">Send a Message</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] placeholder-[#8A96A3] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all"
            />
          </div>

          <div>
            <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] placeholder-[#8A96A3] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] placeholder-[#8A96A3] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all"
          />
        </div>

        <div>
          <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">
            I want to
          </label>
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all appearance-none cursor-pointer"
          >
            <option value="">Select an option</option>
            <option value="Donate">Donate</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Partner with TGK">Partner with TGK</option>
            <option value="Learn more">Learn more</option>
            <option value="Media / Press inquiry">Media / Press inquiry</option>
          </select>
        </div>

        <div>
          <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us how you'd like to get involved..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] placeholder-[#8A96A3] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all resize-none"
          />
        </div>

        {status.message ? (
          <div
            className={`rounded-xl px-4 py-3 text-sm ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {status.message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0B1D35] disabled:opacity-70 disabled:cursor-not-allowed hover:bg-[#152C4E] text-white font-semibold py-4 rounded-xl transition-all duration-300 text-sm tracking-wide hover:shadow-xl mt-2 cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}