# KIC Industrial — Shopify Theme v1.0.0

> 🇰🇷 KIC (Korea Industrial Company) — Global B2B PP Strapping Manufacturer  
> **English-first, RFQ-only, manufacturing-trustworthy homepage**

---

## 📋 프로젝트 개요

**KIC Industrial Theme**은 PP Band / PP Strapping 글로벌 B2B 제조사를 위한 Shopify 커스텀 테마입니다.  
- **언어**: English (1차 오픈) → 추후 다국어 확장 예정
- **판매 모델**: RFQ Only (가격 비공개, 견적 요청 방식)
- **타겟**: 글로벌 B2B 구매자 (logistics, agriculture, steel, paper, textile, wood)
- **기반**: Shopify Liquid + JSON templates + Sections 아키텍처

---

## 📁 디렉토리 구조

```
kic-industrial-theme/
├── layout/
│   └── theme.liquid              # 메인 레이아웃 (HTML 기본 구조)
│
├── templates/
│   ├── index.json                # 홈페이지 (JSON template)
│   ├── collection.json           # 상품 컬렉션 페이지
│   ├── product.json              # 상품 상세 페이지
│   ├── page.json                 # 일반 페이지
│   ├── page.contact.json         # 연락처 페이지 (RFQ 포함)
│   └── blog.json                 # 블로그 목록 페이지
│
├── sections/
│   ├── header-group.json         # 헤더 섹션 그룹
│   ├── footer-group.json         # 푸터 섹션 그룹
│   ├── announcement-bar.liquid   # 상단 공지바
│   ├── header.liquid             # 글로벌 헤더 + 네비게이션
│   ├── footer.liquid             # 글로벌 푸터
│   ├── hero-banner.liquid        # 메인 히어로 배너
│   ├── stats-bar.liquid          # 수치 통계 바
│   ├── about-intro.liquid        # 회사 소개
│   ├── featured-products.liquid  # 주요 제품 그리드
│   ├── industries.liquid         # 산업별 적용 분야
│   ├── why-kic.liquid            # KIC 차별점/가치
│   ├── company-history.liquid    # 회사 연혁 타임라인
│   ├── certifications.liquid     # 인증/품질 섹션
│   ├── rfq-section.liquid        # RFQ 문의 폼 섹션
│   └── blog-preview.liquid       # 블로그 미리보기
│
├── snippets/
│   ├── rfq-modal.liquid          # 글로벌 RFQ 팝업 모달
│   ├── meta-tags.liquid          # SEO 메타태그 + 구조화 데이터
│   └── cookie-banner.liquid      # 쿠키 동의 배너
│
├── assets/
│   ├── theme.css                 # 메인 CSS (전체 스타일)
│   └── theme.js                  # 메인 JavaScript
│
├── config/
│   ├── settings_schema.json      # 테마 설정 스키마
│   └── settings_data.json        # 테마 설정 기본값
│
└── locales/
    └── en.default.json           # 영문 텍스트 번역 파일
```

---

## 🏗️ 홈페이지 섹션 구성 (index.json 기준)

| 순서 | 섹션 | 설명 |
|------|------|------|
| 1 | Hero Banner | 배경 이미지/영상 + RFQ CTA + 신뢰 배지 |
| 2 | Stats Bar | 50+ Years / 20+ Countries / ISO / 3rd Gen 수치 |
| 3 | About Intro | 회사 소개 + 이미지 + 핵심 포인트 |
| 4 | Featured Products | 제품 그리드 (RFQ Only 배지) |
| 5 | Industries | 6가지 산업별 적용 분야 카드 |
| 6 | Why KIC | 6가지 KIC 차별점/강점 |
| 7 | Company History | 1973~2023 연혁 타임라인 |
| 8 | Certifications | ISO, RoHS, 100% 재활용 PP 인증 |
| 9 | RFQ Section | 대형 RFQ 문의 폼 (B2B 전용) |
| 10 | Blog Preview | 주간 AI 블로그 포스트 미리보기 |

---

## 🚀 Shopify 업로드 방법

### 방법 1: Shopify Admin에서 직접 파일 업로드

1. Shopify Admin → **Online Store** → **Themes** 이동
2. 우측 상단 **Add theme** → **Upload zip file** 클릭
3. 이 테마 폴더를 **zip 압축** 후 업로드
4. 업로드 완료 후 **Customize** 버튼 클릭하여 설정 시작

