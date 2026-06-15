// Sample content for the landing page.
// All copy and media here are placeholders — replace with real assets later.

export const nav = {
  brand: 'NITIDA',
  links: [
    { label: 'Company', href: '#mission' },
    { label: 'Technology', href: '#technology' },
    { label: 'Product', href: '#features' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ],
  languages: ['KO', 'EN'],
}

export const hero = {
  eyebrow: 'Medical Robotics',
  title: 'Robotics that expand\naccess to better care',
  subtitle:
    '정밀 의료 로봇과 솔루션으로 누구나 고품질 치료에 접근할 수 있는 세상을 만듭니다.',
  primaryCta: { label: 'Explore Technology', href: '#technology' },
  secondaryCta: { label: 'Watch Film', href: '#mission' },
  // Sample placeholder media
  poster: 'https://picsum.photos/seed/nitida-hero/1920/1080',
}

export const mission = {
  eyebrow: 'Our Mission',
  statement:
    'We believe in innovating medical robots and solutions that expand access to high-quality care for all.',
  description:
    '복잡한 중재시술을 더 안전하고 정밀하게. 우리는 임상 현장의 부담을 줄이고 환자 결과를 개선하는 로봇 플랫폼을 설계합니다.',
}

export const technology = {
  eyebrow: 'Technology',
  title: 'A platform built for precision',
  items: [
    {
      kicker: 'Robotic Navigation',
      title: '서브 밀리미터 정밀 제어',
      body: '실시간 영상 정합과 햅틱 피드백으로 시술자의 손끝을 그대로 재현합니다. 미세한 움직임까지 안정적으로 제어합니다.',
      image: 'https://picsum.photos/seed/nitida-tech1/1200/900',
    },
    {
      kicker: 'Remote Procedure',
      title: '원격 중재시술',
      body: '저지연 통신 기반의 원격 조작으로 지역과 거리에 관계없이 전문 시술을 제공할 수 있습니다.',
      image: 'https://picsum.photos/seed/nitida-tech2/1200/900',
    },
    {
      kicker: 'Radiation Safety',
      title: '방사선 노출 최소화',
      body: '시술자를 방사선 영역 밖에 위치시켜 누적 피폭을 획기적으로 줄입니다. 의료진의 건강을 지킵니다.',
      image: 'https://picsum.photos/seed/nitida-tech3/1200/900',
    },
  ],
}

export const features = {
  eyebrow: 'Why NITIDA',
  title: 'Designed around the clinician',
  items: [
    {
      title: 'Intuitive Console',
      body: '학습 곡선을 최소화한 직관적 인터페이스로 빠르게 익숙해질 수 있습니다.',
    },
    {
      title: 'Seamless Integration',
      body: '기존 카테터랩 환경에 자연스럽게 통합되어 별도 인프라가 필요 없습니다.',
    },
    {
      title: 'Realtime Analytics',
      body: '시술 데이터를 실시간으로 시각화하여 의사결정을 지원합니다.',
    },
    {
      title: 'Proven Safety',
      body: '다중 안전 장치와 검증된 알고리즘으로 신뢰할 수 있습니다.',
    },
  ],
}

export const stats = {
  items: [
    { value: '0.5mm', label: '제어 정밀도' },
    { value: '70%', label: '방사선 노출 감소' },
    { value: '120+', label: '누적 임상 케이스' },
    { value: '15', label: '협력 의료기관' },
  ],
}

export const news = {
  eyebrow: 'News & Media',
  title: 'Latest from NITIDA',
  items: [
    {
      date: '2026.05.20',
      tag: 'Press',
      title: 'NITIDA, 차세대 중재시술 로봇 플랫폼 공개',
      image: 'https://picsum.photos/seed/nitida-news1/800/600',
    },
    {
      date: '2026.04.02',
      tag: 'Clinical',
      title: '첫 원격 PCI 임상 시험 성공적으로 완료',
      image: 'https://picsum.photos/seed/nitida-news2/800/600',
    },
    {
      date: '2026.02.11',
      tag: 'Company',
      title: '시리즈 B 투자 유치 — 글로벌 진출 가속화',
      image: 'https://picsum.photos/seed/nitida-news3/800/600',
    },
  ],
}

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Partner with us to\nredefine intervention',
  description:
    '협업, 임상, 투자 문의를 환영합니다. 함께 더 나은 치료의 미래를 만들어 갑니다.',
  cta: { label: 'Contact Us', href: 'mailto:hello@nitida.studio' },
}

export const footer = {
  brand: 'NITIDA',
  tagline: 'Innovating medical robots for all.',
  columns: [
    { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
    { title: 'Product', links: ['Platform', 'Technology', 'Safety', 'Support'] },
    { title: 'Resources', links: ['Docs', 'Publications', 'Newsroom', 'FAQ'] },
  ],
  copyright: '© 2026 NITIDA Studio. All rights reserved.',
}
