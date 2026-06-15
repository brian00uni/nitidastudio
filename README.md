# NITIDA Studio

의료 로봇 기업 컨셉의 풀스크린 스크롤 랜딩 페이지. **Vite + React + TypeScript + SCSS** 기반.

> 현재 텍스트와 미디어(이미지/영상)는 모두 샘플 플레이스홀더입니다. 실제 콘텐츠로 교체해 사용하세요.

## 기술 스택

| 영역 | 사용 |
| --- | --- |
| 빌드 | Vite 8 |
| 프레임워크 | React 19 + TypeScript |
| 스타일 | SCSS (7-1 패턴, BEM 네이밍) |
| 린트 | ESLint |

## 시작하기

```bash
npm install        # 의존성 설치
npm run dev        # 개발 서버 (http://localhost:5173)
npm run build      # 타입체크 + 프로덕션 빌드 (dist/)
npm run preview    # 빌드 결과 미리보기
npm run lint       # ESLint
```

## 폴더 구조

```
nitidastudio/
├─ public/                     # 정적 파일 (favicon 등)
├─ src/
│  ├─ pages/                   # 페이지 단위 컴포넌트 (라우트 레벨)
│  │  └─ Home.tsx              #   섹션 컴포넌트를 조합한 메인 페이지
│  │
│  ├─ components/              # 재사용 UI / 섹션 컴포넌트
│  │  ├─ Header.tsx            #   고정 헤더 (네비 + 언어 토글)
│  │  ├─ Hero.tsx              #   풀스크린 히어로
│  │  ├─ Mission.tsx           #   미션 스테이트먼트
│  │  ├─ Technology.tsx        #   기술 소개 (이미지+텍스트 교차)
│  │  ├─ Features.tsx          #   핵심 특징 그리드
│  │  ├─ Stats.tsx             #   숫자 지표 밴드
│  │  ├─ News.tsx              #   뉴스 카드 그리드
│  │  ├─ Contact.tsx           #   컨택트 CTA
│  │  └─ Footer.tsx            #   푸터
│  │
│  ├─ data/                    # 콘텐츠 데이터 (UI와 분리)
│  │  └─ content.ts            #   모든 텍스트/이미지 경로를 한 곳에서 관리
│  │
│  ├─ assets/
│  │  └─ styles/               # SCSS (7-1 패턴으로 분리)
│  │     ├─ abstracts/         #   변수·믹스인 (CSS 출력 없음)
│  │     │  ├─ _variables.scss #     디자인 토큰 (색상/간격/폰트/브레이크포인트)
│  │     │  ├─ _mixins.scss    #     반응형·컨테이너·eyebrow 믹스인
│  │     │  └─ _index.scss     #     abstracts 전체 forward
│  │     ├─ base/              #   전역 기반 스타일
│  │     │  ├─ _reset.scss     #     리셋
│  │     │  └─ _base.scss      #     body/타이포 등 전역
│  │     ├─ components/        #   컴포넌트별 스타일 (파일 1:1 대응)
│  │     │  ├─ _ui.scss        #     공통 클래스 (.container/.btn/.section-head)
│  │     │  ├─ _header.scss
│  │     │  ├─ _hero.scss
│  │     │  └─ ... (섹션별 partial)
│  │     ├─ pages/             #   페이지 전용 스타일
│  │     │  └─ _home.scss
│  │     └─ main.scss          #   진입점 — 모든 partial을 @use로 취합
│  │
│  ├─ App.tsx                  # <Home /> 렌더
│  └─ main.tsx                 # 엔트리 (main.scss + App 로드)
│
├─ index.html
├─ vite.config.ts
└─ tsconfig*.json
```

## 컨벤션

프로젝트에서 새로 정의한 규칙입니다.

### 1. pages / components 분리
- **`pages/`** — 라우트/화면 단위. 섹션 컴포넌트를 조합하는 역할만 한다.
- **`components/`** — 재사용 가능한 UI 및 섹션 블록. 자체적으로 동작하며 데이터는 `data/`에서 가져온다.

### 2. 콘텐츠와 UI 분리
- 모든 카피·이미지 경로는 [`src/data/content.ts`](src/data/content.ts)에 모은다.
- 컴포넌트는 구조/스타일만 담당하고, 텍스트를 하드코딩하지 않는다.
- 실제 콘텐츠 교체 시 `content.ts`만 수정하면 된다.

### 3. SCSS — 7-1 패턴
- `abstracts` / `base` / `components` / `pages`로 역할을 분리한다.
- 컴포넌트 1개 ↔ `components/_*.scss` partial 1개로 대응시킨다.
- 모든 partial은 `@use '../abstracts' as *;`로 토큰·믹스인을 가져온다.
- 모든 partial은 [`main.scss`](src/assets/styles/main.scss)에서 `@use`로 취합한다 (다른 곳에서 직접 import 금지).

### 4. 디자인 토큰
- 색상·간격·폰트·그림자·브레이크포인트는 [`_variables.scss`](src/assets/styles/abstracts/_variables.scss)에만 정의한다.
- 값 하드코딩 대신 변수(`$color-accent` 등)와 믹스인(`@include respond(md)` 등)을 사용한다.

### 5. BEM 클래스 네이밍
- `block__element--modifier` 형식. 예: `.header__link`, `.btn--primary`, `.header--scrolled`.
- 컴포넌트 루트 클래스명은 컴포넌트/partial 이름과 일치시킨다 (`Header` ↔ `.header` ↔ `_header.scss`).

## 라이선스

Private.
