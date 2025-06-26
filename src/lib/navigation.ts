export interface NavItem {
  id: string;
  title: string;
  excerpt?: string;
  children: NavItem[];
  slug: string;
  parent: { slug: string; parent: NavItem['parent'] } | null;
  enableAliasing: boolean;
  internalAlias: { slug: string; parent: NavItem['parent'] } | null;
  url: string;
  path: string;
}

export interface SimpleNavItem {
  id?: string; // Make id optional
  title: string;
  url: string;
  path?: string;
}

export const mainNav: NavItem[] = [
  {
    id: '39710820',
    title: '플랫폼',
    excerpt: '',
    slug: 'platform',
    parent: null,
    enableAliasing: true,
    internalAlias: { slug: 'threat-detection', parent: { slug: 'platform', parent: null } },
    url: '',
    path: '/platform/threat-detection',
    children: [
      { id: '39710826', title: '위협 탐지', excerpt: '에이전트 없이 Linux 시스템의 위협을 탐지합니다.', children: [], slug: 'threat-detection', parent: { slug: 'platform', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/platform/threat-detection' },
      { id: '41870226', title: 'SSH 키 모니터링', excerpt: '전체 Linux 인프라에서 SSH 키를 찾고 감사합니다.', children: [], slug: 'ssh-key-monitoring', parent: { slug: 'platform', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/platform/ssh-key-monitoring' },
      { id: 'ePKIjX8LSYirgfVTFJoXbA', title: '패스워드 감사', excerpt: '공격자보다 먼저 Linux 인프라의 취약한 패스워드를 찾습니다.', children: [], slug: 'password-auditing', parent: { slug: 'platform', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/platform/password-auditing' },
      { id: 'HtJXALfnQhCOP468RQPXsA', title: '드리프트 탐지', excerpt: 'Linux 시스템의 무단 변경 사항을 탐지합니다.', children: [], slug: 'drift-detection', parent: { slug: 'platform', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/platform/drift-detection' },
      { id: 'JbgjpydUS2CEYSWwftvr_A', title: '디바이스 및 어플라이언스 보안', excerpt: '중요한 Linux 네트워킹 장비와 엣지 디바이스의 침입자를 찾습니다.', children: [], slug: 'device-and-appliance-security', parent: { slug: 'platform', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/platform/device-and-appliance-security' },
      { id: 'HYqigK1jTnSGixlVpJ-lSA', title: '인시던트 대응', excerpt: '인시던트 대응 팀이 위협을 즉시 찾고 대응할 수 있게 합니다.', children: [], slug: 'incident-response', parent: { slug: 'platform', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/platform/incident-response' },
    ],
  },
  {
    id: '39710819',
    title: 'Sandfly를 선택하는 이유',
    excerpt: '',
    slug: 'why-sandfly',
    parent: null,
    enableAliasing: true,
    internalAlias: { slug: 'tactics-detection', parent: { slug: 'why-sandfly', parent: null } },
    url: '',
    path: '/why-sandfly/tactics-detection',
    children: [
      { id: 'bLiU5PjYTXCKH0Bn3PM8dA', title: '미래 지향적 전술 탐지', excerpt: '실전에서 검증된 전술 탐지로 비교할 수 없는 위협 대응 범위를 제공합니다.', children: [], slug: 'tactics-detection', parent: { slug: 'why-sandfly', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/why-sandfly/tactics-detection' },
      { id: 'ad972J3XQRO_I9ocN_-rww', title: '뛰어난 호환성', excerpt: '시장에서 가장 포괄적인 Linux 지원 범위를 제공합니다.', children: [], slug: 'compatibility', parent: { slug: 'why-sandfly', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/why-sandfly/compatibility' },
      { id: 'WnSCFQmdQBiw91WuhvKwtw', title: '안전성과 신뢰성', excerpt: '에이전트 기반 EDR과 관련된 성능 및 배포 위험을 제거합니다.', children: [], slug: 'safety', parent: { slug: 'why-sandfly', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/why-sandfly/safety' },
      { id: 'cuZk7DnBTwCmLrK3Nxigrw', title: '빠른 배포', excerpt: '중요한 인프라에 위험 없이 시스템을 즉시 보호합니다.', children: [], slug: 'fast-deployment', parent: { slug: 'why-sandfly', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/why-sandfly/fast-deployment' },
      { id: 'Admn265HTNm5lFWUZZVorA', title: '데이터 프라이버시', excerpt: '귀하의 데이터는 귀하의 것입니다. 에어갭 및 격리된 네트워크에서 작동합니다.', children: [], slug: 'data-privacy', parent: { slug: 'why-sandfly', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/why-sandfly/data-privacy' },
      { id: '39710831', title: '고객 추천사', excerpt: '', children: [], slug: 'testimonials', parent: { slug: 'why-sandfly', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/why-sandfly/testimonials' },
      { id: '39710830', title: '사례 연구', excerpt: '', children: [], slug: 'case-studies', parent: { slug: 'why-sandfly', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/why-sandfly/case-studies' },
    ],
  },
  {
    id: '39710822',
    title: '리소스',
    excerpt: '',
    slug: 'resources',
    parent: null,
    enableAliasing: true,
    internalAlias: { slug: 'product-faqs', parent: { slug: 'resources', parent: null } },
    url: '',
    path: '/resources/product-faqs',
    children: [
      { id: '39710827', title: '블로그', excerpt: '', children: [], slug: 'blog', parent: { slug: 'resources', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/resources/blog' },
      { id: '39710828', title: '제품 FAQ', excerpt: '', children: [], slug: 'product-faqs', parent: { slug: 'resources', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/resources/product-faqs' },
      { id: 'HTVKQwBLTri4IaUFQ3Og2A', title: '요구사항 및 설치', excerpt: '', children: [], slug: 'requirements-installation', parent: { slug: 'resources', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/resources/requirements-installation' },
      { id: '39710829', title: '제품 문서', excerpt: '', children: [], slug: 'product-documentation', parent: { slug: 'resources', parent: null }, enableAliasing: true, internalAlias: null, url: 'https://docs.sandflysecurity.com', path: 'https://docs.sandflysecurity.com' },
      { id: '55454760', title: '코드 보안 감사', excerpt: '', children: [], slug: 'third-party-code-verification', parent: { slug: 'resources', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/resources/third-party-code-verification' },
      { id: 'b31J97kxTbe6k32nwzRbJA', title: '백서', excerpt: '', children: [], slug: 'white-papers', parent: { slug: 'resources', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/resources/white-papers' },
    ],
  },
  {
    id: '39710823',
    title: '회사 소개',
    excerpt: '',
    slug: 'about-us',
    parent: null,
    enableAliasing: true,
    internalAlias: { slug: 'our-company', parent: { slug: 'about-us', parent: null } },
    url: '',
    path: '/about-us/our-company',
    children: [
      { id: '39710832', title: '회사 소개', excerpt: '', children: [], slug: 'our-company', parent: { slug: 'about-us', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/about-us/our-company' },
      { id: '39710875', title: '공격받고 계신가요?', excerpt: '', children: [], slug: 'under-attack-alias', parent: { slug: 'about-us', parent: null }, enableAliasing: true, internalAlias: { slug: 'under-attack', parent: null }, url: '', path: '/under-attack' },
      { id: '39711051', title: '뉴스', excerpt: '', children: [], slug: 'news', parent: { slug: 'about-us', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/about-us/news' },
      { id: 'W_PVIpPzS2a4oTP-_k18bw', title: '미팅 요청', excerpt: '', children: [], slug: 'request-a-meeting-alias', parent: { slug: 'about-us', parent: null }, enableAliasing: true, internalAlias: { slug: 'request-a-meeting', parent: null }, url: '', path: '/request-a-meeting' },
    ],
  },
];

export const footerNav: NavItem[][] = [
  // Platform
  mainNav[0].children,
  // About
  mainNav[3].children,
  // Resources
  mainNav[2].children,
];

export const socialNav: SimpleNavItem[] = [
  { id: 'social-header', title: 'Social', url: '#' },
  { id: 'social-twitter', title: 'Twitter', url: 'https://twitter.com/sandflysecurity' },
  { id: 'social-linkedin', title: 'LinkedIn', url: 'https://www.linkedin.com/company/sandfly-security/' },
  { id: 'social-youtube', title: 'YouTube', url: 'https://www.youtube.com/c/SandflySecurity' },
];

export const legalNav: SimpleNavItem[] = [
  { id: '39710986', title: 'Privacy Policy', url: '/privacy-policy' },
  {
    id: '39710991',
    title: 'End User License Agreement',
    url: '/end-user-license-agreement',
  },
];

export const secondaryNav: NavItem[] = [
  { id: '39710835', title: 'Under Attack?', excerpt: '', children: [], slug: 'under-attack', parent: null, enableAliasing: false, internalAlias: null, url: '', path: '/under-attack' },
  { id: '39710967', title: 'Support', excerpt: '', children: [], slug: 'support', parent: null, enableAliasing: false, internalAlias: null, url: '', path: '/support' },
  { id: '39710834', title: 'Contact Us', excerpt: '', children: [{ id: '62628961', title: 'Message Sent', excerpt: '', children: [], slug: 'success', parent: { slug: 'contact-us', parent: null }, enableAliasing: false, internalAlias: null, url: '', path: '/contact-us/success' }], slug: 'contact-us', parent: null, enableAliasing: false, internalAlias: null, url: '', path: '/contact-us' },
];