### 방법 2: Shopify CLI (권장, 개발자용)

```bash
# Shopify CLI 설치
npm install -g @shopify/cli @shopify/theme

# 테마 디렉토리에서 실행
shopify theme push --store YOUR-STORE.myshopify.com

# 또는 개발 서버 실행 (실시간 미리보기)
shopify theme dev --store YOUR-STORE.myshopify.com
```

### 방법 3: Shopify Theme Editor API

```bash
# 기존 테마 다운로드 (백업용)
shopify theme pull --theme THEME_ID

# 새 테마로 푸시
shopify theme push --unpublished
```

---

## ⚙️ 초기 설정 체크리스트

### 필수 설정
- [ ] **로고 업로드**: Theme Editor → Header → Logo image
- [ ] **파비콘 설정**: Theme Editor → Theme Settings → Favicon
- [ ] **히어로 이미지 설정**: Hero Banner 섹션 → 배경 이미지 업로드
- [ ] **제품 컬렉션 연결**: Featured Products 섹션 → Collection 선택
- [ ] **블로그 연결**: Blog Preview 섹션 → Blog 선택
- [ ] **소셜 미디어 링크**: Theme Settings → Social media

### 연락처 정보 확인
- 전화: `+82-31-998-1740`
- 이메일: `sales@powerband.co.kr`
- 주소: `15, Hwanggeum-ro 273beon-gil, Yangchon-eup, Gimpo-si, Gyeonggi-do, Korea`

---

## 🛍️ 제품 설정 (RFQ Mode)

이 테마는 **RFQ(Request for Quote) Only** 모드로 설계되었습니다.

### 가격 비공개 설정
Shopify Admin → **Settings** → **Checkout** → "Require login" 체크 또는 앱을 사용하여 가격 숨김 처리:

