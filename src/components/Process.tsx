import { ClipboardList, Search, PenTool, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    step: '01',
    title: '요구사항 분석',
    desc: '비즈니스 요구사항과 현행 시스템을 분석하여 과제를 정의합니다.',
    details: ['업무 요건 수집', '현행 시스템 분석', '과제 정의서 작성'],
  },
  {
    icon: <Search className="w-6 h-6" />,
    step: '02',
    title: '아키텍처 진단',
    desc: '현행 데이터 아키텍처의 문제점을 진단하고 개선 방향을 도출합니다.',
    details: ['데이터 모델 진단', '데이터 흐름 분석', '품질 현황 파악'],
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    step: '03',
    title: '설계 및 구축',
    desc: 'To-Be 데이터 아키텍처를 설계하고 구축합니다.',
    details: ['표준 체계 수립', '모델 설계/구축', '마이그레이션 계획'],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    step: '04',
    title: '적용 및 검증',
    desc: '설계된 아키텍처를 실제 환경에 적용하고 검증합니다.',
    details: ['테스트/검증', '성능 최적화', '안정화 지원'],
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    step: '05',
    title: '운영 지원',
    desc: '지속적인 운영 기술 지원과 성능 모니터링을 수행합니다.',
    details: ['상시 기술 지원', '정기 점검', '개선 과제 발굴'],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-hanjin-sky text-hanjin-blue text-sm font-semibold rounded-full mb-4">
            지원 프로세스
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            체계적인 기술 지원 프로세스
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            검증된 방법론을 기반으로 단계별 체계적인 기술 지원을 수행합니다.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-hanjin-blue/20 via-hanjin-blue/40 to-hanjin-blue/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                {/* Step Card */}
                <div className="bg-white border-2 border-gray-100 group-hover:border-hanjin-blue/30 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-50">
                  {/* Step Number Circle */}
                  <div className="relative mx-auto w-14 h-14 rounded-full bg-hanjin-sky flex items-center justify-center text-hanjin-blue mb-4 group-hover:bg-hanjin-blue group-hover:text-white transition-colors duration-300 z-10">
                    {s.icon}
                  </div>
                  <div className="text-xs font-bold text-hanjin-accent mb-2">STEP {s.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-1.5">
                    {s.details.map((d, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-hanjin-blue/30" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
