import { CheckCircle2, Users, Award, Clock, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: '전문 인력 상주 지원',
    desc: 'DA/DBA 전문 인력이 현장에 상주하며 실시간 기술 지원을 제공합니다.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '검증된 방법론',
    desc: '축적된 경험과 검증된 방법론을 기반으로 체계적인 데이터 아키텍처를 구축합니다.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '신속한 이슈 대응',
    desc: '장애 발생 시 신속한 원인 분석과 해결 방안을 제시하여 업무 연속성을 보장합니다.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '맞춤형 솔루션',
    desc: '비즈니스 요구사항에 맞는 최적의 데이터 아키텍처 솔루션을 설계합니다.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: '지속적 성능 모니터링',
    desc: '정기적인 성능 점검과 튜닝을 통해 안정적인 시스템 운영을 지원합니다.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: '표준화 및 문서화',
    desc: '모든 작업 결과에 대한 표준화된 문서를 제공하여 지식 자산을 구축합니다.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-hanjin-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-hanjin-sky text-hanjin-blue text-sm font-semibold rounded-full mb-4">
              핵심 역량
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              왜 한진 DA 기술 지원<br />서비스를 선택해야 할까요?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              풍부한 프로젝트 경험과 전문 역량을 갖춘 인력이 데이터 아키텍처 전 영역에서
              최고 수준의 기술 지원을 제공합니다.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-extrabold text-hanjin-blue">15+</div>
                <div className="text-xs text-gray-500 mt-1">년 업력</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-extrabold text-hanjin-blue">200+</div>
                <div className="text-xs text-gray-500 mt-1">프로젝트 수행</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-extrabold text-hanjin-blue">98%</div>
                <div className="text-xs text-gray-500 mt-1">고객 만족도</div>
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-lg bg-hanjin-sky flex items-center justify-center text-hanjin-blue mb-3">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