**권장 앱:**
- [SA Request a Quote, Hide Price](https://apps.shopify.com/request-for-quote)
- [B2B Login/Lock & Hide Price](https://apps.shopify.com/b2b-login-lock-hide-price)
- [YouQuote: Request a Quote Form](https://apps.shopify.com/request-a-quote)

### 제품 카테고리 (컬렉션 핸들)
```
/collections/fully-auto-machine-grade    # 완전 자동 기계용
/collections/semi-auto-machine-grade     # 반자동 기계용
/collections/hand-grade                  # 수작업용
/collections/high-tension                # 고강도용
/collections/custom-printed              # 커스텀 인쇄
/collections/pe-tying-tape               # PE/HDPE 결속 테이프
/collections/buckles-seals               # 버클/씰
/collections/tensioners-tools            # 텐셔너/도구
```

---

## 📝 블로그 자동화 (AI 주간 포스트)

### 계획된 자동화 방식
매주 1회 PP Band / 플라스틱 포장 관련 AI 생성 블로그 자동 업로드

#### 추천 구현 방법

**방법 1: Shopify Flow + 외부 AI API**
```
Shopify Flow → Scheduled trigger (weekly)
→ HTTP Action → OpenAI/Claude API
→ Generate article content
→ Shopify Admin API → Create article
```

**방법 2: Make.com (Integromat) 자동화**
```
Schedule trigger (every Monday 9AM)
→ OpenAI GPT-4 module
→ Prompt: "Write a 600-word B2B article about PP strapping..."
→ Shopify module → Create blog article
```

**방법 3: Zapier 워크플로우**
```
Zapier Schedule → ChatGPT Action
→ Shopify Blog Post Action
→ Auto-publish with tags: ["weekly", "ai-generated", "pp-strapping"]
```

#### 권장 블로그 토픽 (AI 프롬프트 예시)
```
Week 1: "How to Choose PP Strap Width for Automated Packaging Lines"
Week 2: "PP Strapping vs Steel Strapping: ROI Comparison"
Week 3: "Understanding Breaking Strength in Polypropylene Strapping"
Week 4: "Sustainable Packaging: Why PP Strapping is Eco-Friendly"
```

---

## 🌐 다국어 확장 계획

1차: English ✅
2차: 한국어 (Korean)
3차: 中文 (Chinese Simplified)
4차: 日本語 (Japanese)
5차: Deutsch (German)
6차: Español (Spanish)
7차: Français (French)
8차: Italiano (Italian)

### Shopify Markets 설정
```
Shopify Admin → Markets → Add market
→ Add language
→ Publish markets
→ Set locale URLs (e.g., /ko/, /zh/, /ja/)
```

각 언어에 대한 `locales/` 파일 추가 필요:
- `locales/ko.json` — 한국어
- `locales/zh-CN.json` — 중국어 간체
- `locales/ja.json` — 일본어
- `locales/de.json` — 독일어

---

## 🤖 챗봇 통합 계획

추후 도입 예정 챗봇 솔루션:

**옵션 1: Tidio (B2B 추천)**
```html
<!-- layout/theme.liquid </body> 태그 위에 추가 -->
<script src="//code.tidio.co/YOUR_KEY.js" async></script>
```

**옵션 2: Intercom**
```javascript
// snippets에 intercom.liquid 파일 생성 후
// layout/theme.liquid에서 render 호출
```

**옵션 3: 커스텀 AI 챗봇 (향후)**
- RFQ 자동화 챗봇
- 제품 추천 기능
- 실시간 상담 연동

---

## 🎨 디자인 시스템

### 브랜드 컬러
| 변수 | 색상 | 용도 |
|------|------|------|
| `--kic-navy` | `#1a3a5c` | Primary / Header |
| `--kic-navy-dark` | `#0f2640` | Dark sections |
| `--kic-orange` | `#e8820c` | CTA / Accent |
| `--kic-light-bg` | `#f5f7fa` | Light backgrounds |
| `--kic-text-dark` | `#1a2332` | Body text |
| `--kic-text-mid` | `#4a5568` | Secondary text |

### 폰트
- **헤딩**: Playfair Display (serif, 고급스러운 제조업 느낌)
- **본문**: Inter (sans-serif, 가독성 최적)

### 버튼 클래스
```css
.btn--primary      /* Orange CTA 버튼 */
.btn--outline      /* Navy 아웃라인 버튼 */
.btn--outline-white /* 흰색 아웃라인 (히어로용) */
.btn--lg           /* 대형 */
.btn--sm           /* 소형 */
.btn--block        /* 전체 너비 */
```

---

## 📊 주요 기능

### ✅ 구현 완료
- [x] Shopify Liquid 테마 아키텍처 (layout, templates, sections)
- [x] 반응형 헤더 (메가 드롭다운 + 모바일 햄버거 메뉴)
- [x] Hero 배너 (이미지/비디오 배경 지원)
- [x] 통계 바 (카운터 애니메이션)
- [x] 회사 소개 섹션
- [x] 제품 그리드 (RFQ Only 모드)
- [x] 산업별 적용 분야 (6개 카드)
- [x] KIC 강점 6가지
- [x] 회사 연혁 타임라인
- [x] 인증/품질 섹션
- [x] RFQ 문의 폼 (인라인 + 팝업 모달)
- [x] 블로그 미리보기
- [x] 글로벌 푸터 (신뢰 바 + 링크 + 연락처)
- [x] 스크롤 애니메이션
- [x] SEO 메타태그 + 구조화 데이터 (JSON-LD)
- [x] 쿠키 동의 배너
- [x] Back to Top 버튼
- [x] 언어 선택 UI (다국어 확장 준비)
- [x] ISO 9001 신뢰 배지

### 🔲 추후 구현 예정
- [ ] 챗봇 통합
- [ ] 다국어 (한국어, 중국어, 일본어, 독일어 등)
- [ ] AI 블로그 자동 생성/게시
- [ ] 제품 카탈로그 PDF 다운로드
- [ ] 고객 샘플 요청 폼
- [ ] Shopify Markets 다국가 가격 설정
- [ ] 제품 비교 기능
- [ ] 영상 쇼케이스 섹션 (공장/제조 영상)

---

## 📬 연락처

- **회사**: (주)케이아이씨 (KIC — Korea Industrial Company)
- **대표**: 신충식
- **사업자등록번호**: 130-81-49773
- **주소**: 경기도 김포시 양촌읍 황금로 273번길 15
- **전화**: +82-31-998-1740
- **팩스**: +82-31-998-1743
- **이메일**: sales@powerband.co.kr
- **글로벌 사이트**: [8straps.com](https://8straps.com)
- **국내 사이트**: [powerband.co.kr](https://powerband.co.kr)

---

## 📄 라이선스

© 2024 KIC — Korea Industrial Company. All Rights Reserved.  
이 테마는 KIC 전용으로 제작되었습니다.
