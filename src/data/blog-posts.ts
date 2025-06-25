interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleKo: string;
  summary: string;
  summaryKo: string;
  content?: string;
  contentKo?: string;
  publishDate: string;
  categories: string[];
  categoriesKo: string[];
  url: string;
  imageUrl?: string;
  author?: string;
  readTime?: number;
}

export const sandFlyBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "sctp-protocol-attack-risks-on-linux",
    title: "SCTP Protocol Attack Risks on Linux",
    titleKo: "Linux에서의 SCTP 프로토콜 공격 위험",
    summary: "The article discusses how the Stream Control Transmission Protocol (SCTP) can be exploited as a stealthy backdoor on Linux systems, demonstrating potential security risks and how to detect suspicious SCTP activity.",
    summaryKo: "Stream Control Transmission Protocol(SCTP)이 Linux 시스템에서 은밀한 백도어로 악용될 수 있는 방법을 논의하고, 잠재적인 보안 위험과 의심스러운 SCTP 활동을 탐지하는 방법을 설명합니다.",
    contentKo: `## SCTP 프로토콜의 위험성

Stream Control Transmission Protocol(SCTP)는 TCP와 UDP의 장점을 결합한 전송 계층 프로토콜입니다. 그러나 이 프로토콜이 악의적인 목적으로 사용될 수 있다는 사실은 많은 보안 전문가들이 간과하고 있습니다.

### 주요 위험 요소

1. **기본 활성화**: 대부분의 Linux 배포판에서 SCTP는 기본적으로 활성화되어 있습니다.
2. **모니터링 회피**: 많은 보안 도구들이 TCP/UDP에 집중하고 SCTP를 간과합니다.
3. **은밀한 통신**: 공격자들은 SCTP를 통해 탐지되지 않는 백도어를 만들 수 있습니다.

### 탐지 방법

#### 1. /proc/net/sctp 확인
\`\`\`bash
cat /proc/net/sctp/assocs
\`\`\`

#### 2. 네트워크 연결 모니터링
\`\`\`bash
ss -anp | grep sctp
\`\`\`

#### 3. 커널 모듈 확인
\`\`\`bash
lsmod | grep sctp
\`\`\`

### 예방 조치

1. **불필요한 경우 SCTP 비활성화**
   \`\`\`bash
   echo 'blacklist sctp' >> /etc/modprobe.d/blacklist.conf
   \`\`\`

2. **방화벽 규칙 설정**
   - SCTP 트래픽을 명시적으로 차단하거나 허용

3. **정기적인 모니터링**
   - SCTP 연결을 주기적으로 검사
   - 의심스러운 SCTP 활동에 대한 경고 설정

### 결론

SCTP는 합법적인 용도로 사용될 수 있는 유용한 프로토콜이지만, 보안 관점에서 주의 깊게 모니터링해야 합니다. Sandfly Security는 이러한 SCTP 기반 위협을 탐지할 수 있는 고급 기능을 제공합니다.`,
    publishDate: "2025-06-23",
    categories: ["Malware", "Linux Security", "Linux Forensics", "Rootkits"],
    categoriesKo: ["악성코드", "Linux 보안", "Linux 포렌식", "루트킷"],
    url: "https://sandflysecurity.com/blog/sctp-protocol-attack-risks-on-linux",
    imageUrl: "https://www.datocms-assets.com/56687/1750709384-packet-breaking-through-wall-edit.jpeg",
    author: "Sandfly Security Team",
    readTime: 8
  },
  {
    id: "2",
    slug: "sandfly-digitalocean-partnership",
    title: "Sandfly Security Collaborates with DigitalOcean on Agentless Linux Security",
    titleKo: "Sandfly Security, 현대 클라우드 환경을 위한 에이전트리스 Linux 보안으로 DigitalOcean과 협력",
    summary: "Sandfly Security announces collaboration with DigitalOcean to provide agentless Linux security solutions for modern cloud environments through their marketplace integration.",
    summaryKo: "Sandfly Security가 DigitalOcean과 협력하여 마켓플레이스 통합을 통해 현대 클라우드 환경을 위한 에이전트리스 Linux 보안 솔루션을 제공한다고 발표했습니다.",
    contentKo: `## DigitalOcean과의 전략적 파트너십

Sandfly Security는 DigitalOcean과의 협력을 통해 클라우드 네이티브 환경에서 더욱 강력한 보안 솔루션을 제공하게 되었습니다.

### 파트너십의 주요 이점

1. **마켓플레이스 통합**: DigitalOcean 마켓플레이스에서 원클릭 배포 가능
2. **에이전트리스 보안**: 성능 영향 없이 종합적인 위협 탐지
3. **자동 스케일링**: 클라우드 인프라와 함께 자동으로 확장

### DigitalOcean 사용자를 위한 혜택

- **간편한 설치**: 몇 분 만에 보안 모니터링 시작
- **비용 효율성**: 에이전트 관리 비용 절감
- **실시간 보호**: 24/7 지속적인 보안 모니터링

### 시작하기

1. DigitalOcean 마켓플레이스에서 Sandfly 검색
2. 원클릭으로 드롭렛 생성
3. 간단한 설정으로 즉시 보호 시작

이번 파트너십은 클라우드 보안의 새로운 표준을 제시하며, 개발자와 기업이 보안 걱정 없이 혁신에 집중할 수 있도록 지원합니다.`,
    publishDate: "2025-06-16",
    categories: ["Press Release", "Partnership"],
    categoriesKo: ["보도자료", "파트너십"],
    url: "https://sandflysecurity.com/blog/sandfly-security-partners-with-digitalocean",
    imageUrl: "https://www.datocms-assets.com/56687/1748472742-sandfly-do-2x-1.png",
    author: "Sandfly Security Team",
    readTime: 5
  },
  {
    id: "3",
    slug: "detecting-packet-sniffing-malware",
    title: "Detecting Packet Sniffing Malware on Linux",
    titleKo: "Linux에서 패킷 스니핑 악성코드 탐지하기",
    summary: "An article explaining how to detect suspicious network packet sniffing processes on Linux systems by examining the /proc/net/packet file.",
    summaryKo: "/proc/net/packet 파일을 검사하여 Linux 시스템에서 의심스러운 네트워크 패킷 스니핑 프로세스를 탐지하는 방법을 설명합니다.",
    contentKo: `## 패킷 스니핑 악성코드의 위협

네트워크 패킷 스니핑은 정당한 네트워크 분석 목적으로 사용될 수 있지만, 악성코드가 민감한 정보를 탈취하는 데도 사용됩니다.

### 패킷 스니핑 탐지 방법

#### 1. /proc/net/packet 파일 분석
\`\`\`bash
cat /proc/net/packet
\`\`\`

이 파일은 패킷 소켓을 사용하는 모든 프로세스를 보여줍니다.

#### 2. 의심스러운 프로세스 식별
\`\`\`bash
sudo netstat -ap | grep packet
\`\`\`

#### 3. tcpdump 남용 확인
\`\`\`bash
ps aux | grep -E '(tcpdump|wireshark|tshark)'
\`\`\`

### 악성 스니핑의 징후

- 알 수 없는 프로세스의 패킷 캡처
- 시스템 부팅 시 자동 시작되는 스니핑 도구
- 숨겨진 프로세스의 네트워크 활동

### 방어 전략

1. **정기적인 감사**: 패킷 소켓 사용 모니터링
2. **권한 제한**: CAP_NET_RAW 권한 제한
3. **IDS/IPS 구축**: 비정상적인 패킷 캡처 탐지

Sandfly는 이러한 은밀한 패킷 스니핑 활동을 실시간으로 탐지하여 데이터 유출을 방지합니다.`,
    publishDate: "2025-06-16",
    categories: ["Malware", "Linux Security", "Linux Forensics", "Rootkits"],
    categoriesKo: ["악성코드", "Linux 보안", "Linux 포렌식", "루트킷"],
    url: "https://sandflysecurity.com/blog/detecting-packet-sniffing-malware-on-linux",
    imageUrl: "https://www.datocms-assets.com/56687/1750103401-tron-lightcycle-race-over-packets.jpeg",
    author: "Sandfly Security Team",
    readTime: 10
  },
  {
    id: "4",
    slug: "eliminating-linux-security-blind-spots",
    title: "Eliminating Linux Security Blind Spots: Insights from the CISO Series Podcast",
    titleKo: "Linux 보안 사각지대 제거: CISO Series 팟캐스트의 인사이트",
    summary: "Discussion about eliminating Linux security blind spots featuring insights from the CISO Series Podcast.",
    summaryKo: "CISO Series 팟캐스트에서 다룬 Linux 보안 사각지대를 제거하는 방법에 대한 심층 논의입니다.",
    publishDate: "2025-05-13",
    categories: ["Podcast", "Linux Security", "Education"],
    categoriesKo: ["팟캐스트", "Linux 보안", "교육"],
    url: "https://sandflysecurity.com/blog/insights-from-the-ciso-series-podcast",
    imageUrl: "https://www.datocms-assets.com/56687/1747098840-sysk-sandfly-696x464.webp",
    author: "Sandfly Security Team",
    readTime: 15
  },
  {
    id: "5",
    slug: "sandfly-5-4-network-device-support",
    title: "Sandfly 5.4 - Cisco and Juniper Network Device Support",
    titleKo: "Sandfly 5.4 - Cisco 및 Juniper 네트워크 장치 지원",
    summary: "Sandfly announces version 5.4 with new support for Cisco and Juniper network devices.",
    summaryKo: "Sandfly가 Cisco 및 Juniper 네트워크 장치를 지원하는 버전 5.4를 발표했습니다.",
    contentKo: `## 네트워크 장치로 확장된 보안 범위

Sandfly 5.4는 Linux 서버를 넘어 네트워크 인프라까지 보안 모니터링을 확장합니다.

### 새로운 기능

#### Cisco 장치 지원
- IOS, IOS-XE, NX-OS 플랫폼
- 실시간 구성 변경 탐지
- 의심스러운 명령 실행 모니터링

#### Juniper 장치 지원
- Junos OS 전체 버전
- 보안 정책 위반 탐지
- 무단 액세스 시도 경고

### 주요 이점

1. **통합 보안 뷰**: 서버와 네트워크 장치를 하나의 플랫폼에서 관리
2. **컴플라이언스 강화**: 네트워크 구성 표준 준수 확인
3. **신속한 사고 대응**: 네트워크 레벨 공격 즉시 탐지

이번 업데이트로 Sandfly는 진정한 엔터프라이즈급 보안 플랫폼으로 진화했습니다.`,
    publishDate: "2025-04-22",
    categories: ["Product Update", "Network Security"],
    categoriesKo: ["제품 업데이트", "네트워크 보안"],
    url: "https://sandflysecurity.com/blog/sandfly-5-4-cisco-and-juniper-network-device-support",
    imageUrl: "https://www.datocms-assets.com/56687/1745338340-sandfly_5-4-cisco-juniper.png",
    author: "Sandfly Security Team",
    readTime: 6
  },
  {
    id: "6",
    slug: "detecting-bincrypter-malware",
    title: "Detecting Bincrypter Linux Malware Obfuscation",
    titleKo: "Bincrypter Linux 악성코드 난독화 탐지하기",
    summary: "The article discusses a new Linux script that encrypts and obfuscates executables to hide from on-disk detection.",
    summaryKo: "디스크 탐지를 회피하기 위해 실행 파일을 암호화하고 난독화하는 새로운 Linux 스크립트에 대해 설명합니다.",
    publishDate: "2025-03-27",
    categories: ["Malware", "Linux Security", "Cybersecurity"],
    categoriesKo: ["악성코드", "Linux 보안", "사이버보안"],
    url: "https://sandflysecurity.com/blog/detecting-bincrypter-linux-malware-obfuscation",
    author: "Sandfly Security Team",
    readTime: 12
  },
  {
    id: "7",
    slug: "sandfly-wins-cybersecurity-excellence-award",
    title: "Sandfly Wins Gold in the Cybersecurity Excellence Awards for EDR",
    titleKo: "Sandfly, 사이버보안 우수상 EDR 부문 금상 수상",
    summary: "Sandfly Security was awarded gold in the Cybersecurity Excellence Awards for Endpoint Detection Response (EDR).",
    summaryKo: "Sandfly Security가 사이버보안 우수상 엔드포인트 탐지 대응(EDR) 부문에서 금상을 수상했습니다.",
    publishDate: "2025-03-20",
    categories: ["Linux Security", "Award", "Recognition"],
    categoriesKo: ["Linux 보안", "수상", "인정"],
    url: "https://sandflysecurity.com/blog/sandfly-wins-gold-in-the-cybersecurity-excellence-awards-for-edr",
    author: "Sandfly Security Team",
    readTime: 4
  },
  {
    id: "8",
    slug: "craig-rowland-destination-linux-interview",
    title: "Destination Linux Cybersecurity Interview with Craig Rowland",
    titleKo: "Destination Linux 사이버보안 인터뷰 - Craig Rowland편",
    summary: "Interview featuring Sandfly founder Craig Rowland on the Destination Linux Podcast discussing cybersecurity topics.",
    summaryKo: "Sandfly 창립자 Craig Rowland가 Destination Linux 팟캐스트에서 사이버보안 주제를 논의하는 인터뷰입니다.",
    publishDate: "2025-03-11",
    categories: ["Podcast", "Interview", "Education"],
    categoriesKo: ["팟캐스트", "인터뷰", "교육"],
    url: "https://sandflysecurity.com/blog/destination-linux-cybersecurity-interview-with-craig-rowland",
    author: "Sandfly Security Team",
    readTime: 20
  },
  {
    id: "9",
    slug: "linux-password-hash-security",
    title: "Linux Password Hash Security White Paper and Video",
    titleKo: "Linux 패스워드 해시 보안 백서 및 비디오",
    summary: "White paper and video content examining Linux password hashes and secure password storage practices.",
    summaryKo: "Linux 패스워드 해시와 안전한 패스워드 저장 방법을 검토하는 백서 및 비디오 콘텐츠입니다.",
    publishDate: "2025-03-03",
    categories: ["Education", "Linux Security", "Password Security"],
    categoriesKo: ["교육", "Linux 보안", "패스워드 보안"],
    url: "https://sandflysecurity.com/blog/linux-password-hash-security-white-paper-and-video",
    author: "Sandfly Security Team",
    readTime: 15
  },
  {
    id: "10",
    slug: "sandfly-5-3-1-new-licensing-tiers",
    title: "Sandfly 5.3.1 - New Licensing Tiers Including Home User Edition",
    titleKo: "Sandfly 5.3.1 - 홈 사용자 에디션을 포함한 새로운 라이선스 티어",
    summary: "Product update announcing Sandfly 5.3.1 with new licensing tier options including a Home User Edition.",
    summaryKo: "홈 사용자 에디션을 포함한 새로운 라이선스 티어 옵션이 추가된 Sandfly 5.3.1 제품 업데이트입니다.",
    publishDate: "2025-03-02",
    categories: ["Product Update", "Licensing"],
    categoriesKo: ["제품 업데이트", "라이선싱"],
    url: "https://sandflysecurity.com/blog/sandfly-5-3-1-new-licensing-tiers-including-home-user-edition",
    author: "Sandfly Security Team",
    readTime: 5
  },
  {
    id: "11",
    slug: "ssh-security-best-practices",
    title: "SSH Security Best Practices and Key Management",
    titleKo: "SSH 보안 모범 사례 및 키 관리",
    summary: "Educational content about SSH security and proper SSH key management.",
    summaryKo: "SSH 보안과 적절한 SSH 키 관리에 대한 교육 콘텐츠입니다.",
    publishDate: "2025-02-27",
    categories: ["Education", "SSH Security", "Linux Security"],
    categoriesKo: ["교육", "SSH 보안", "Linux 보안"],
    url: "https://sandflysecurity.com/blog/ssh-security-best-practices-and-key-management",
    author: "Sandfly Security Team",
    readTime: 12
  },
  {
    id: "12",
    slug: "sandfly-5-3-1-selinux-support",
    title: "Sandfly 5.3.1 - SELinux Support and Stealth Rootkit Detection",
    titleKo: "Sandfly 5.3.1 - SELinux 지원 및 스텔스 루트킷 탐지",
    summary: "Announcement about Sandfly 5.3.1 features including comprehensive SELinux support.",
    summaryKo: "포괄적인 SELinux 지원을 포함한 Sandfly 5.3.1 기능에 대한 발표입니다.",
    publishDate: "2025-02-23",
    categories: ["Product Update", "SELinux", "Rootkit Detection"],
    categoriesKo: ["제품 업데이트", "SELinux", "루트킷 탐지"],
    url: "https://sandflysecurity.com/blog/sandfly-5-3-1-selinux-support-and-stealth-rootkit-detection",
    author: "Sandfly Security Team",
    readTime: 7
  },
  {
    id: "13",
    slug: "obsolete-password-hash-threats",
    title: "Threats of Obsolete Password Hashes on Linux Systems",
    titleKo: "Linux 시스템에서 구식 패스워드 해시의 위협",
    summary: "Technical analysis of the security threats posed by obsolete password hashing algorithms.",
    summaryKo: "구식 패스워드 해싱 알고리즘이 야기하는 보안 위협에 대한 기술적 분석입니다.",
    publishDate: "2025-02-13",
    categories: ["Linux Security", "Password Security", "Vulnerability Assessment"],
    categoriesKo: ["Linux 보안", "패스워드 보안", "취약점 평가"],
    url: "https://sandflysecurity.com/blog/threats-of-obsolete-password-hashes-on-linux-systems",
    author: "Sandfly Security Team",
    readTime: 10
  },
  {
    id: "14",
    slug: "sandfly-5-3-host-forensics",
    title: "Sandfly 5.3 - Linux Host Forensics and Microsoft Sentinel Integration",
    titleKo: "Sandfly 5.3 - Linux 호스트 포렌식 및 Microsoft Sentinel 통합",
    summary: "Sandfly 5.3 introduces enhanced Linux host forensics and Microsoft Sentinel integration.",
    summaryKo: "Sandfly 5.3에서 향상된 Linux 호스트 포렌식과 Microsoft Sentinel 통합을 소개합니다.",
    publishDate: "2025-01-27",
    categories: ["Product Update", "Linux Security", "Forensics", "Microsoft Sentinel"],
    categoriesKo: ["제품 업데이트", "Linux 보안", "포렌식", "Microsoft Sentinel"],
    url: "https://sandflysecurity.com/blog/sandfly-5-3-detailed-host-forensics-and-microsoft-sentinel-integration",
    author: "Sandfly Security Team",
    readTime: 8
  },
  {
    id: "15",
    slug: "how-attackers-hide-binary-payloads",
    title: "How Linux Attackers Hide Binary Payloads - Video Guide",
    titleKo: "Linux 공격자가 바이너리 페이로드를 숨기는 방법 - 비디오 가이드",
    summary: "Video content demonstrating techniques that Linux attackers use to hide binary payloads.",
    summaryKo: "Linux 공격자가 바이너리 페이로드를 숨기는 데 사용하는 기법을 보여주는 비디오 콘텐츠입니다.",
    publishDate: "2025-01-15",
    categories: ["Education", "Video", "Linux Security", "Malware Analysis"],
    categoriesKo: ["교육", "비디오", "Linux 보안", "악성코드 분석"],
    url: "https://sandflysecurity.com/blog/how-linux-attackers-hide-binary-payloads-video-guide",
    author: "Sandfly Security Team",
    readTime: 18
  },
  {
    id: "16",
    slug: "risky-business-interview",
    title: "Risky Business Snake Oilers Interview with Sandfly Security",
    titleKo: "Risky Business Snake Oilers와 Sandfly Security 인터뷰",
    summary: "An interview discussing agentless Linux security monitoring and threat hunting.",
    summaryKo: "에이전트리스 Linux 보안 모니터링과 위협 헌팅에 대해 논의하는 인터뷰입니다.",
    publishDate: "2024-12-10",
    categories: ["Videos", "Education", "Linux Forensics", "Interview"],
    categoriesKo: ["비디오", "교육", "Linux 포렌식", "인터뷰"],
    url: "https://sandflysecurity.com/blog/risky-business-snake-oilers-interview-with-sandfly-security",
    author: "Sandfly Security Team",
    readTime: 25
  }
];