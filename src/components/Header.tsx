import { useState } from 'react';
import { Menu, X, Database } from 'lucide-react';

const navLinks = [
  { label: '서비스 소개', href: '#services' },
  { label: '핵심 역량', href: '#features' },
  { label: '지원 프로세스', href: '#process' },
  { label: '기술 스택', href: '#techstack' },
  { label: '문의하기', href: '#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-hanjin-blue text-white shadow-md group-hover:shadow-lg transition-shadow">
              <Database className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-hanjin-blue leading-tight">한진정보통신 (주)</span>
              <span className="text-[10px] text-gray-500 leading-tight tracking-wide">Data Architecture 기술 지원</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-hanjin-blue hover:bg-hanjin-sky rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-hanjin-blue hover:bg-hanjin-dark rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              상담 신청
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-hanjin-blue hover:bg-hanjin-sky rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 text-sm font-semibold text-center text-white bg-hanjin-blue rounded-lg"
            >
              상담 신청
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
