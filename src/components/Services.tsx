import {
  Database, GitBranch, Shield, Settings, BarChart3,
  FileSearch, Layers, RefreshCw
} from 'lucide-react';

const services = [
  {
    icon: <Database className="w-7 h-7" />,
    title: '데이터 모델링',
    desc: '개념/논리/물리 데이터 모델 설계 및 표준화를 통해 일관성 있는 데이터 구조를 수립합니다.',
    tags: ['ERD 설계', '정규화', '반정규화'],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: '데이터 표준 관리',
    desc: '전사 데이터 표준 수립 및 관리 체계를 구축하여 데이터 일관성과 품질을 확보합니다.',
    tags: ['표준 용어', '도메인', '코드 관리'],
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    title: '데이터 흐름 설계',
    desc: '시스템 간 데이터 흐름을 분석하고 최적의 데이터 이동 경로를 설계합니다.',
    tags: ['ETL/ELT', '데이터 파이프라인', 'CDC'],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: '데이터 품질 관리',
    desc: '데이터 품질 기준 정의, 프로파일링, 클렌징을 통해 신뢰할 수 있는 데이터를 보장합니다.',
    tags: ['품질 진단', '오류 분석', '개선 관리'],
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: '데이터 거버넌스',
    desc: '데이터 관리 정책, 조직, 프로세스를 정립하여 체계적인 데이터 거버넌스를 구현합니다.',
    tags: ['정책 수립', '역할 정의', '메타데이터'],
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: 'DB 성능 최적화',
    desc: 'SQL 튜닝, 인덱스 최적화, 파티셔닝 전략을 통해 데이터베이스 성능을 극대화합니다.',
    tags: ['SQL 튜닝', '인덱스', '파티셔닝'],
  },
  {
    icon: <FileSearch className="w-7 h-7" />,
    title: '데이터 아키텍처 진단',
    desc: '현행 데이터 아키텍처를 진단하고 개선 과제를 도출하여 To-Be 아키텍처를 수립합니다.',
    tags: ['현행 분석', '갭 분석', 'To-Be 설계'],
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: '데이터 마이그레이션',
    desc: '시스템 전환 시 데이터 이행 전략 수립부터 검증까지 전 과정을 지원합니다.',
    tags: ['이행 전략', '매핑 설계', '검증 체계'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-hanjin-sky text-hanjin-blue text-sm font-semibold rounded-full mb-4">
            서비스 소개
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Data Architecture 기술 지원 서비스
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            한진정보통신 (주) 의 데이터 아키텍처 전 영역에 걸친 전문 기술 지원 서비스를 제공합니다.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-hanjin-blue/30 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-hanjin-sky flex items-center justify-center text-hanjin-blue mb-5 group-hover:bg-hanjin-blue group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 text-[11px] font-medium bg-gray-100 text-gray-500 rounded-md group-hover:bg-hanjin-sky group-hover:text-hanjin-blue transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
