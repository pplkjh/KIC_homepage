/*
 * Home Page - ECOTech Eco-Friendly & Warm Design
 * Focus: Sustainability, warmth, accessibility, and natural growth
 * Color scheme: Light warm background with natural green and earth tones
 */

import { useState, useEffect } from "react";
import { ChevronRight, Globe, Package, Code, Zap, Building2, TrendingUp, Leaf, ArrowRight, Sprout } from "lucide-react";
import Navbar from "@/components/Navbar";

const businessAreas = [
  {
    icon: Package,
    title: "수출입 및 도소매",
    description: "원자재, 상품, 기계 등 글로벌 무역 네트워크 구축",
    vision: "지속 가능한 국제 거래",
    color: "#2D8659",
  },
  {
    icon: Globe,
    title: "전자상거래",
    description: "온라인 판매 및 디지털 마케팅 플랫폼",
    vision: "디지털로 연결된 세상",
    color: "#D4A574",
  },
  {
    icon: Code,
    title: "정보통신 소프트웨어",
    description: "프로그래밍 및 IT 솔루션 개발",
    vision: "기술로 만드는 미래",
    color: "#2D8659",
  },
  {
    icon: Zap,
    title: "반도체 포장 장비",
    description: "포장자재 및 반도체 장비 수출입",
    vision: "정밀한 기술 파트너",
    color: "#D4A574",
  },
  {
    icon: Building2,
    title: "부동산 입대업",
    description: "전문적인 부동산 중개 및 관리 서비스",
    vision: "신뢰의 공간 창조",
    color: "#2D8659",
  },
  {
    icon: TrendingUp,
    title: "마케팅 및 전시",
    description: "홍보, 전시, 마케팅 컨설팅 서비스",
    vision: "브랜드와 함께 성장",
    color: "#D4A574",
  },
];

const additionalServices = [
  {
    icon: Leaf,
    title: "플랜트 수출",
    description: "산업용 플랜트 설계 및 수출",
    vision: "친환경 산업 구축",
    color: "#2D8659",
  },
  {
    icon: Sprout,
    title: "플랜트 컨설팅",
    description: "전문적인 플랜트 컨설팅 서비스",
    vision: "함께 성장하는 파트너",
    color: "#2D8659",
  },
];

const visionPoints = [
  {
    title: "친환경 가치",
    description: "지속 가능한 비즈니스를 통해 환경과 사회에 긍정적인 영향을 미칩니다.",
  },
  {
    title: "신뢰의 파트너",
    description: "고객과 함께 성장하며, 투명하고 정직한 거래를 추구합니다.",
  },
  {
    title: "기술 혁신",
    description: "새로운 기술을 통해 더 나은 솔루션을 제공합니다.",
  },
  {
    title: "전문성",
    description: "각 분야의 깊이 있는 경험과 지식으로 맞춤형 서비스를 제공합니다.",
  },
];

function VisionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group bg-white border border-[#2D8659]/20 p-8 rounded-lg hover:border-[#2D8659]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#2D8659]/10">
      <div className="flex items-start gap-4">
        <div className="w-2 h-2 rounded-full bg-[#2D8659] mt-2 group-hover:scale-150 transition-transform" />
        <div>
          <h3
            className="text-lg font-bold mb-2 text-[#2C2C2C]"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="text-gray-600 text-sm leading-relaxed"
            style={{ fontFamily: "Noto Sans KR, sans-serif" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#2C2C2C] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559062373/6PkbiX5sXEC8bHAdezvwj7/hero-bg-ZM5KHjMAwuyNt3pXrn9F8T.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.15,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/80 via-[#FAFAF8]/60 to-[#FAFAF8] z-10" />

        {/* Content */}
        <div className="relative z-20 container text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 inline-block">
            <span
              className="section-label px-4 py-2 rounded-full border border-[#2D8659]/30 bg-[#2D8659]/10"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              함께 만드는 지속 가능한 미래
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <span style={{ color: "#2D8659" }}>ECO</span>
            <span style={{ color: "#D4A574" }}>Tech</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-700 font-light tracking-wide">
              신뢰할 수 있는 파트너
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Noto Sans KR, sans-serif" }}
          >
            수출입, 전자상거래, IT 소프트웨어, 반도체 장비, 부동산, 마케팅, 플랜트 컨설팅
            <br />
            다양한 분야에서 고객과 함께 성장하고 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const target = document.querySelector("#services");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-[#2D8659] text-white font-semibold rounded-lg hover:bg-[#1F5A3F] transition-all duration-200 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg"
              style={{ fontFamily: "Noto Sans KR, sans-serif" }}
            >
              사업 영역 살펴보기
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const target = document.querySelector("#contact");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 border-2 border-[#2D8659] text-[#2D8659] font-semibold rounded-lg hover:bg-[#2D8659]/10 transition-all duration-200"
              style={{ fontFamily: "Noto Sans KR, sans-serif" }}
            >
              문의하기
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#2D8659] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#2D8659] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <span
              className="section-label mb-4 block"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              우리의 가치
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-[#2C2C2C]"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              함께 만드는 긍정적인 변화
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Noto Sans KR, sans-serif" }}
            >
              ECOTech는 친환경 가치와 신뢰를 바탕으로 고객과 함께 성장합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visionPoints.map((point, idx) => (
              <VisionCard key={idx} title={point.title} description={point.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-[#FAFAF8] relative">
        <div className="container">
          <div className="text-center mb-16">
            <span
              className="section-label mb-4 block"
              style={{ fontFamily: "Source Sans 3, sans-serif" }}
            >
              사업 영역
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-[#2C2C2C]"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              다양한 분야에서 함께합니다
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Noto Sans KR, sans-serif" }}
            >
              각 분야에서 전문성을 바탕으로 고객의 성공을 지원합니다.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {businessAreas.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="service-card bg-white p-8 rounded-lg"
                  style={{
                    borderLeftColor: service.color,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon size={24} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-[#2C2C2C]"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm mb-4 leading-relaxed"
                    style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p
                      className="text-xs font-semibold flex items-center gap-2"
                      style={{ color: service.color, fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                      {service.vision}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {additionalServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="service-card bg-white p-8 rounded-lg"
                  style={{
                    borderLeftColor: service.color,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon size={24} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-[#2C2C2C]"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm mb-4 leading-relaxed"
                    style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p
                      className="text-xs font-semibold flex items-center gap-2"
                      style={{ color: service.color, fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                      {service.vision}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden group order-2 md:order-1 shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663559062373/6PkbiX5sXEC8bHAdezvwj7/about-bg-K2mVy3CsXLtN7PCWvqWPVU.webp"
                alt="ECOTech 비전"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <span
                className="section-label mb-4 block"
                style={{ fontFamily: "Source Sans 3, sans-serif" }}
              >
                ECOTech 소개
              </span>

              <h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#2C2C2C]"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                <span className="ecotech-green-line">신뢰할 수 있는 파트너</span>
                <br />
                <span className="text-gray-600">고객과 함께 성장합니다</span>
              </h2>

              <p
                className="text-gray-700 text-lg mb-6 leading-relaxed"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                ECOTech는 국제 무역, 디지털 마케팅, IT 솔루션, 첨단 산업 장비, 부동산, 마케팅 컨설팅, 플랜트 사업 등 다양한 분야에서 고객과 함께 성장하는 기업입니다.
              </p>

              <p
                className="text-gray-600 text-base mb-8 leading-relaxed"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                친환경 가치와 신뢰를 바탕으로, 투명하고 정직한 거래를 추구합니다. 각 분야의 전문성을 바탕으로 고객의 성공을 함께 만들어가고 있습니다.
              </p>

              <button
                onClick={() => {
                  const target = document.querySelector("#contact");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-[#2D8659] font-semibold hover:gap-3 transition-all group"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                더 알아보기
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-[#FAFAF8] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span
                className="section-label mb-4 block"
                style={{ fontFamily: "Source Sans 3, sans-serif" }}
              >
                연락처
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4 text-[#2C2C2C]"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                ECOTech와 함께하세요
              </h2>
              <p
                className="text-gray-600 text-lg"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                언제든지 편하게 연락주세요. 함께 성장할 기회를 만들어가겠습니다.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Company Info */}
              <div className="bg-white p-8 rounded-lg border border-[#2D8659]/20 shadow-md">
                <h3
                  className="text-xl font-bold mb-6 text-[#2D8659]"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  회사 정보
                </h3>
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      회사명
                    </p>
                    <p
                      className="text-[#2C2C2C] font-semibold"
                      style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                    >
                      주식회사 에코테크
                    </p>
                    <p
                      className="text-gray-600 text-sm"
                      style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                    >
                      ECO TECH Co., Ltd
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      대표
                    </p>
                    <p
                      className="text-[#2C2C2C] font-semibold"
                      style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                    >
                      신오석
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg border border-[#2D8659]/20 shadow-md">
                <h3
                  className="text-xl font-bold mb-6 text-[#2D8659]"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  연락처
                </h3>
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      주소
                    </p>
                    <p
                      className="text-[#2C2C2C] font-semibold"
                      style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                    >
                      경기도 김포시 황금로 273번길 15
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      전화
                    </p>
                    <a
                      href="tel:010-3005-9587"
                      className="text-[#2D8659] font-semibold hover:text-[#1F5A3F] transition-colors"
                      style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                    >
                      010-3005-9587
                    </a>
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Source Sans 3, sans-serif" }}
                    >
                      이메일
                    </p>
                    <a
                      href="mailto:sales@ecotech-korea.com"
                      className="text-[#2D8659] font-semibold hover:text-[#1F5A3F] transition-colors break-all"
                      style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                    >
                      sales@ecotech-korea.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-[#2D8659]/20 shadow-md">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="이름"
                    className="bg-[#FAFAF8] border border-gray-300 rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-gray-500 focus:outline-none focus:border-[#2D8659] transition-colors"
                    style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                  />
                  <input
                    type="email"
                    placeholder="이메일"
                    className="bg-[#FAFAF8] border border-gray-300 rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-gray-500 focus:outline-none focus:border-[#2D8659] transition-colors"
                    style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="제목"
                  className="w-full bg-[#FAFAF8] border border-gray-300 rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-gray-500 focus:outline-none focus:border-[#2D8659] transition-colors"
                  style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                />
                <textarea
                  placeholder="메시지"
                  rows={5}
                  className="w-full bg-[#FAFAF8] border border-gray-300 rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-gray-500 focus:outline-none focus:border-[#2D8659] transition-colors resize-none"
                  style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                />
                <button
                  type="submit"
                  className="w-full bg-[#2D8659] text-white font-semibold py-3 rounded-lg hover:bg-[#1F5A3F] transition-all duration-200 shadow-md hover:shadow-lg"
                  style={{ fontFamily: "Noto Sans KR, sans-serif" }}
                >
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                © 2024 ECO TECH Co., Ltd. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  const target = document.querySelector("#home");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-600 hover:text-[#2D8659] transition-colors text-sm"
                style={{ fontFamily: "Noto Sans KR, sans-serif" }}
              >
                맨 위로
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
