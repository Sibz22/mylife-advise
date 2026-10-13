import Velaris from './ui/velaris';

export default function Footer() {
  const companyLinks = [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Newsroom', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const investmentLinks = [
    { label: 'Global Stocks', href: '#' },
    { label: 'ETFs', href: '#' },
    { label: 'Mutual Funds', href: '#' },
    { label: 'Bonds', href: '#' },
    { label: 'Structured Products', href: '#' },
  ];

  const resourceLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  return (
    <footer className="relative bg-brand-dark text-white pt-24 pb-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Velaris 
          height="100%" 
          className="w-full h-full opacity-70" 
          bg="#17100f"
          colors={["#1684f9", "#7a1f23", "#17100f", "#f73c42"]}
          speed={3.5}
          grain={0.15}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Left panel: Newsletter signup & Social links */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="font-sans max-w-md">
              <h3 className="text-3xl sm:text-4xl font-display font-medium mb-4">
                Stay Updated with Global Market Insights
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Receive investment news, market trends, and expert insights directly in your inbox.
              </p>

              {/* Form Input */}
              <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-sm flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white text-brand-dark px-6 py-4 rounded-full text-sm font-medium border-0 focus:outline-none pr-32 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-5 bg-brand-orange text-white rounded-full font-bold text-sm hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <span className="font-sans text-xl font-semibold tracking-wide block mb-4 uppercase">
                Follow us on
              </span>
              <div className="flex flex-wrap items-center gap-6 text-gray-400 font-sans text-sm">
                {/* Facebook */}
                <a href="#facebook" className="group flex items-center gap-2 hover:text-white transition duration-200">
                  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>

                {/* Instagram */}
                <a href="#instagram" className="group flex items-center gap-2 hover:text-white transition duration-200">
                  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>

                {/* Twitter / X */}
                <a href="#twitter" className="group flex items-center gap-2 hover:text-white transition duration-200">
                  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>

                {/* LinkedIn */}
                <a href="#linkedin" className="group flex items-center gap-2 hover:text-white transition duration-200">
                  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Categorized links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-base font-sans">
            {/* Company */}
            <div>
              <span className="font-display font-medium text-lg text-white block mb-6">Company</span>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investments */}
            <div>
              <span className="font-display font-medium text-lg text-white block mb-6">Investments</span>
              <ul className="space-y-4">
                {investmentLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <span className="font-display font-medium text-lg text-white block mb-6">Resources</span>
              <ul className="space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 text-center text-gray-500 font-sans text-sm">
          <p>© 2026. All rights reserved.</p>
        </div>
      </div>

      {/* Huge Watermark Graphic — fully visible below copyright */}
      <div className="w-full flex justify-center select-none pointer-events-none mt-12 px-4 sm:px-6 lg:px-8 mb-[-40px] relative z-10 opacity-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 405 54"
          className="w-full max-w-7xl h-auto"
          aria-label="NewLife Advise Watermark"
        >
          <path
            fill="#fff"
            d="M61.2,30.8c-2.2-2.3-5.2-3.4-8.9-3.4s-4.5.5-6.3,1.5c-1.8,1-3.2,2.4-4.2,4.2-2-3.8-5.5-5.7-10.5-5.7s-6.8,1.1-8.9,3.4c-2.2,2.3-3.3,5.5-3.3,9.8v13.5h3.5v-13.5c0-3.2.7-5.7,2.2-7.4,1.4-1.7,3.6-2.6,6.6-2.6s4.8.8,6.3,2.5,2.4,4.1,2.5,7.2v13.7h3.4v-13.8c0-3.3.8-5.7,2.3-7.3,1.5-1.6,3.7-2.4,6.5-2.4s5.1.9,6.6,2.6c1.5,1.7,2.2,4.2,2.2,7.4v13.5h3.4v-13.5c0-4.2-1.1-7.5-3.3-9.8ZM100,28.4c0-.1-.2-.2-.4-.2h-2.5c-.4,0-.7.2-.9.6l-10.6,23.9-10.6-23.9c-.2-.4-.5-.6-.9-.6h-2.5c-.1,0-.2,0-.4.2,0,0,0,.1,0,.2s0,.1,0,.2l11.1,25.2h6.5l11.2-25.2c0,0,0-.1,0-.2s0-.1,0-.2ZM110.3,6.6h-2.1c-.5,0-.7.2-.7.7v46.7h3.5V7.3c0-.4-.2-.7-.7-.7ZM125.5,16.9c-.6-.6-1.3-.9-2.2-.9s-1.6.3-2.1.9c-.6.6-.9,1.3-.9,2.2s.3,1.7.9,2.2c.6.5,1.3.8,2.2.8s1.5-.3,2.1-.9c.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.2ZM124.4,28.2h-2.2c-.4,0-.6.2-.6.6v25.1h3.4v-25.1c0-.4-.2-.6-.6-.6ZM153.6,9c-2.1-2-4.5-3-7.2-3s-5.2.9-7,2.6c-1.7,1.7-2.6,4.2-2.6,7.7v12h-4.1c-.4,0-.6.2-.6.6v1.7c0,.4.2.7.6.7h4.1v22.8h3.4v-22.8h9.2c.4,0,.6-.2.6-.7v-1.7c0-.4-.2-.6-.6-.6h-9.2v-12.2c0-1.3.2-2.4.6-3.3.4-.9.9-1.6,1.5-2.1.6-.4,1.3-.8,2-1,.7-.2,1.4-.3,2.1-.3,2,0,3.7.6,5.3,1.9.4.3.7.3,1-.1l1-1.3c.2-.2.2-.3.2-.5s0-.3-.2-.5ZM183,52l-1.9-1c-.4-.2-.7,0-1,.2-1.1,1.3-2.6,2.2-4.3,2.8h6.2c.4-.4.8-.8,1.1-1.2.3-.3.2-.5-.1-.8ZM182.3,31.3c-2.8-2.6-6.4-4-10.8-4s-8,1.3-10.8,4c-2.8,2.7-4.2,6.4-4.2,11.2s1.4,8.6,4.2,11.3c0,0,.1.1.2.2h6.2c-1.5-.5-2.8-1.3-3.9-2.3-2-2-3.1-4.8-3.2-8.3h25.8c.4,0,.6-.2.6-.7h0c0-5-1.4-8.7-4.2-11.4ZM160.2,40.4c.4-3.1,1.6-5.5,3.6-7.2,2-1.7,4.6-2.6,7.8-2.6s5.8.9,7.8,2.6c2,1.8,3.2,4.2,3.6,7.2h-22.7Z"
          />
          <path
            fill="#fff"
            d="M228.2,30.8c-2.8-2.7-6.4-4.1-10.7-4.1s-7.9,1.4-10.7,4.2c-2.8,2.8-4.3,6.5-4.3,11s1.3,7.9,4,10.8c.4.5.8.9,1.3,1.2h7.9c-2.7-.3-4.9-1.4-6.6-3.2-2.1-2.2-3.1-5.2-3.1-8.8s1-6.5,3.1-8.7c2-2.2,4.9-3.3,8.4-3.3s6.5,1.1,8.5,3.2c2,2.2,3,5.1,3,8.8s-1,6.6-3.1,8.8c-1.7,1.8-3.9,2.9-6.6,3.2h7c1-.9,1.9-1.9,2.7-3.1v3.1h3.4v-12c0-4.7-1.4-8.5-4.2-11.2ZM268.9,6h-2.2c-.4,0-.6.2-.6.7v25.9c-2.6-3.9-6.5-5.8-11.8-5.8s-7.8,1.4-10.6,4.1c-2.7,2.7-4.1,6.5-4.1,11.1s1.4,8.2,4.3,11c.4.4.8.7,1.1,1h19.1c.4-.3.8-.6,1.1-1,2.8-2.8,4.2-6.5,4.2-11.1V6.7c0-.4-.2-.7-.6-.7ZM263,50.6c-2.1,2.2-4.9,3.3-8.4,3.3s-6.3-1.1-8.4-3.3c-2.1-2.2-3.1-5.1-3.1-8.7s1-6.7,3.1-8.9c2-2.2,4.8-3.3,8.4-3.3s6.4,1.1,8.5,3.3c2,2.2,3.1,5.1,3.1,8.9s-1,6.5-3.1,8.7ZM304.6,27.8c0-.1-.2-.2-.4-.2h-2.5c-.4,0-.7.2-.9.6l-10.1,24-10.2-24c-.1-.4-.4-.6-.8-.6h-2.5c-.3,0-.4.1-.4.4v.2l11,25.9h5.8l11-25.9c0,0,0-.1,0-.2s0-.1,0-.2ZM316.5,16.2c-.6-.6-1.3-.8-2.1-.8s-1.6.3-2.1.8-.9,1.3-.9,2.2.3,1.7.9,2.2c.6.5,1.3.8,2.2.8s1.5-.3,2.1-.9.9-1.3.9-2.1-.3-1.6-.9-2.2ZM315.5,27.6h-2.2c-.4,0-.6.2-.6.6v25.8h3.4v-25.8c0-.4-.2-.6-.6-.6ZM348.2,45.8c-.5-.9-1-1.6-1.7-2.1-.7-.6-1.5-1.1-2.6-1.5-1-.4-2-.8-3-1-.9-.3-2-.5-3.1-.7-.2,0-.4,0-.6-.1-1.4-.3-2.4-.5-3-.7-.6-.2-1.3-.4-2.2-.8-.9-.4-1.5-.8-1.8-1.3-.3-.5-.5-1.2-.5-1.9,0-1.2.3-2.1.8-2.9.5-.8,1.3-1.4,2.2-1.7.9-.4,1.8-.6,2.6-.8.8-.1,1.7-.2,2.7-.2,3.8,0,6.3,1.5,7.7,4.2.3.4.6.5.9.3l1.7-.6c.3-.2.5-.5.3-.8-1.8-4.1-5.4-6.1-10.8-6.2-1.5,0-2.9.2-4.3.5-1.3.3-2.6.8-3.7,1.5-1.1.7-2,1.6-2.7,2.7-.7,1.2-1,2.5-1,4s.1,1.6.4,2.2c.2.7.6,1.3.9,1.8.4.5.9.9,1.5,1.4.7.4,1.2.7,1.7,1,.5.2,1.2.5,2.1.7.9.2,1.6.4,2.1.5.5.1,1.2.3,2.2.4.1,0,.4,0,.7.1,1.8.4,3.1.7,4,1,.9.3,1.7.8,2.5,1.5.8.7,1.2,1.6,1.2,2.7s-.3,1.9-.8,2.7-1.3,1.3-2.2,1.7c-.9.4-1.8.6-2.7.8-.3,0-.6,0-.8.1h8c.4-.4.7-.9,1-1.4.7-1.1,1-2.5,1-4s-.2-2-.7-2.9ZM329.1,49.9c-.3-.4-.6-.5-.9-.4l-1.6.7c-.4.2-.5.5-.4.9.4,1.1,1.1,2.1,1.9,3h7.4c-1-.1-2.1-.5-3.1-1-1.5-.7-2.6-1.8-3.3-3.1ZM382.4,30.7c-2.8-2.7-6.4-4-10.8-4s-8,1.3-10.8,4c-2.8,2.7-4.2,6.4-4.2,11.2s1.4,8.6,4.2,11.3c.3.3.6.6.9.8h9.8c-3.5,0-6.2-1-8.2-3-2-2-3.1-4.8-3.2-8.3h25.8c.4,0,.6-.2.6-.7h0c0-5-1.4-8.7-4.2-11.4ZM360.3,39.7c.4-3.1,1.6-5.5,3.5-7.2,2-1.7,4.6-2.6,7.8-2.6s5.8.9,7.8,2.6c2,1.8,3.2,4.2,3.6,7.2h-22.7ZM383.3,52.2c.2-.3.2-.5-.1-.8l-1.9-1c-.4-.2-.7,0-1,.2-2,2.3-4.9,3.4-8.6,3.4h9.9c.6-.5,1.2-1.2,1.8-1.8Z"
          />
        </svg>
      </div>
    </footer>
  );
}
