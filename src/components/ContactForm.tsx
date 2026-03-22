"use client";

export default function ContactForm() {
  return (
    <div className="bg-[#F9F6EF] rounded-3xl p-10 border border-[#0B1D35]/6">
      <h3 className="text-2xl font-light text-[#0B1D35] mb-8">Send a Message</h3>
      <div className="flex flex-col gap-5">
        <div className="grid md:grid-cols-2 gap-4">
          {["First Name", "Last Name"].map((lbl) => (
            <div key={lbl}>
              <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">{lbl}</label>
              <input
                type="text"
                placeholder={lbl}
                className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] placeholder-[#8A96A3] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all"
              />
            </div>
          ))}
        </div>
        <div>
          <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] placeholder-[#8A96A3] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all"
          />
        </div>
        <div>
          <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">I want to</label>
          <select className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all appearance-none cursor-pointer">
            <option value="">Select an option</option>
            <option>Donate</option>
            <option>Volunteer</option>
            <option>Partner with TGK</option>
            <option>Learn more</option>
            <option>Media / Press inquiry</option>
          </select>
        </div>
        <div>
          <label className="text-[#0B1D35] text-xs font-semibold tracking-wide uppercase block mb-2">Message</label>
          <textarea
            rows={5}
            placeholder="Tell us how you'd like to get involved..."
            className="w-full bg-white border border-[#0B1D35]/10 rounded-xl px-4 py-3.5 text-sm text-[#0B1D35] placeholder-[#8A96A3] focus:outline-none focus:border-[#BF8C3A] focus:ring-2 focus:ring-[#BF8C3A]/10 transition-all resize-none"
          />
        </div>
        <button
          type="button"
          onClick={() => alert("Message sent! We'll be in touch soon.")}
          className="w-full bg-[#0B1D35] hover:bg-[#152C4E] text-white font-semibold py-4 rounded-xl transition-all duration-300 text-sm tracking-wide hover:shadow-xl mt-2 cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
