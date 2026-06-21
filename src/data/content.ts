// Portfolio content — 김형윤 · UX Publisher / Frontend Developer
// Replace media seeds and contact links with real assets when available.
import type { IconType } from 'react-icons';
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript } from 'react-icons/bi';
import {
  FaBootstrap,
  FaGitAlt,
  FaLaptopCode,
  FaReact,
  FaSass,
  FaVuejs,
} from 'react-icons/fa';
import {
  MdAccessibility,
  MdDesignServices,
  MdDevices,
  MdLanguage,
  MdVerified,
} from 'react-icons/md';
import { TbBrandAdobeXd } from 'react-icons/tb';
import {
  SiAntdesign,
  SiBuefy,
  SiChakraui,
  SiFigma,
  SiGithub,
  SiJira,
  SiJquery,
  SiMui,
  SiNotion,
  SiSlack,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

// Project CI / brand logos (src/assets/logo). Vite returns a hashed URL string.
import projLogo01 from '../assets/logo/proj-01.png';
import projLogo02 from '../assets/logo/proj-02.png';
import projLogo02_1 from '../assets/logo/proj-02-1.png';
import projLogo03 from '../assets/logo/proj-03.png';
import projLogo04 from '../assets/logo/proj-04.png';
import projLogo05 from '../assets/logo/proj-05.png';
import projLogo06 from '../assets/logo/proj-06.png';
import projLogo07 from '../assets/logo/proj-07.png';
import projLogo08 from '../assets/logo/proj-08.png';
import projLogo09 from '../assets/logo/proj-09.png';
import projLogo10 from '../assets/logo/proj-10.png';

export const nav = {
  brand: 'Nitida.studio ',
  links: [
  { label: 'Track Record', href: '#mission' },
    { label: 'What I Do', href: '#about' },
    // { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  languages: ['KO', 'EN'],
}

export const hero = {
  eyebrow: 'UX Publisher · Frontend Developer',
  title: '사용자 경험을 중심으로\n화면을 완성합니다',
  subtitle:
    '사용자 경험을 중심으로 화면을 완성해온 UX 퍼블리셔입니다.',
  primaryCta: { label: 'Project', href: '#projects' },
  secondaryCta: { label: 'Contact', href: '#contact' },
}

// Rotating words shown inside the hero pill. The headline is "지금 ___을
// 함께 만들어요", so every word must end in a 받침 (consonant) to fit 을.
export const heroRotating = [
  '웹 표준',
  '웹 접근성',
  '반응형 웹',
  '디자인 시스템',
  '사용자 경험',
  '인터랙션',
  // '크로스브라우징',
  // '시맨틱 마크업',
  '웹 성능',
  '퍼블리싱',
]

// Marquee keyword band — each icon is a react-icons component (rendered in
// Marquee.tsx as <Icon />), so this stays a plain .ts data module.
export const marquee: { icon: IconType; label: string }[] = [
  { icon: BiLogoHtml5, label: 'HTML5' },
  { icon: BiLogoCss3, label: 'CSS3' },
  { icon: BiLogoJavascript, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiJquery, label: 'jQuery' },
  { icon: FaSass, label: 'Sass' },
  { icon: FaReact, label: 'React' },
  { icon: FaVuejs, label: 'Vue.js' },
  { icon: SiBuefy, label: 'Buefy' },
  { icon: SiChakraui, label: 'Chakra UI' },
  { icon: SiAntdesign, label: 'Ant Design' },
  { icon: SiMui, label: 'Material UI' },
  { icon: FaBootstrap, label: 'Bootstrap' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: MdVerified, label: 'Web Standards' },
  { icon: MdAccessibility, label: 'Accessibility' },
  { icon: MdDevices, label: 'Responsive Web' },
  { icon: MdLanguage, label: 'Cross-Browsing' },
  { icon: FaLaptopCode, label: 'Frontend' },
  { icon: SiFigma, label: 'Figma' },
  { icon: TbBrandAdobeXd, label: 'Adobe XD' },
  { icon: MdDesignServices, label: 'Zeplin' },
  { icon: FaGitAlt, label: 'Git' },
  { icon: SiGithub, label: 'GitHub' },
  { icon: SiSlack, label: 'Slack' },
  { icon: SiNotion, label: 'Notion' },
]

// Our Impact — scroll-driven section: white→black color inversion, then the
// lead statement and stats fade in. Edit the stat values to real figures.
export const mission = {
  label: 'TRACK\nRECORD',
  lead: '기능의 나열이 아닌, 사용자 경험의 완성을 설계합니다.\n웹 표준과 접근성을 기본으로 일관된 화면을 만들어온 결과.',
  note: '2005 ~ 2026',
  stats: [
    {
      value: '20',
      unit: '+',
      label: 'UX 퍼블리싱 경력',
      note: '년 단위 실무 경험',
    },
    {
      value: '50',
      unit: '+',
      label: '수행 프로젝트',
      note: '대기업 · 관공서 · 병원 · 스타트업',
    },
    {
      value: '10',
      unit: '+',
      label: '웹접근성(WA) 인증 기여',
      note: '관공서(도서관) 웹 사업',
    },
  ],
}

// About — intro + 주요 업무 grid
export const about = {
  eyebrow: 'About',
  title: '20년+ 경력의 UX 퍼블리셔',
  lead: '웹 표준과 접근성을 기본으로, 일관성 있는 화면을 만듭니다.',
  paragraphs: [
    'W3C 웹 표준과 WCAG 접근성 가이드라인을 기본으로, React(Chakra UI) · Vue(Buefy UI) 환경에서 컴포넌트 기반 화면을 일관성 있게 구현해 왔으며, 관공서 웹접근성 인증마크 획득에도 기여했습니다.',
    'Figma · Zeplin 스펙을 정확히 해석하고, 재사용 가능한 컴포넌트 설계와 유지보수 효율을 함께 고려합니다. 고령층 · 저시력자를 위한 큰글씨 모드를 선제적으로 구현한 사례처럼, 사용자 관점에서 UI 문제를 먼저 발견하고 해결하는 것을 중요하게 생각합니다.',
  ],
  approach: {
    eyebrow: 'What I Do',
    title: '주요 업무',
    items: [
      {
        no: '01',
        icon: 'visibility',
        anim: 'job-01',
        en: 'Web Standards · Accessibility',
        title: '웹 표준 · 접근성',
        body: 'W3C 웹 표준과 WCAG 접근성을 준수하고, 관공서 WA 인증마크 획득에 기여합니다.',
        tags: ['W3C', 'WCAG 2.1', 'WA 인증', '시맨틱 마크업', '스크린리더'],
      },
      {
        no: '02',
        icon: 'maximizeMinimize',
        anim: 'job-02',
        en: 'Cross-browsing · Responsive',
        title: '크로스브라우징 · 반응형',
        body: '다양한 브라우저와 디바이스 해상도에 대응하는 반응형 · 모바일 웹을 구현합니다.',
        tags: ['반응형 웹', '모바일 웹', '크로스브라우징', '미디어쿼리', '디바이스 대응'],
      },
      {
        no: '03',
        icon: 'codepen',
        anim: 'job-03',
        en: 'Component-based UI',
        title: '컴포넌트 기반 UI',
        body: 'React · Vue 환경에서 재사용 가능한 컴포넌트 기반 화면을 설계하고 제작합니다.',
        tags: ['React', 'Vue', '재사용 컴포넌트', '모듈화', '상태 관리'],
      },
      {
        no: '04',
        icon: 'settings',
        anim: 'job-04',
        en: 'UI Library',
        title: 'UI 라이브러리 활용',
        body: 'Buefy · Chakra · AntD 등 UI 라이브러리를 활용하고 프로젝트에 맞게 커스터마이징합니다.',
        tags: ['Buefy', 'Chakra UI', 'Ant Design', 'Bootstrap', '커스터마이징'],
      },
      {
        no: '05',
        icon: 'share',
        anim: 'job-05',
        en: 'Collaboration',
        title: '협업 · 커뮤니케이션',
        body: '디자이너와 개발자 사이의 커뮤니케이션을 조율하며 일정과 품질을 함께 관리합니다.',
        tags: ['디자이너 협업', 'Git', 'Jira', 'Slack', 'Notion'],
      },
      {
        no: '06',
        icon: 'edit',
        anim: 'job-06',
        en: 'Design Spec',
        title: '디자인 스펙 구현',
        body: 'Figma · Zeplin 디자인 스펙을 정확히 해석하고 화면으로 구현합니다.',
        tags: ['Figma', 'Zeplin', 'Adobe XD', '픽셀 퍼펙트', '디자인 토큰'],
      },
    ],
  },
}

// Tech stack — chips grouped by category
export const skills: {
  eyebrow: string
  title: string
  description: string
  groups: { label: string; items: { icon: IconType; label: string }[] }[]
} = {
  eyebrow: 'Tech Stack',
  title: '기술 스택',
  description: '실무에서 사용해 온 언어 · 프레임워크 · 도구입니다.',
  groups: [
    {
      label: '언어',
      items: [
        { icon: BiLogoHtml5, label: 'HTML5' },
        { icon: BiLogoCss3, label: 'CSS3' },
        { icon: BiLogoJavascript, label: 'JavaScript' },
        { icon: SiTypescript, label: 'TypeScript' },
      ],
    },
    {
      label: '프레임워크',
      items: [
        { icon: FaVuejs, label: 'Vue 2' },
        { icon: FaVuejs, label: 'Vue 3' },
        { icon: FaReact, label: 'React' },
      ],
    },
    {
      label: 'UI 라이브러리',
      items: [
        { icon: SiBuefy, label: 'Buefy UI' },
        { icon: SiChakraui, label: 'Chakra UI' },
        { icon: SiAntdesign, label: 'Ant Design' },
      ],
    },
    {
      label: '스타일',
      items: [
        { icon: FaSass, label: 'Sass / SCSS' },
        { icon: FaBootstrap, label: 'Bootstrap' },
        { icon: SiTailwindcss, label: 'Tailwind' },
      ],
    },
    {
      label: '표준 · 접근성',
      items: [
        { icon: MdVerified, label: 'W3C' },
        { icon: MdAccessibility, label: 'WCAG' },
        { icon: MdVerified, label: 'WA 인증' },
      ],
    },
    {
      label: '디자인 툴',
      items: [
        { icon: SiFigma, label: 'Figma' },
        { icon: MdDesignServices, label: 'Zeplin' },
        { icon: TbBrandAdobeXd, label: 'Adobe XD' },
      ],
    },
    {
      label: '협업 툴',
      items: [
        { icon: FaGitAlt, label: 'Git' },
        { icon: SiJira, label: 'Jira' },
        { icon: SiSlack, label: 'Slack' },
        { icon: SiNotion, label: 'Notion' },
      ],
    },
  ],
}

// Featured projects — card shows CI(brand) + title only; click opens a modal
// with whatever detail is present (summary / stack / highlights). Drop a real
// CI file into src/assets/logos and set `logo` to swap the text wordmark for
// an image. Detail fields are optional so lighter entries can share the grid.
export type Project = {
  no: string
  brand: string
  logos?: string[]
  name: string
  org?: string
  period?: string
  team?: string
  role?: string
  stack?: string[]
  summary?: string
  responsibilities?: string[]
  highlights?: string[]
  contribution?: string
}

export const projects: {
  eyebrow: string
  title: string
  items: Project[]
} = {
  eyebrow: 'Projects',
  title: '주요 프로젝트',
  items: [
    {
      no: '01',
      brand: '삼성화재 애니핏',
      logos: [projLogo01],
      name: '삼성화재 애니핏 헬스케어 서비스 개발',
      org: 'GC케어',
      period: '2025.09 ~ 2026.05',
      team: '8명',
      role: 'UX 퍼블리셔',
      stack: [
        'Vue2', 'Vue3', 'TypeScript', 'Buefy UI', 'Sass', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        '삼성화재 애니핏 헬스케어 서비스 신규 개발에 따른 UI/UX 퍼블리싱 담당',
        '검진 파트는 Vue2, 케어서비스 파트는 Vue3 중심으로 화면 개발',
        'Bulma 기반 Buefy UI 컴포넌트 라이브러리를 활용한 화면 구현',
        '반응형 웹 · 웹 표준 · 크로스브라우징을 고려한 UI 개발 수행',
      ],
      highlights: [
        'Vue + TypeScript 환경에서 재사용 가능한 UI 컴포넌트를 직접 설계 및 제작',
        '서비스 전반의 UI 일관성 확보 및 유지보수 효율 개선',
        'Vue2 기반 검진 파트와 Vue3 기반 케어서비스 파트를 병행 개발하며 버전별 개발 방식 이해 및 적용 역량 강화',
      ],
      contribution: '100%',
    },
    {
      no: '02',
      brand: 'AIA · GC케어',
      logos: [projLogo02, projLogo02_1],
      name: 'GC케어 운영 개발 및 AIA 헬스케어 서비스 개발',
      org: 'GC케어',
      period: '2025.03 ~ 2025.09',
      team: '10명',
      role: 'UX 퍼블리셔',
      stack: [
        'Vue2', 'Vue3', 'TypeScript', 'Buefy UI', 'Sass', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        'GC케어 운영 및 AIA 헬스케어 신규 개발에 따른 UI/UX 퍼블리싱 담당',
        '검진 서비스는 Vue2, AIA 서비스는 Vue3 중심으로 화면 개발',
        'Bulma 기반 Buefy UI 컴포넌트 라이브러리를 활용한 화면 구현',
        'AIA QI 디자인 시스템 기반 UI 개발 및 UX팀 커뮤니케이션 수행',
      ],
      highlights: [
        'Vue + TypeScript 환경에서 다양한 재사용 컴포넌트를 직접 설계 및 제작',
        'AIA QI 디자인 시스템을 서비스 화면에 적용하며 디자인 일관성 확보',
        '현업 담당자 및 AIA UX팀과 긴밀히 소통하여 요구사항을 정확히 반영',
        '고령층 · 저시력자를 고려한 큰글씨 모드를 선제적으로 검토하고 성공적으로 구현',
      ],
      contribution: '100%',
    },
    {
      no: '03',
      brand: 'SKT · TCB/TBP',
      logos: [projLogo03],
      name: 'SKT T-Cloud Biz 고도화 및 TCB/TBP APP 운영 개발',
      org: '(주)이음솔루션 · (주)비디',
      period: '2015.08 ~ 2025.02 (약 10년)',
      team: '9~10명',
      role: 'UX 퍼블리셔',
      stack: [
        'React', 'TypeScript', 'Chakra UI', 'Angular', 'JavaScript', 'jQuery', 'SCSS', 'Bootstrap', 'W3C', 'Responsive Web'
      ],
      responsibilities: [
        'T-Cloud Biz APP 운영 및 관련 콘솔 프로그램 신규 개발 · 과제에 따른 UI/UX 퍼블리싱',
        '고도화 작업은 Java 기반, 신규 개발 및 과제는 React + Chakra UI 중심으로 진행',
        'Meta Vision · VisionHub · CVOps · GrandView 로봇 관제 플랫폼 등 다양한 과제 참여',
        '대시보드형 콘솔 UI를 포함한 다수의 BIZ 프로젝트 수행',
        'CooperVision 시험 착용 프로그램 모바일 프로젝트 참여',
      ],
      highlights: [
        '장기 운영 프로젝트를 수행하며 유지보수 효율을 고려한 컴포넌트 설계 역량 강화',
        '대시보드형 콘솔 UI를 포함한 다수의 BIZ 프로젝트 개발 경험 축적',
        '복잡한 데이터 구조를 시각적으로 표현하는 UI 개발 역량 강화',
        '운영 서비스의 안정성과 확장성을 고려한 화면 개발 및 개선 수행',
      ],
      contribution: '100%',
    },
    {
      no: '04',
      brand: 'KBS',
      logos: [projLogo04],
      name: 'KBS 한국방송공사 인터넷뉴스 서비스 개편 (1~3차)',
      org: '온라인파워스',
      period: '2015.01 ~ 2015.06',
      team: '9명',
      role: 'UX 퍼블리셔',
      stack: [
        'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        'KBS 인터넷뉴스 서비스 개편에 따른 레이아웃 변경 및 신규 서비스 추가 UI/UX 퍼블리싱 담당',
        '2012년 1차 · 2013년 2차 · 2015년 3차 개편 참여',
        'W3C 웹 표준을 준수한 화면 개발 수행',
        '반응형 웹 및 크로스브라우징 대응 개발 수행',
      ],
      highlights: [
        '1차 · 2차 · 3차 개편에 반복 참여하며 대규모 콘텐츠 서비스 구조에 대한 이해도 향상',
        '단계별 서비스 개편 과정에서 최신 웹 기술과 웹 표준을 지속적으로 적용',
        '뉴스 콘텐츠 서비스의 레이아웃 구조 · 유지보수 방식 · 운영 특성에 대한 실무 경험 축적',
      ],
      contribution: '100%',
    },
    {
      no: '05',
      brand: '외교부',
      logos: [projLogo05],
      name: '외교부 여권정보통합관리시스템 고도화 사업',
      org: '온라인파워스',
      period: '2014.09 ~ 2015.01',
      team: '30명',
      role: 'UX 퍼블리셔',
      stack: [
        'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        '여권정보통합관리시스템 고도화 개발에 따른 UI/UX 퍼블리싱 담당',
        '관공서 프로젝트 특성에 맞춘 웹 표준 및 크로스브라우징 대응 수행',
        'IE8 · IE9 이상 환경을 고려한 화면 구현',
        '반응형 웹 및 웹 접근성을 고려한 UI 개발 수행',
      ],
      highlights: [
        '레거시 브라우저 호환성을 유지하면서 웹 표준을 충족하는 개발 방식 체득',
        'IE8 · IE9 이상 환경에 맞춘 크로스브라우징 대응 경험 축적',
        '약 30명 규모의 대형 공공 프로젝트에서 협업 프로세스와 일정 관리 경험 확보',
      ],
      contribution: '100%',
    },
    {
      no: '06',
      brand: 'PEN.UP', 
      logos: [projLogo06],
      name: '삼성전자 PEN.UP 신규 기능 개발',
      org: '(주)포인테크',
      period: '2014.04 ~ 2014.06',
      team: '약 20명',
      role: 'UX 퍼블리셔',
      stack: [
        'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        '삼성 PEN.UP 앱 신규 기능 개발에 따른 UI/UX 퍼블리싱 담당',
        '모바일 앱 특성에 맞춘 디바이스별 해상도 대응 화면 개발',
        '반응형 웹 · 웹 표준 · 크로스브라우징을 고려한 UI 구현',
        'jQuery 및 오픈소스 API를 활용한 인터랙티브 효과 구현',
      ],
      highlights: [
        '다양한 디바이스 해상도와 모바일 환경에 대응하는 반응형 UI 구현 경험 축적',
        '모바일 앱 특성에 맞춘 화면 구조 및 인터랙션 구현 역량 강화',
        '디바이스별 UI 대응을 통해 모바일 퍼블리싱 실무 역량 향상',
      ],
      contribution: '100%',
    },
    {
      no: '07',
      brand: 'EBS',
      logos: [projLogo07],
      name: 'EBS MATH 개선사업',
      org: '(주)온라인파워스',
      period: '2013.12 ~ 2014.04 (약 4개월)',
      role: 'UX 퍼블리셔 · 과장',
      stack: [
        'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        '신규 기능 개발에 따른 UI/UX 퍼블리싱 담당',
        '디바이스별 해상도 대응 화면 개발',
        '반응형 웹 · 웹 표준 · 크로스브라우징을 고려한 UI 구현',
        'jQuery 및 오픈소스 API를 활용한 인터랙티브 효과 구현',
      ],
      highlights: [
        '다양한 디바이스 해상도와 웹 · 모바일 환경에 대응하는 반응형 UI 구현 경험 축적',
        '화면 구조 및 인터랙션 구현 역량 강화',
      ],
      contribution: '100%',
    },
    {
      no: '08',
      brand: '행복한웹앤미디어',
      logos: [projLogo08],
      name: '행복한웹앤미디어 웹접근성 개선 프로젝트 및 관련 개발',
      org: '(주)유니트론텍',
      period: '2013.06 ~ 2013.11 (약 6개월)',
      role: 'UX 퍼블리셔 · 과장',
      stack: [
        'jQuery', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        '신규 기능 개발에 따른 UI/UX 퍼블리싱 담당',
        '디바이스별 해상도 대응 화면 개발',
        '반응형 웹 · 웹 표준 · 크로스브라우징을 고려한 UI 구현',
        'jQuery 및 오픈소스 API를 활용한 인터랙티브 효과 구현',
      ],
      highlights: [
        '다양한 디바이스 해상도와 웹 · 모바일 환경에 대응하는 반응형 UI 구현 경험 축적',
        '화면 구조 및 인터랙션 구현 역량 강화',
      ],
      contribution: '100%',
    },
    {
      no: '09',
      brand: '롯데닷컴',
      logos: [projLogo09],
      name: '롯데닷컴 홈페이지 퍼블리싱 및 관련 제반 업무',
      org: '한국인터넷프리랜서협회',
      period: '2013.01 ~ 2013.03 (약 2개월)',
      role: 'UX 퍼블리셔 · 과장',
      stack: [
        'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        '신규 개발에 따른 UI/UX 퍼블리싱 담당',
        '디바이스별 해상도 대응 화면 개발',
        '반응형 웹 · 웹 표준 · 크로스브라우징을 고려한 UI 구현',
        'jQuery 및 오픈소스 API를 활용한 인터랙티브 효과 구현',
      ],
      highlights: [
        '다양한 해상도와 웹 환경에 대응하는 반응형 UI 구현 경험 축적',
        '화면 구조 및 인터랙션 구현 역량 강화',
      ],
      contribution: '100%',
    },
    {
      no: '10',
      brand: '국립어린이청소년도서관',
      logos: [projLogo10],
      name: '국립어린이청소년도서관 홈페이지 개발',
      org: '(주)제이넷',
      period: '2012.10 ~ 2012.12 (약 2개월)',
      role: 'UX 퍼블리셔 · 과장',
      stack: [
        'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards', 'Responsive Web', 'Cross-Browsing'
      ],
      responsibilities: [
        '신규 개발에 따른 UI/UX 퍼블리싱 담당',
        '디바이스별 해상도 대응 화면 개발',
        '반응형 웹 · 웹 표준 · 크로스브라우징을 고려한 UI 구현',
        'jQuery 및 오픈소스 API를 활용한 인터랙티브 효과 구현',
      ],
      highlights: [
        '웹 표준 및 웹 접근성 품질인증 마크(WA 마크) 획득',
        '다양한 디바이스 해상도와 웹 환경에 대응하는 반응형 UI 구현 경험 축적',
        '화면 구조 및 인터랙션 구현 역량 강화',
      ],
      contribution: '100%',
    },
  ],
}

export const stats = {
  items: [
    { value: '사용자 중심의 UI · Interaction 설계', label: 'W3C 웹 표준과 WCAG 접근성 가이드라인을 기반으로 React·Vue 환경에서 디자인 스펙을 구현합니다.' },
    // { value: '6', label: '주요 프로젝트' },
    // { value: '3', label: '전문 도메인' },
    // { value: 'WA', label: '웹접근성 인증' },
  ],
}

// nitida — brand identity band shown after the Projects section.
// Brand essence + the three core values (Clarity / Craft / Accessibility).
export const nitida = {
  // eyebrow: 'Brand Essence',
  tagline: 'NITIDA Studio ',
  lead: '잡한 것을 또렷하게 만드는 프론트엔드 · UI 퍼블리싱 스튜디오. 모든 결정은 한 단어로 수렴합니다.',
  values: [
    {
      en: 'Clarity',
      ko: '명료함',
      desc: '군더더기 없이 또렷한 UI. 보는 순간 이해되는 화면을 만듭니다.',
    },
    {
      en: 'Craft',
      ko: '장인정신',
      desc: '픽셀 단위로 다듬는 20년 내공. ‘대충’이 없는 마감.',
    },
    {
      en: 'Accessibility',
      ko: '접근성',
      desc: '모두에게 또렷하게. W3C · WCAG 전문성을 브랜드 가치로 전면에.',
    },
  ],
}

export const contact = {
  eyebrow: 'Get in touch',
  title: '함께 더 나은 결과를 만들고 싶습니다',
  description:
    '문의를 환영합니다. 편하게 연락 주세요.',
  cta: { label: 'Contact Me', href: 'https://naver.me/GSQzq3AZ' },
}

export const footer = {
  brand: '김형윤',
  tagline: 'UX Publisher · Frontend Developer',
  columns: [
    { title: 'Menu', links: ['About', 'Skills', 'Projects', 'Contact'] },
    { title: 'Channels', links: ['Email', 'GitHub', 'Notion'] },
  ],
  copyright: '© 2026 김형윤. All rights reserved.',
}
