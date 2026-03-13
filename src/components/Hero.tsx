import { ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hanjin-blue via-hanjin-dark to-[#001a3a]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300 rounded-full blur-3xl" />
      </div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Data Architecture 전문 기술 지원
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              데이터 아키텍처
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                기술 지원 서비스
              </span>
            </h1>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              한진정보통신 (주) 의 데이터 아키텍처 설계, 구축, 운영 전반에 걸친
              전문 기술 지원 서비스를 제공합니다. 체계적인 데이터 관리와
              최적화된 아키텍처로 비즈니스 가치를 극대화합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-hanjin-blue font-semibold rounded-xl hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
              >
                서비스 알아보기
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition"
              >
                문의하기
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <StatCard icon={<Shield className="w-6 h-6" />} label="데이터 표준" value="99.5%" color="from-cyan-400 to-blue-500" />
                  <StatCard icon={<Zap className="w-6 h-6" />} label="시스템 성능" value="3x 향상" color="from-green-400 to-emerald-500" />
                  <StatCard icon={<BarChart3 className="w-6 h-6" />} label="운영 효율" value="40% ↑" color="from-purple-400 to-indigo-500" />
                  <StatCard icon={<Database className="w-6 h-6" />} label="데이터 품질" value="A+ 등급" color="from-orange-400 to-red-500" />
                </div>
                {/* Mini Architecture Diagram */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-xs text-white/60 mb-3 font-medium">데이터 아키텍처 구성도</div>
                  <div className="flex items-center justify-between gap-2">
                    {['소스 시스템', 'ETL/ELT', '데이터 웨어하우스', '분석/활용'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-[10px] text-white/80 text-center leading-tight font-medium">
                          {item}
                        </div>
                        {i < 3 && (
                          <svg className="w-4 h-4 text-cyan-300/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-xl border">
                <div className="text-xs text-gray-500">기술 지원 건수</div>
                <div className="text-xl font-bold text-hanjin-blue">1,200+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${color} text-white mb-2`}>
        {icon}
      </div>
      <div className="text-xs text-white/60">{label}</div>
      <div className="text-lg font-bold text-white">{value}</div>
    </div>
  );
}

function Database(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}
