import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ company: '', name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-hanjin-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-hanjin-sky text-hanjin-blue text-sm font-semibold rounded-full mb-4">
            문의하기
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            기술 지원 상담 문의
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            데이터 아키텍처 관련 기술 지원이 필요하시면 언제든지 문의해 주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-hanjin-blue to-hanjin-dark rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/60">회사</div>
                    <div className="font-semibold">한진정보통신 (주)</div>
                    <div className="text-sm text-white/70">Data Architecture 기술 지원팀</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/60">주소</div>
                    <div className="text-sm leading-relaxed">서울특별시 중구 남대문로 63<br />한진정보통신 (주) 본사</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/60">전화</div>
                    <div className="font-semibold">02-728-5114</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/60">이메일</div>
                    <div className="font-semibold">da-support@hanjin.co.kr</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/60">업무 시간</div>
                    <div className="text-sm">평일 09:00 - 18:00</div>
                    <div className="text-xs text-white/50 mt-0.5">긴급 장애 시 24시간 대응</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  문의가 성공적으로 접수되었습니다. 담당자가 빠른 시일 내 연락드리겠습니다.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">회사명</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="회사명을 입력하세요"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-hanjin-blue/20 focus:border-hanjin-blue outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">담당자명</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="이름을 입력하세요"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-hanjin-blue/20 focus:border-hanjin-blue outline-none transition"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">이메일</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="이메일을 입력하세요"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-hanjin-blue/20 focus:border-hanjin-blue outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">연락처</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="연락처를 입력하세요"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-hanjin-blue/20 focus:border-hanjin-blue outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">관심 서비스</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-hanjin-blue/20 focus:border-hanjin-blue outline-none transition text-gray-700 bg-white"
                  >
                    <option value="">서비스를 선택하세요</option>
                    <option value="modeling">데이터 모델링</option>
                    <option value="standard">데이터 표준 관리</option>
                    <option value="flow">데이터 흐름 설계</option>
                    <option value="quality">데이터 품질 관리</option>
                    <option value="governance">데이터 거버넌스</option>
                    <option value="tuning">DB 성능 최적화</option>
                    <option value="diagnosis">데이터 아키텍처 진단</option>
                    <option value="migration">데이터 마이그레이션</option>
                    <option value="etc">기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">문의 내용</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="문의 내용을 입력하세요"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-hanjin-blue/20 focus:border-hanjin-blue outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-hanjin-blue hover:bg-hanjin-dark text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  문의 접수하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
