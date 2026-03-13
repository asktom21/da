import { Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-hanjin-blue flex items-center justify-center text-white">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold">한진정보통신 (주)</div>
                <div className="text-xs text-gray-500">Data Architecture</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              체계적인 데이터 아키텍처 설계와 전문 기술 지원으로
              고객의 데이터 경쟁력을 강화합니다.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">서비스</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-white transition">데이터 모델링</a></li>
              <li><a href="#services" className="hover:text-white transition">데이터 표준 관리</a></li>
              <li><a href="#services" className="hover:text-white transition">데이터 품질 관리</a></li>
              <li><a href="#services" className="hover:text-white transition">DB 성능 최적화</a></li>
              <li><a href="#services" className="hover:text-white transition">데이터 거버넌스</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">기술 지원</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#process" className="hover:text-white transition">지원 프로세스</a></li>
              <li><a href="#techstack" className="hover:text-white transition">기술 스택</a></li>
              <li><a href="#features" className="hover:text-white transition">핵심 역량</a></li>
              <li><a href="#contact" className="hover:text-white transition">상담 문의</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">연락처</h4>
            <ul className="space-y-2.5 text-sm">
              <li>서울특별시 중구 남대문로 63</li>
              <li>TEL: 02-728-5114</li>
              <li>Email: da-support@hanjin.co.kr</li>
              <li>업무시간: 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} 한진정보통신 (주) Data Architecture 기술 지원 서비스. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-300 transition">이용약관</a>
            <a href="#" className="hover:text-gray-300 transition">사이트맵</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
