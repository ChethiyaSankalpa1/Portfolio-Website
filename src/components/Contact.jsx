import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons.jsx';

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'chethiyasankalpa456@gmail.com',
    href: 'mailto:chethiyasankalpa456@gmail.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/25 hover:border-indigo-400/50',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 70 200 8522',
    href: 'tel:+94702008522',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25 hover:border-emerald-400/50',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Panwila, Sri Lanka',
    href: 'https://www.google.com/maps/search/Panwila,+Sri+Lanka',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/25 hover:border-cyan-400/50',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'chethiya-sankalapa',
    href: 'https://www.linkedin.com/in/chethiya-sankalapa-ba3a87316/',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/25 hover:border-violet-400/50',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact Inquiry');
    window.location.href = `mailto:chethiyasankalpa456@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[400px] bg-indigo-600/7 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2 sm:mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">Contact Me</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Open to IT support roles, junior developer positions, internships, and freelance projects. Reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Left: Contact cards */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTACT_CARDS.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' && label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all duration-200 group active:scale-98 ${bg}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 flex-shrink-0 ${color} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</p>
                    <p className={`text-xs sm:text-sm font-semibold ${color} truncate`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability message */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 mt-1 sm:mt-2">
              <h3 className="text-sm sm:text-base font-bold text-white mb-3">Currently Available For</h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  'IT Support Roles & Technical Problem-Solving',
                  'Junior Software Engineer / Developer Roles',
                  'Mobile (Android / Flutter) & Web (React / Node.js) Projects',
                  'Software Engineering Internships',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <CheckCircle size={15} className="text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card rounded-2xl p-5 sm:p-7">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle size={30} className="text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Message Ready!</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
                  Your mail client has been opened with your message. Send it away and I'll get back to you promptly!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4" noValidate>
                <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">Send a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={`w-full px-3.5 py-3 rounded-xl bg-white/5 border text-slate-200 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition ${errors.name ? 'border-rose-500/60' : 'border-white/10 focus:border-indigo-500/50'}`}
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={`w-full px-3.5 py-3 rounded-xl bg-white/5 border text-slate-200 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition ${errors.email ? 'border-rose-500/60' : 'border-white/10 focus:border-indigo-500/50'}`}
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500/50 text-slate-200 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
                />

                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`w-full px-3.5 py-3 rounded-xl bg-white/5 border text-slate-200 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition resize-none ${errors.message ? 'border-rose-500/60' : 'border-white/10 focus:border-indigo-500/50'}`}
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
