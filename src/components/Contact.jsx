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
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-[350px] sm:w-[550px] h-[300px] sm:h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">Contact Me</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Open to IT support roles, junior developer positions, internships, and freelance projects. Reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left: Contact cards */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CONTACT_CARDS.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' && label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group hover:-translate-y-0.5 active:scale-98 shadow-sm ${bg}`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/[0.08] flex-shrink-0 ${color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</p>
                    <p className={`text-xs sm:text-sm font-bold ${color} truncate mt-0.5`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability message */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 mt-2 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Currently Available For</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'IT Support Roles & Technical Problem-Solving',
                  'Junior Software Engineer / Developer Roles',
                  'Mobile (Android / Flutter) & Web (React / Node.js) Projects',
                  'Software Engineering Internships',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <CheckCircle size={15} className="text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-xl">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Message Ready!</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
                  Your mail client has been opened with your message. Send it away and I'll get back to you promptly!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs sm:text-sm font-semibold transition shadow-lg shadow-indigo-600/30 active:scale-95 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Send a Direct Message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-slate-100 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition duration-200 ${errors.name ? 'border-rose-500/70 bg-rose-500/5' : 'border-white/[0.1] focus:border-indigo-500/50 hover:border-white/20'}`}
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-slate-100 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition duration-200 ${errors.email ? 'border-rose-500/70 bg-rose-500/5' : 'border-white/[0.1] focus:border-indigo-500/50 hover:border-white/20'}`}
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-white/20 focus:border-indigo-500/50 text-slate-100 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition duration-200"
                />

                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-slate-100 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition duration-200 resize-none ${errors.message ? 'border-rose-500/70 bg-rose-500/5' : 'border-white/[0.1] focus:border-indigo-500/50 hover:border-white/20'}`}
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-sm font-semibold shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer mt-1"
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
