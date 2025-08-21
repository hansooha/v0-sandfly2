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
    id: "19",
    slug: "phrack-linux-rootkit-deep-dive-part-1",
    title: "Phrack Linux Rootkit Deep Dive Part 1: The Backdoor",
    titleKo: "Phrack Linux 루트킷 심층 분석 1부: 백도어",
    summary: "A technical deep dive into the Phrack-leaked Linux rootkit, focusing on its sophisticated backdoor capabilities, anti-forensics, and covert communication channels.",
    summaryKo: "Phrack에서 유출된 Linux 루트킷의 기술적 심층 분석입니다. 정교한 백도어 기능, 안티 포렌식, 은밀한 통신 채널에 중점을 둡니다.",
    contentKo: `최근 Phrack 포럼에서 유출된 것으로 추정되는 정교한 Linux 스텔스 루트킷의 소스 코드가 발견되었습니다. 이 루트킷은 기존의 탐지 기법을 우회하도록 설계된 고급 기술을 사용하고 있어 Linux 시스템에 심각한 위협이 될 수 있습니다. 본 분석에서는 이 루트킷의 주요 기능과 동작 방식을 심층적으로 살펴봅니다.\n\n### 루트킷의 주요 기능\n\n- **프로세스 및 파일 숨기기**: 루트킷은 \`readdir\` 및 \`readdir64\` 시스템 콜을 후킹하여 특정 파일과 디렉터리를 숨깁니다. 이를 통해 악성 파일이 시스템 관리자에게 보이지 않게 됩니다.\n- **네트워크 연결 은폐**: \`tcp4_seq_show\` 및 \`tcp6_seq_show\`와 같은 커널 함수를 조작하여 악의적인 네트워크 연결을 숨깁니다.\n- **백도어 기능**: 루트킷은 원격 공격자가 시스템에 접근할 수 있는 백도어를 포함하고 있습니다. 이 백도어는 암호화된 채널을 통해 통신하여 탐지를 어렵게 만듭니다.\n- **지속성 메커니즘**: 시스템 재부팅 후에도 루트킷이 활성 상태를 유지하도록 다양한 지속성 기술을 사용합니다. 예를 들어, 시스템 라이브러리를 패치하거나 부팅 스크립트를 수정합니다.\n\n### 탐지 및 대응 방안\n\n이러한 정교한 루트킷을 탐지하는 것은 매우 어렵지만, 다음과 같은 방법을 통해 가능성을 높일 수 있습니다.\n\n- **무결성 검사**: 시스템 파일의 무결성을 정기적으로 검사하여 예상치 못한 변경 사항을 탐지합니다. \`AIDE\`나 \`Tripwire\`와 같은 도구를 사용할 수 있습니다.\n- **메모리 포렌식**: 루트킷은 디스크가 아닌 메모리에서 주로 활동하므로, \`Volatility\`나 \`LiME\`과 같은 도구를 사용하여 메모리 덤프를 분석하는 것이 효과적입니다.\n- **네트워크 트래픽 분석**: 비정상적인 프로토콜을 사용하거나 암호화된 트래픽이 급증하는 등 의심스러운 네트워크 활동을 모니터링합니다.\n- **에이전트 없는 EDR 솔루션**: Sandfly와 같은 에이전트 없는 EDR(Endpoint Detection and Response) 솔루션은 호스트에 소프트웨어를 설치하지 않고도 시스템을 검사하여 루트킷의 흔적을 찾을 수 있습니다.\n\n### 결론\n\nPhrack에서 유출된 이 Linux 루트킷은 현대 사이버 공격의 정교함을 잘 보여줍니다. 시스템 관리자와 보안 전문가는 이러한 위협에 대비하여 다층적인 방어 전략을 수립해야 합니다. 지속적인 모니터링과 고급 탐지 도구의 사용이 필수적입니다.`,
    publishDate: "2025-08-22",
    categories: ["Linux Security", "Rootkits", "Malware Analysis"],
    categoriesKo: ["Linux 보안", "루트킷", "악성코드 분석"],
    url: "https://sandflysecurity.com/blog/phrack-linux-rootkit-deep-dive-part-1-the-backdoor",
    imageUrl: "/images/phrack-rootkit-assets/phrack-rootkit-main-banner.png",
    author: "Craig Rowland",
    readTime: 20
  },

  {
    id: "18",
    slug: "analysis-of-leaked-linux-stealth-rootkit-from-phrack",
    title: "Analysis of a Leaked Linux Stealth Rootkit from Phrack",
    titleKo: "Phrack에서 유출된 Linux 스텔스 루트킷 분석",
    summary: "A deep dive into the techniques and mechanisms of a sophisticated Linux stealth rootkit leaked on the Phrack forums, exploring its infection vectors, hiding capabilities, and detection methods.",
    summaryKo: "Phrack 포럼에서 유출된 정교한 Linux 스텔스 루트킷의 기술과 메커니즘을 심층 분석합니다. 감염 경로, 은폐 기능, 탐지 방법을 탐구합니다.",
    contentKo: `<p class=MsoNormal align=center style='text-align:center'><a name="_49o129a369m3"></a><b><span lang=EN-US style='font-size:24.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>Analysis of a Leaked Linux Stealth Rootkit from Phrack<o:p></o:p></span></b></p><p class=MsoNormal align=center style='text-align:center'><b><span lang=KO style='font-size:18.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>Phrack에서 유출된 Linux 스텔스 루트킷 분석<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=EN-US>&nbsp;</span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><b><span lang=KO style='font-size:14.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>소개<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=KO>최근 Phrack 포럼에서 유출된 것으로 추정되는 정교한 Linux 스텔스 루트킷의 소스 코드가 발견되었습니다. 이 루트킷은 기존의 탐지 기법을 우회하도록 설계된 고급 기술을 사용하고 있어 Linux 시스템에 심각한 위협이 될 수 있습니다. 본 분석에서는 이 루트킷의 주요 기능과 동작 방식을 심층적으로 살펴봅니다.<o:p></o:p></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=EN-US>&nbsp;</span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><b><span lang=KO style='font-size:14.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>초기 접근 및 지속성<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=KO>이 루트킷은 주로 취약한 서비스를 통해 시스템에 침투한 후, 시스템 부팅 시 자동으로 실행되도록 자신을 등록합니다. 일반적인 systemd 서비스나 cron 작업 대신, 이 루트킷은 시스템 라이브러리 함수를 후킹하여 자신을 시스템 프로세스에 주입하는 방식을 사용합니다.<o:p></o:p></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=EN-US><img width=602 height=339 src="/images/phrack-rootkit-assets/image001.png"></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><b><span lang=KO style='font-size:14.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>커널 모듈 은폐<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=KO>루트킷의 핵심 기능은 커널 수준에서 자신을 은폐하는 것입니다. lsmod와 같은 명령어의 출력을 조작하여 자신의 커널 모듈이 목록에 나타나지 않도록 합니다. 이는 /proc/modules 파일의 내용을 동적으로 필터링하는 커널 함수 후킹을 통해 이루어집니다.<o:p></o:p></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=EN-US><img width=602 height=339 src="/images/phrack-rootkit-assets/image002.png"></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><b><span lang=KO style='font-size:14.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>파일 및 프로세스 은폐<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=KO>루트킷은 특정 접두사(예: _rk_)를 가진 파일이나 프로세스를 시스템에서 보이지 않게 만듭니다. readdir 시스템 콜을 후킹하여 ls, find와 같은 명령어의 결과에서 해당 파일들을 제외시킵니다. 마찬가지로 /proc 디렉토리 탐색을 조작하여 관련 프로세스를 숨깁니다.<o:p></o:p></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=EN-US>&nbsp;</span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><b><span lang=KO style='font-size:14.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>네트워크 통신 은폐<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=KO>가장 정교한 기능 중 하나는 네트워크 통신을 은폐하는 것입니다. 루트킷은 특정 '매직 패킷'을 수신했을 때만 백도어 셸을 엽니다. 평상시에는 netstat과 같은 도구로도 연결을 탐지할 수 없습니다.<o:p></o:p></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=EN-US>&nbsp;</span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><b><span lang=KO style='font-size:14.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>탐지 및 대응<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=KO>이러한 고급 루트킷을 탐지하기 위해서는 기존의 시그니처 기반 탐지를 넘어선 에이전트리스 방식의 메모리 포렌식 및 시스템 무결성 검사가 필수적입니다. Sandfly Security는 이러한 유형의 위협을 탐지하고 대응하는 데 특화된 솔루션을 제공합니다.<o:p></o:p></span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=EN-US>&nbsp;</span></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><b><span lang=KO style='font-size:14.0pt;mso-bidi-font-size:11.0pt;line-height:107%'>결론<o:p></o:p></span></b></p><p class=MsoNormal style='text-align:justify;word-break:keep-all'><span lang=KO>Phrack에서 유출된 이 루트킷은 Linux 시스템에 대한 공격이 얼마나 정교해질 수 있는지를 보여주는 좋은 예입니다. 시스템 관리자와 보안 전문가는 이러한 위협에 대비하여 항상 최신 보안 동향을 주시하고 고급 탐지 도구를 활용해야 합니다.</span>`,
    publishDate: "2025-08-20",
    categories: ["Linux Security", "Malware", "Rootkits"],
    categoriesKo: ["Linux 보안", "악성코드", "루트킷"],
    url: "https://sandflysecurity.com/blog/analysis-of-leaked-linux-stealth-rootkit-from-phrack",
    imageUrl: "/images/leaked-rootkit-main.png",
    author: "Sandfly Security Team",
    readTime: 15
  },

  {
    id: "17",
    slug: "sandfly-5-5-enhanced-linux-edr-security-compliance",
    title: "Sandfly 5.5 - Enhanced Linux EDR, Security, and Compliance",
    titleKo: "Sandfly 5.5 - Linux EDR, 보안 및 규정 준수 강화",
    summary: "Sandfly version 5.5 introduces significant enhancements to Linux EDR, security, and compliance, featuring new CIS compliance checks, expanded threat detection capabilities, and improved system forensics to provide deeper visibility and control over Linux environments.",
    summaryKo: "Sandfly 5.5 버전은 새로운 CIS 규정 준수 확인, 확장된 위협 탐지 기능, 향상된 시스템 포렌식을 통해 Linux EDR, 보안 및 규정 준수를 크게 강화하여 Linux 환경에 대한 더 깊은 가시성과 제어력을 제공합니다.",
    contentKo: `## Sandfly 5.5 출시: Linux EDR, 보안 및 규정 준수 강화\n\nSandfly Security는 최신 버전인 Sandfly 5.5를 발표하게 되어 기쁩니다. 이번 릴리스는 Linux EDR(엔드포인트 탐지 및 대응), 보안 및 규정 준수 기능을 크게 향상시키는 데 중점을 두었습니다. Sandfly 5.5는 새로운 CIS(Center for Internet Security) 규정 준수 확인, 확장된 위협 탐지 기능, 향상된 시스템 포렌식을 통해 고객이 Linux 환경에 대한 더 깊은 가시성과 제어력을 확보할 수 있도록 지원합니다.\n\n### 주요 업데이트 내용\n\n#### 1. CIS 규정 준수 모듈\n\n![Sandfly 5.5 규정 준수 대시보드](/images/sandfly-5-5-compliance-view.png)\n*Sandfly 5.5의 새로운 규정 준수 대시보드*\n\nSandfly 5.5는 이제 CIS 벤치마크에 대한 포괄적인 규정 준수 검사를 제공합니다. 이를 통해 조직은 산업 표준에 따라 Linux 시스템의 보안 구성을 자동으로 평가하고 강화할 수 있습니다.\n\n- **자동화된 검사**: 수동 작업 없이 전체 Linux 환경에 대한 CIS 벤치마크 준수 여부를 자동으로 스캔합니다.\n- **상세 보고서**: 각 호스트에 대한 상세한 규정 준수 보고서를 생성하여 미준수 항목과 해결 방법을 명확하게 제시합니다.\n- **지속적인 모니터링**: 규정 준수 상태를 지속적으로 모니터링하고 변경 사항이 발생하면 즉시 알림을 제공합니다.\n\n#### 2. 확장된 위협 탐지\n\n이번 릴리스에는 최신 Linux 위협에 대응하기 위한 25개 이상의 새로운 탐지 규칙이 포함되었습니다.\n\n- **메모리 내 위협 탐지 강화**: 파일리스 악성코드와 메모리에서 직접 실행되는 공격을 탐지하는 능력이 향상되었습니다.\n- **컨테이너 이스케이프 탐지**: Docker 및 Kubernetes 환경에서 컨테이너 이스케이프 시도를 탐지하는 새로운 규칙이 추가되었습니다.\n- **크리덴셜 탈취 방지**: \`/proc\` 파일 시스템을 악용하여 메모리에서 사용자 크리덴셜을 탈취하려는 시도를 차단합니다.\n\n#### 3. 향상된 시스템 포렌식\n\n![Sandfly 5.5 CIS 보고서 예시](/images/sandfly-5-5-cis-report.png)\n*Sandfly 5.5의 상세한 CIS 보고서 예시*\n\nSandfly 5.5는 보안 분석가가 침해 사고를 더 빠르고 정확하게 조사할 수 있도록 포렌식 데이터 수집 및 분석 기능을 강화했습니다.\n\n- **프로세스 계보 시각화**: 특정 프로세스의 생성 과정을 추적하여 악성 행위의 근본 원인을 쉽게 파악할 수 있습니다.\n- **네트워크 연결 분석**: 모든 활성 및 과거 네트워크 연결에 대한 상세 정보를 제공하여 의심스러운 통신을 신속하게 식별합니다.\n- **사용자 활동 추적**: 특정 사용자가 실행한 모든 명령어와 파일 접근 기록을 타임라인으로 제공하여 내부 위협 분석을 용이하게 합니다.\n\n### Sandfly 5.5 시작하기\n\nSandfly 5.5는 모든 고객에게 무료로 제공되는 업그레이드입니다. 지금 바로 업그레이드하여 강화된 Linux 보안 및 규정 준수 기능을 활용해 보세요. Sandfly를 처음 사용하는 경우, [무료 평가판](https://sandflysecurity.com/get-sandfly/)을 신청하여 에이전트리스 Linux 보안의 강력함을 직접 경험해 보실 수 있습니다.`,
    publishDate: "2025-08-20",
    categories: ["Product Update", "Linux Security", "Compliance"],
    categoriesKo: ["제품 업데이트", "Linux 보안", "규정 준수"],
    url: "https://sandflysecurity.com/blog/sandfly-5-5-enhanced-linux-edr-security-compliance",
    imageUrl: "/images/sandfly-5-5-release-banner.png",
    author: "Sandfly Security Team",
    readTime: 10
  },

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
    contentKo: `## Sandfly 5.4 - Cisco 및 Juniper 네트워크 장치 지원

Sandfly 5.4는 업계 최초의 새로운 기능을 도입합니다: Cisco 및 Juniper 네트워킹 장비에 대한 에이전트리스 EDR 지원. 이 새로운 기능은 고객에게 이러한 중요한 장치에 대한 완전한 Linux EDR 커버리지를 제공하며, Sandfly의 검증된 속도, 안정성 및 안전성을 결합합니다. Sandfly는 업계에서 가장 광범위한 Linux 기반 서버, 임베디드, 네트워크 어플라이언스 및 장치 지원을 계속 제공합니다.

Juniper 및 Cisco와 같은 엣지 장치 보호 외에도 Sandfly 5.4는 다음과 같은 새로운 기능을 제공합니다:

* Slack 등에 대한 알림을 위한 웹훅 통합
* 공개 및 비공개 해시 데이터베이스를 위한 위협 피드 통합
* Salt Typhoon 중국 국가 지원 전술 및 관련 활동에 대한 확장된 탐지

### Cisco 및 Juniper 네트워크 장치 지원

![Juniper Evolved OS Detail View](https://www.datocms-assets.com/56687/1745358617-juniper-os-view.png)
*Sandfly에 의해 탐지되고 모니터링되는 Juniper 라우터*

Sandfly의 전체 기능이 Linux 기반 운영 체제를 실행하는 Juniper 및 Cisco의 라우터와 스위치로 확장되었습니다. 여기에는 다음이 포함됩니다:

* 라우터용 Cisco [IOS XR](https://www.cisco.com/site/us/en/products/networking/software/ios-xr/index.html) 네트워크 운영 체제
* 스위치 및 관련 하드웨어용 Cisco Nexus [NX-OS](https://www.cisco.com/site/us/en/products/networking/cloud-networking/nx-os/index.html) 데이터 센터 운영 체제
* 라우터 및 스위치용 Juniper [Evolved OS](https://www.juniper.net/us/en/products/network-operating-system/junos-evolved.html)

Sandfly의 전체 기능 세트는 우리가 액세스할 수 있는 모든 장치에서 사용할 수 있습니다. 이는 Cisco 및 Juniper 네트워크 장비를 실행하는 고객이 다음을 얻을 수 있음을 의미합니다:

* Sandfly의 완전한 Linux EDR 탐지 커버리지
* 무단 변경, 새로운 프로세스, 새로운 사용자, 새로운 SSH 키 또는 장치에 대한 관련 변경 사항에 대한 드리프트 탐지
* 완전한 SSH 키 추적 및 SSH 보안 영역 보호
* 기존 사용자 계정의 패스워드 감사로 약한 패스워드 및 기본 패스워드 발견
* 장치에 대한 완전한 가시성

### 17개의 새로운 탐지 규칙

Sandfly 5.4에는 17개의 새로운 탐지 규칙이 포함되어 있습니다. 이러한 규칙은 더 나은 위협 탐지와 시스템 가시성을 제공합니다:

* **process_network_port_scan_nmap** - 시스템에서 실행되는 nmap 및 관련 포트 스캔 활동을 탐지합니다.
* **process_network_port_operating_static_binary** - C2 페이로드 및 백도어에서 일반적인 정적으로 빌드된 네트워크 바이너리를 탐지합니다.
* **process_masquerade_cmdline_proc_dir** - /proc을 명령줄 값으로 사용하여 실행하고 숨기는 프로세스를 탐지합니다.
* **process_network_port_scan_masscan** - masscan 포트 스캐너 활동을 탐지합니다.
* **process_network_port_scan_zmap** - zmap 네트워크 스캐너 활동을 탐지합니다.
* **process_network_port_scan_unicornscan** - unicornscan 포트 스캐너를 탐지합니다.
* **process_network_port_scan_hping** - hping 네트워크 도구 사용을 탐지합니다.
* **process_network_port_scan_netcat** - netcat을 사용한 포트 스캔 활동을 탐지합니다.
* **process_network_port_scan_socat** - socat을 사용한 네트워크 활동을 탐지합니다.
* **process_network_backdoor_reverse_shell** - 역방향 셸 백도어 활동을 탐지합니다.
* **process_network_backdoor_bind_shell** - 바인드 셸 백도어를 탐지합니다.
* **process_network_exfiltration_curl** - curl을 사용한 데이터 유출 시도를 탐지합니다.
* **process_network_exfiltration_wget** - wget을 사용한 데이터 유출을 탐지합니다.
* **process_network_tunnel_ssh** - 의심스러운 SSH 터널링 활동을 탐지합니다.
* **process_network_tunnel_stunnel** - stunnel을 사용한 터널링을 탐지합니다.
* **process_network_proxy_squid** - squid 프록시 서버 활동을 탐지합니다.
* **process_network_proxy_3proxy** - 3proxy 프록시 서버를 탐지합니다.

![Tinyshell Backdoor Detected](https://www.datocms-assets.com/56687/1745346762-tinyshell-backdoor.png)
*Sandfly에 의해 탐지된 Tinyshell 백도어*

또한 프로세스 maps 포렌식 데이터가 maps_list로 변환되어 크기와 중복 데이터를 크게 줄였습니다. 기존 검사의 확장, 프로세스 위협의 더 넓은 커버리지 등이 포함됩니다.

### Microsoft Sentinel 호스트 및 SSH 데이터

Microsoft Sentinel에 대한 더 많은 지원을 추가했습니다. 여기에는 우리가 수집하는 호스트 및 SSH 키 데이터를 플랫폼으로 전송하는 것이 포함됩니다. 이 데이터는 Sentinel 내부의 보안 팀이 추가적인 위협 헌팅 및 상관관계 분석에 사용할 수 있습니다. 호스트 데이터는 Sentinel 플랫폼 내부의 보안 팀을 위한 호스트 자산 인벤토리 데이터를 구축하는 데도 사용되어 장치 발견에 도움이 됩니다.

### Sandfly 체험하기

Cisco 및 Juniper 장치 지원은 많은 회사에게 중요한 새로운 기능이며, 국가 지원 공격자들이 자주 표적으로 삼는 엣지 장치의 침해 여부를 확인하시기 바랍니다. Sandfly를 사용하면 엔드포인트 에이전트 없이도 이러한 장치를 간단하고 안전하게 보호할 수 있습니다. 항상 그렇듯이 Sandfly는 모든 라이선스 계층에 대해 무료 체험판을 제공합니다. 자세한 정보는 아래를 참조하세요:

[Sandfly 받기](https://sandflysecurity.com/get-sandfly/)

### Sandfly 업그레이드

모든 고객은 Linux에 대한 확장된 커버리지 및 보호 옵션을 확인하기 위해 업그레이드하시기 바랍니다. 질문이 있으시면 언제든지 도움을 드리겠습니다. 새로운 기능 및 기능에 대한 문서를 참조하세요:

[Sandfly 문서](https://docs.sandflysecurity.com/)

업그레이드를 원하는 고객은 여기의 지침을 따르시기 바랍니다:

[Sandfly 업그레이드](https://docs.sandflysecurity.com/docs/upgrading-sandfly)

질문이 있으시면 [문의하기](https://www.sandflysecurity.com/contact-us/)를 통해 연락해 주세요.

Sandfly를 사용해 주셔서 감사합니다.`,
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
  },
  {
    id: "20",
    slug: "phrack-linux-stealth-rootkit-analysis",
    title: "In-depth Analysis of a Leaked Linux Stealth Rootkit from Phrack",
    titleKo: "Phrack에서 유출된 Linux 스텔스 루트킷 심층 분석",
    summary: "A detailed analysis of a sophisticated Linux stealth rootkit leaked on the Phrack forums, covering its core functionalities, detection evasion techniques, and methods for identification and response.",
    summaryKo: "Phrack 포럼에서 유출된 정교한 Linux 스텔스 루트킷에 대한 상세 분석입니다. 핵심 기능, 탐지 회피 기술, 그리고 식별 및 대응 방법을 다룹니다.",
    contentKo: `**Phrack에서 유출된 Linux 스텔스 루트킷 분석**

2025년 8월 14일 SandFly 팀

[Phrack Magazine](https://www.phrack.org/) 제72호는 최근 북한 혹은 중국 해킹 그룹으로 추정되는 단체로부터 유출된 데이터 덤프를 공개했습니다. 이 데이터에는 대규모 익스플로잇 기술, 침해된 시스템 정보, 그리고 Linux를 표적으로 삼은 스텔스 루트킷이 포함되어 있습니다. 우리는 해당 루트킷을 분석했으며, 사고 대응 담당자를 위해 추가 탐지 및 운영 세부 정보를 제공합니다.

팀들은 초기 Phrack 기사를 반드시 읽어보시기를 강력히 권장합니다. 해당 기사에서는 다음과 같은 내용을 강조합니다:

1. 중국계 위협 행위자가 한국과 대만의 정부 및 민간 부문을 표적으로 삼았습니다. 일부 표적과 전술은 북한 김수키 APT 그룹과 일치합니다.
2. 데이터 덤프는 공격자들이 한국 정부 내부 네트워크에 접근했으며 민감한 인증서에 접근할 수 있었음을 시사합니다.
3. 공격자의 데스크톱 스크린샷에는 백도어 개발이 진행 중임을 보여줍니다.

Phrack은 아래에 전체 데이터 덤프와 유출된 정보의 PDF 기사를 제공했습니다. 이 아카이브에는 다중 플랫폼용 활성 악성 소프트웨어 바이너리가 포함되어 있으므로 주의해서 다루시기 바랍니다:

[Phrack 북한 데이터 덤프](https://drive.proton.me/urls/ZQ1235FY7C#P0khjXI2uEtS)

**루트킷 세부 정보**

Phrack 기사에 따르면, 이 악성 소프트웨어는 탐지를 회피하고 모든 네트워크 포트에서 작동할 수 있는 로드 가능한 커널 모듈(LKM) 스타일의 루트킷입니다. 데이터 덤프에는 루트킷의 두 개의 번들이 포함되어 있습니다. 이 분석은 가장 최근에 날짜가 표시된 2025 버전입니다.

루트킷은 다음과 같은 기능을 가지고 있습니다:

* 악성 코드가 Linux 커널 시스템 호출을 가로채고 차단하여 탐지를 회피하는 데 널리 사용되는 [khook 라이브러리](https://github.com/milabs/khook)를 기반으로 합니다.
* lsmod와 같은 도구로 커널 모듈이 목록에 표시되지 않도록 숨깁니다.
* 프로세스와 백도어 네트워크 활동을 숨깁니다.
* */etc/init.d* 및 */etc/rc\*.d* 디렉토리에 생성된 지속성 파일을 숨깁니다.
* 어떤 포트에서든 매직 패킷을 수신하여 백도어를 활성화합니다.
* 백도어는 쉘 실행, 파일 업로드/다운로드, 프록시 활성화, 또는 측면 이동을 위해 호스트를 연결하는 기능을 수행할 수 있습니다.
* 백도어 바이너리와 생성된 쉘에 대한 포렌식 방지 기능이 포함되어 있습니다.
* 모든 트래픽은 암호화됩니다.

**루트킷 탐지**

이 루트킷은 고객 업데이트 없이 Sandfly에서 기본적으로 탐지 가능합니다. 우리는 이 유형의 루트킷에 대한 탐지 기록을 이미 보유하고 있습니다. 우리는 고객들이 이 루트킷을 정확하고 대규모로 탐지하기 위해 자동화된 도구를 사용하도록 **강력히 권장**합니다. 그러나 이 기사에서 설명하는 침해 조사 대상 호스트에 적용할 수 있는 수동 명령어를 제공할 것입니다. 아래는 이 커널 루트킷과 백도어가 활성화된 호스트에서 Sandfly가 생성하는 기본 알림입니다.

![Rootkit Sandfly Alerts](../images/phrack-rootkit-assets/image001.png)

**루트킷 기본 동작**

대부분의 LKM 스타일 루트킷과 마찬가지로 이 루트킷도 취약하고 특정 커널 버전에 따라 동작합니다. 이 루트킷도 예외는 아닙니다. 성공적으로 배포하려면 공격자는 특정 피해자 커널 버전용으로 빌드된 버전을 보유해야 합니다. 이는 번거롭고 위험하지만, 한 번 작동하면 모듈이 활성화되어 조용히 작동합니다. 그러나 이는 시스템 업데이트가 새로운 커널을 포함할 경우 루트킷이 완전히 실패하거나 로드되지 않거나 정상적으로 작동하지 않을 수 있음을 의미합니다.

**커널 모듈 위치**

악성 모듈은 공개된 버전에서 ***/usr/lib64/tracker-fs***에 저장됩니다. 이는 공격자가 쉽게 변경할 수 있으므로 특정 탐지에 의존해서는 안 됩니다. 그러나 초기 사고 대응 시 다음 명령어를 사용하여 모듈을 검색하는 것은 나쁘지 않은 방법입니다:

**stat /usr/lib64/tracker-fs**

**file /usr/lib64/tracker-fs**

이 명령어는 어떤 파일도 표시하지 않아야 합니다. 데이터가 반환된다면 모듈이 존재하며, 이는 호스트에서 활성화되었거나 과거에 활성화되었음을 의미합니다. 모듈이 활성화되었을 때 볼 수 있는 몇 가지 예시는 다음과 같습니다.

![Using stat command to reveal hidden rootkit module.](../images/phrack-rootkit-assets/image1.png)

![Using file command to reveal rootkit module.](../images/phrack-rootkit-assets/image2.png)

**서명되지 않은 모듈 커널 오염(Taint) 지표**

다음 문제의 징후는 커널 모듈이 서명되지 않았다는 것입니다. Linux에서 서명되지 않은 커널 모듈은 합법적인 공급업체(예: 그래픽 카드)에 의해 사용될 수 있지만, 시스템이 서명되지 않은 모듈을 사용하지 않는 경우 문제가 될 수 있습니다. 이 게시물에서 [오염된 커널 모듈 탐지](https://sandflysecurity.com/blog/sandfly-4-3-2-linux-loadable-kernel-module-rootkit-taint-detection)를 다루지만, 기본 명령어로도 확인할 수 있습니다.

이 루트킷의 기본 악성 커널 모듈 이름은 ***vmwfxs***입니다. 공격자가 이 이름을 쉽게 변경할 수 있으므로 이 문자열을 직접 검색하는 것은 권장하지 않습니다. 대신 다음 명령어를 사용하여 시스템에서 사용 중인 오염된 모듈을 확인하면 새로운 변종을 노출할 수 있습니다.

이 세 가지 명령어는 오염 상태 또는 이 루트킷에서 사용되는 이름인 ***vmwfxs*** 모듈의 의도적인 로딩을 표시합니다.

**dmesg | grep taint**

**dmesg | grep vmwfxs**

**grep taint /var/log/kern.log**

영향을 받은 시스템에서 ***dmesg*** 명령어로 오염 상태를 검색할 때 출력은 아래와 유사할 것입니다. 출력을 평가하여 모듈 이름이 의심스럽거나 예상치 못한 지 확인하세요.

![dmesg check for tainted modules on Linux.](../images/phrack-rootkit-assets/image003.png)

***dmesg***는 링 버퍼이므로 시간이 지나면서 메시지가 롤아웃될 수 있습니다. 일부 시스템에서 더 지속적인 정보를 확인할 수 있는 다른 영역은 ***/var/log/kern.log***입니다. 아래는 시스템 재부팅 시 각 부팅 시 커널 모듈이 로드될 때마다 다중 오염 메시지가 표시되는 예시입니다. ***dmesg*** 명령어는 디스크에 저장된 ***/var/log/kern.log***와 달리 이러한 연속성을 표시하지 않습니다.

![Malicious Linux kernel module found in /var/log/kern.log](../images/phrack-rootkit-assets/image3.png)

Sandfly에서는 오염된 커널을 식별하지만, 한 단계 더 나아가 커널 오염이 있지만 원인을 일으킨 모듈이 목록에 없는 경우도 확인합니다. 이는 모듈이 로드된 후 목록에서 자신을 제거하여 숨기려는 시도일 수 있습니다. 불행히도 이 검사는 매우 유용하지만, 이를 광범위하게 실행할 수 있는 직접적인 커맨더 도구가 없기 때문에 사용 가능한 경우 우리 탐지 기능을 사용하는 것을 권장합니다.

![Kernel taint inconsistency detected by Sandfly.](../images/phrack-rootkit-assets/image4.png)

또한 드리프트 감지를 사용하는 고객의 경우 오염 상태가 예상 프로필에서 변경된 경우 경고합니다. 이 기능도 사용 가능한 경우 훌륭한 옵션입니다.

![Kernel taint drift detection.](../images/phrack-rootkit-assets/image005.png)

**숨겨진 파일 및 디렉토리**

루트킷이 설치되면 커널 모듈, 백도어 프로그램, 부팅 시 로드되도록 하는 지속 메커니즘을 숨기기 위해 파일을 생성합니다. 해당 파일은 다음과 같습니다:

**/usr/lib64/tracker-fs (모듈)**

**/usr/include/tracker-fs/tracker-efs (백도어)**

**/etc/init.d/tracker-fs**

**/etc/rc2.d/S55tracker-fs**

**/etc/rc3.d/S55tracker-fs**

**/etc/rc5.d/S55tracker-fs**

**숨겨진 악성 모듈**

악성 커널 모듈은 ***/usr/lib64/tracker-fs*** 디렉토리에 위치합니다. 이 파일은 모듈이 활성화된 상태에서는 볼 수 없지만, 아래와 같이 직접 참조하면 일반 시스템 유틸리티로 읽을 수 있습니다:

**stat /usr/lib64/tracker-fs**

**file /usr/lib64/tracker-fs**

위 두 명령어는 커널 모듈이 존재할 경우 파일 정보를 표시합니다. 표준 ***ls*** 명령어로 디렉토리 목록에서 볼 수 없더라도 말이죠.

이 예시에서 우리는 ***/usr/lib64*** 디렉토리에 대해 ***ls***를 실행했지만 모듈을 볼 수 없습니다. 하지만 파일 이름을 직접 지정하여 ***stat*** 및 ***file*** 명령어를 실행하면 실제로 존재하지만 단순히 보이지 않는다는 것을 확인할 수 있습니다.

![Kernel module hides from directory listing, but can be seen with other commands.](../images/phrack-rootkit-assets/image5.png)

**숨겨진 백도어 바이너리**

커널 모듈과 마찬가지로 백도어가 활성화될 때 실행되는 숨겨진 바이너리가 있습니다. 이 바이너리는 ***/usr/include/tracker-fs/tracker-efs***에 숨겨져 있습니다. 아래는 ***/usr/include*** 디렉토리에서 ***ls*** 명령어를 실행한 결과로, 숨겨진 ***tracker-fs*** 디렉토리가 표시되지 않습니다. 그러나 이 디렉토리로 이동하여 ***ls*** 명령어를 실행하면 백도어 바이너리가 아래와 같이 표시됩니다:

**cd /usr/include/tracker-fs**

**ls -al**

![Revealing hidden backdoor binary.](../images/phrack-rootkit-assets/image6.png)

**지속성(Persistence) 메커니즘**

백도어는 호스트에 여러 개의 중복된 지속성 메커니즘을 생성합니다. 이 변종에서 해당 파일은 다음 위치에 위치하며, 루트킷이 활성화되면 숨겨집니다:

**/etc/init.d/tracker-fs**

**/etc/rc2.d/S55tracker-fs**

**/etc/rc3.d/S55tracker-fs**

**/etc/rc5.d/S55tracker-fs**

이 파일들은 부팅 시 악성 커널 모듈을 삽입하는 간단한 스크립트를 포함합니다:

**#!/bin/bash**

***#***

**case “$1” in**

**‘start’)**

**/sbin/insmod /usr/lib64//tracker-fs**

**;;**

**‘stop’)**

**;;**

**esac**

**exit 0**

보안 팀은 단순히 *cat* 또는 파일 목록을 확인하여 데이터를 확인할 수 있습니다. 루트킷은 ***ls*** 명령어로 파일을 숨기지만, 다음과 같이 읽는 것을 방지하지 않습니다:

**cat /etc/init.d/tracker-fs**

**cat /etc/rc2.d/S55tracker-fs**

**cat /etc/rc3.d/S55tracker-fs**

**cat /etc/rc5.d/S55tracker-fs**

위 방법은 현재 버전에서 작동하지만, 파일 이름이 변경되면 작동하지 않습니다. 관리자가 파일 목록 명령어로 파일을 볼 수 없기 때문에, 이름이 변경되면 다른 방법으로 숨김을 해제하지 않는 한 해당 파일이 무엇인지 파악하기 어려워집니다.

**Systemd 지속성**

위 스크립트는 아래와 같이 ***systemd*** 서비스를 목록으로 표시하여 확인할 수 있습니다.

**systemctl status tracker-fs.service**

![](../images/phrack-rootkit-assets/image007.png)

Sandfly를 실행 중인 경우 Host -> Services 뷰에서 새로운 ***systemd*** 서비스를 확인할 수 있습니다. 아래에서 ***tracker-fs.service***를 볼 수 있습니다. 빨간색 아이콘은 이 호스트에서 예상치 않게 드리프트 감지 표시가 되었음을 의미합니다.

![텍스트, 스크린샷, 소프트웨어, 멀티미디어 소프트웨어이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image7.png)

![Systemd service drift detection.](../images/phrack-rootkit-assets/image8.png)

**숨겨진 파일 탐지 자동화**

위와 같이 수동으로 파일 숨김 해제를 수행하는 것이 번거롭고 오류가 발생하기 쉽다고 생각하신다면, 그 판단은 맞습니다. 우리는 고객들이 Sandfly를 사용하여 이 작업을 자동화할 것을 강력히 권장합니다. Sandfly는 이 루트킷 및 기타 루트킷에 의해 숨겨진 파일을 즉시 숨김 해제하여 이러한 문제를 매우 쉽게 찾을 수 있도록 합니다. Sandfly의 탐지는 파일 이름을 어떻게 변경하더라도 작동합니다. 아래에서는 모든 숨겨진 파일이 완전히 숨김 해제된 상태로 표시됩니다. 우리는 에이전트 없이, 빠르게, 안전하게 이 작업을 수행하도록 설계되었습니다.

![Hidden files de-cloaked and alerts generated.](../images/phrack-rootkit-assets/image9.png)

![Hidden file details revealed.](../images/phrack-rootkit-assets/image009.png)

**백도어 바이너리 문자열 분석**

백도어 바이너리에 대한 간단한 ***strings*** 명령어는 상황을 확인하는 악성 데이터를 표시합니다. 아래에서는 이 파일에서 포렌식 방지 문자열 등 매우 의심스러운 콘텐츠를 확인할 수 있습니다.

**strings /usr/include/tracker-fs/tracker-efs**

![텍스트, 스크린샷이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image10.png)

**통신 소켓**

커널 모듈과 백도어는 ***/proc*** 디렉토리에 위치한 소켓을 통해 통신합니다. 현재 버전에서는 ***/proc/acpi/pcicard***에 위치하며 다음 명령어로 확인할 수 있습니다:

**ls -al /proc/acpi/pcicard**

![Rootkit communications socket under /proc.](../images/phrack-rootkit-assets/image11.png)

Phrack 기사에서는 이 소켓을 통해 통신하는 백도어의 작동 방식을 상세히 설명합니다. 우리 분석에서는 시스템에 백도어를 초기화하는 단계를 넘어서는 자세히 조사하지 않았으며, 이는 곧 논의할 내용입니다.

**백도어 동작**

루트킷의 주요 목적은 지속적이고 은밀한 백도어를 생성하는 것입니다. 백도어는 특수 매직 패킷과 올바른 비밀번호가 결합되어 SSL 연결을 초기화할 때 활성화됩니다. 백도어는 **어떤 포트에서도** 활성화될 수 있습니다. 이는 방화벽만으로는 대상 시스템을 보호하지 못할 수 있다는 점을 이해하는 것이 중요합니다. 매직 패킷이 피해 시스템에 도달하면 백도어가 활성화될 수 있습니다. 활성 포트에서 실행될 수 있기 때문에 백도어 트래픽은 웹 서버나 SSH와 같은 암호화 서비스와 혼합될 수 있습니다. 또는 완전히 사용되지 않는 포트로 전송되어 다른 방어 메커니즘을 회피할 수도 있습니다.

**백도어 비밀번호**

백도어는 작동하기 위해 비밀번호가 필요합니다. 공개된 변종에서는 단일 값으로 설정되어 있지만, 이는 쉽게 변경될 수 있으며 팀은 이를 단독으로 검색하는 것에 의존할 수 없습니다. 그러나 비밀번호는 무단 사용자의 활성화 방지 역할을 합니다.

**백도어 기능**

백도어 자체는 아래 도움말 메뉴에서 확인할 수 있듯이 기본적이면서도 강력한 기능을 갖추고 있습니다:

![Korean backdoor commands.](../images/phrack-rootkit-assets/image011.png)

기본 명령어는 다음과 같습니다:

* 대상 시스템에서 쉘을 시작합니다.
* 파일 업로드/다운로드.
* 백도어를 통해 다른 시스템으로 이동하여 측면 이동 수행.
* SOCKS5 프록시 열기.
* 연결 정보 표시.

**숨겨진 백도어 프로세스**

백도어 바이너리는 ***/usr/include/tracker-fs/tracker-efs***에 위치합니다. 활성화되면 숨겨진 프로세스로 실행되며 ***ps***와 같은 시스템 명령어로 확인할 수 없습니다. 또한 ***ss***와 같은 도구에서 네트워크 포트 활동을 숨깁니다. 아래는 모든 활성 포트 프로세스를 목록으로 표시하는 ***ss*** 명령어의 출력 결과입니다. 항목 중 하나는 프로세스 데이터가 완전히 누락되어 있으며, 이는 활성 백도어입니다.

![스크린샷, 텍스트이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image12.png)

시스템 명령어로 프로세스가 숨겨져 있지만, Sandfly는 실제로 이를 완전히 노출(de-cloak)시킵니다.

![텍스트, 스크린샷, 소프트웨어, 멀티미디어 소프트웨어이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image13.png)

**백도어 포렌식 방지**

쉘은 명령어 기록과 시간 초과를 방지하기 위해 기본적인 포렌식 방지 기능을 활성화합니다. 이를 위해 다양한 사용이력 환경 변수를 ***/dev/null****로 설정합니다.* 또한 쉘 시간 초과를 0으로 설정하려고 시도합니다. 불행히도 프로세스가 숨겨져 있어 검사하기 어렵습니다. 그러나 무료 [sandfly-processdecloak](https://github.com/sandflysecurity/sandfly-processdecloak) 도구를 사용하여 숨겨진 프로세스를 노출시킬 수 있습니다:

[sandfly-processdecloak GitHub 리포지토리](https://github.com/sandflysecurity/sandfly-processdecloak)

![De-cloaking hidden Linux process with sandfly-processdecloak](../images/phrack-rootkit-assets/image013.png)

숨겨진(cloaked) PID를 얻으면 다음 명령어로 프로세스 환경을 확인할 수 있습니다:

**strings /proc/PID/environ**

숨겨진 프로세스(PID 2533)의 출력은 아래와 같이 이력 파일을 ***/dev/null***로 설정하는 의심스러운 환경 변수 설정을 보여줍니다.

![Suspicious anti-forensics process environment data.](../images/phrack-rootkit-assets/image14.png)

아래는 Sandfly가 보고한 활성 백도어의 포렌식 방지 기능입니다. 백도어 프로세스에 의해 생성된 쉘은 포렌식 방지 기능을 상속받습니다.

![Backdoor anti-forensics detected.](../images/phrack-rootkit-assets/image15.png)

**백도어 멀티-Hop, SOCKS5 프록시 및 파일 유틸리티**

백도어는 운영자가 여러 루트킷을 연결하여 시스템 간 이동할 수 있도록 합니다. 또한 파일 업로드/다운로드 및 SOCKS5 프록시 시작 기능도 포함됩니다.

아래는 ***trans***명령어의 도움말입니다. 공격자가 시스템 간 이동을 위해 사용할 수 있는 흥미로운 매개변수가 여러 개 있습니다. 포트 노크 및 프로토콜 유형 변경 등이 포함됩니다. 이 메커니즘을 통해 공격자는 감염된 호스트에 흔적을 남기지 않고 스텔스 루트킷을 사용하여 시스템 간 이동이 가능합니다.

![Lateral movement features in the backdoor.](../images/phrack-rootkit-assets/image015.png)

마찬가지로, SOCKS5 옵션에도 공격자가 활용할 수 있는 명령어가 있습니다:

![스크린샷이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image16.png)

**백도어 쉘**

호스트에서 쉘을 실행하여 영향을 받은 시스템을 직접 공격할 수 있는 옵션도 있습니다.

![Shell with timing option for packets.](../images/phrack-rootkit-assets/image17.png)

쉘에는 패킷 스트림을 지연시키는 흥미로운 **“-t”** 옵션이 있습니다. 이는 상태 기반 네트워크 모니터링 규칙을 회피하거나 다중 Hop 연결에서의 타임아웃을 방지하기 위한 목적일 수 있습니다.

쉘이 실행되면 백도어 부모 프로세스의 일부로 숨겨집니다. 이를 다시 노출하려면 Sandfly와 같은 특수 도구나 위에서 언급된 무료 프로세스 노출 도구가 필요합니다.

![Sandfly de-cloaks hidden backdoor shell.](../images/phrack-rootkit-assets/image017.png)

**Sandfly의 AI 분석 활용**

위 내용은 많은 정보를 포함하고 있지만, 최근 Sandfly 5.5에 AI LLM 통합을 도입했습니다. 에이전트 없는 Linux 포렌식 데이터는 우수하며, 이는 주요 LLM 제공업체 및 온프레미스 솔루션에서 매우 우수한 분석 결과를 제공합니다. 아래는 루트킷 경고에 대한 AI 분석 결과로, 발생 중인 상황을 정확히 요약한 내용입니다. 고객들은 이 기능을 사용하여 경고 분류(triage)에 도움을 받으시기를 권장합니다.

![Sandfly's AI Analyst provides powerful results.](../images/phrack-rootkit-assets/image18.png)

**감염된 시스템 정리**

이 질문을 자주 받기 때문에 명확히 밝히겠습니다: **루트킷에 영향을 받은 Linux 호스트를 정리하려고 시도하지 마십시오.** 시스템은 격리되어야 하며, 공격자가 시스템에 침입한 방법을 파악하기 위해 원인 분석을 수행한 후 파괴되어야 합니다. 루트 권한이 획득되면 시스템에 어떤 변경이 가해졌는지 확인할 수 없으며, 재구축해야 합니다.

**최종 결론**

이 문서가 광고처럼 보이지 않도록 노력했지만, 이처럼 은밀한 루트킷은 자동화된 탐지 작업이 필수적이며, 영향을 받은 시스템이 식별된 후에만 수동 검토가 필요합니다. 이 루트킷은 비교적 잘 알려진 기반 라이브러리(***khook***)를 사용합니다. 그러나 다중 호스트를 통해 사이런트로 작동하며 측면 이동을 가능하게 하는 강력한 백도어를 추가했습니다. Phrack 기사에서는 이 루트킷이 국가 차원의 도구 키트 일부라고 주장하며, 우리 분석과 다른 유출된 데이터에 따르면 이는 가능성이 높습니다.

고객 여러분은 모든 Linux 시스템에 주의를 기울여 주시기 바랍니다. 우리는 에이전트 없는 Linux 보안 솔루션을 사용하기 위한 무료 체험판과 사고 대응 라이선스를 제공합니다.

**감사의 말씀**

Phrack의 저자들에게 데이터 덤프와 초기 분석에 대해 감사드립니다. 자세한 내용은 그들의 웹사이트를 방문해 주시기 바랍니다:

[Phrack](https://sandflysecurity.com/blog/www.phrack.org)

위협 행위자의 하드 드라이브 원본 덤프와 Phrack의 분석 내용은 아래에 포함되어 있습니다:

[Phrack North Korean Data Dump](https://drive.proton.me/urls/ZQ1235FY7C#P0khjXI2uEtS)

**침해 지표**

아래에 침해 지표 목록을 포함합니다. 주의사항: 이 값들은 루트킷 작성자에 의해 쉽게 변경될 수 있으며, 짧은 시간 내에 오래된 정보가 될 수 있습니다. Linux에서 파일 이름이나 다른 취약한 지표를 검색하는 대신 일반적인 공격 전술을 추적하는 것을 권장합니다. 또한 Linux 악성 소프트웨어를 찾기 위해 해시 값을 사용하지 않도록 권장합니다. 해시 값은 매우 신뢰할 수 없습니다.

**/usr/lib64/tracker-fs**

**/usr/include/tracker-fs/tracker-efs**

**/etc/init.d/tracker-fs**

**/etc/rc2.d/S55tracker-fs**

**/etc/rc3.d/S55tracker-fs**

**/etc/rc5.d/S55tracker-fs**

**/proc/acpi/pcicard**
`

Phrack은 아래에 전체 데이터 덤프와 유출된 정보의 PDF 기사를 제공했습니다. 이 아카이브에는 다중 플랫폼용 활성 악성 소프트웨어 바이너리가 포함되어 있으므로 주의해서 다루시기 바랍니다:

[Phrack 북한 데이터 덤프](https://drive.proton.me/urls/ZQ1235FY7C#P0khjXI2uEtS)

**루트킷 세부 정보**

Phrack 기사에 따르면, 이 악성 소프트웨어는 탐지를 회피하고 모든 네트워크 포트에서 작동할 수 있는 로드 가능한 커널 모듈(LKM) 스타일의 루트킷입니다. 데이터 덤프에는 루트킷의 두 개의 번들이 포함되어 있습니다. 이 분석은 가장 최근에 날짜가 표시된 2025 버전입니다.

루트킷은 다음과 같은 기능을 가지고 있습니다:

* 악성 코드가 Linux 커널 시스템 호출을 가로채고 차단하여 탐지를 회피하는 데 널리 사용되는 [khook 라이브러리](https://github.com/milabs/khook)를 기반으로 합니다.
* lsmod와 같은 도구로 커널 모듈이 목록에 표시되지 않도록 숨깁니다.
* 프로세스와 백도어 네트워크 활동을 숨깁니다.
* */etc/init.d* 및 */etc/rc\*.d* 디렉토리에 생성된 지속성 파일을 숨깁니다.
* 어떤 포트에서든 매직 패킷을 수신하여 백도어를 활성화합니다.
* 백도어는 쉘 실행, 파일 업로드/다운로드, 프록시 활성화, 또는 측면 이동을 위해 호스트를 연결하는 기능을 수행할 수 있습니다.
* 백도어 바이너리와 생성된 쉘에 대한 포렌식 방지 기능이 포함되어 있습니다.
* 모든 트래픽은 암호화됩니다.

**루트킷 탐지**

이 루트킷은 고객 업데이트 없이 Sandfly에서 기본적으로 탐지 가능합니다. 우리는 이 유형의 루트킷에 대한 탐지 기록을 이미 보유하고 있습니다. 우리는 고객들이 이 루트킷을 정확하고 대규모로 탐지하기 위해 자동화된 도구를 사용하도록 **강력히 권장**합니다. 그러나 이 기사에서 설명하는 침해 조사 대상 호스트에 적용할 수 있는 수동 명령어를 제공할 것입니다. 아래는 이 커널 루트킷과 백도어가 활성화된 호스트에서 Sandfly가 생성하는 기본 알림입니다.

![Rootkit Sandfly Alerts](../images/phrack-rootkit-assets/image001.png)

**루트킷 기본 동작**

대부분의 LKM 스타일 루트킷과 마찬가지로 이 루트킷도 취약하고 특정 커널 버전에 따라 동작합니다. 이 루트킷도 예외는 아닙니다. 성공적으로 배포하려면 공격자는 특정 피해자 커널 버전용으로 빌드된 버전을 보유해야 합니다. 이는 번거롭고 위험하지만, 한 번 작동하면 모듈이 활성화되어 조용히 작동합니다. 그러나 이는 시스템 업데이트가 새로운 커널을 포함할 경우 루트킷이 완전히 실패하거나 로드되지 않거나 정상적으로 작동하지 않을 수 있음을 의미합니다.

**커널 모듈 위치**

악성 모듈은 공개된 버전에서 ***/usr/lib64/tracker-fs***에 저장됩니다. 이는 공격자가 쉽게 변경할 수 있으므로 특정 탐지에 의존해서는 안 됩니다. 그러나 초기 사고 대응 시 다음 명령어를 사용하여 모듈을 검색하는 것은 나쁘지 않은 방법입니다:

**stat /usr/lib64/tracker-fs**

**file /usr/lib64/tracker-fs**

이 명령어는 어떤 파일도 표시하지 않아야 합니다. 데이터가 반환된다면 모듈이 존재하며, 이는 호스트에서 활성화되었거나 과거에 활성화되었음을 의미합니다. 모듈이 활성화되었을 때 볼 수 있는 몇 가지 예시는 다음과 같습니다.

![Using stat command to reveal hidden rootkit module.](../images/phrack-rootkit-assets/image1.png)

![Using file command to reveal rootkit module.](../images/phrack-rootkit-assets/image2.png)

**서명되지 않은 모듈 커널 오염(Taint) 지표**

다음 문제의 징후는 커널 모듈이 서명되지 않았다는 것입니다. Linux에서 서명되지 않은 커널 모듈은 합법적인 공급업체(예: 그래픽 카드)에 의해 사용될 수 있지만, 시스템이 서명되지 않은 모듈을 사용하지 않는 경우 문제가 될 수 있습니다. 이 게시물에서 [오염된 커널 모듈 탐지](https://sandflysecurity.com/blog/sandfly-4-3-2-linux-loadable-kernel-module-rootkit-taint-detection)를 다루지만, 기본 명령어로도 확인할 수 있습니다.

이 루트킷의 기본 악성 커널 모듈 이름은 ***vmwfxs***입니다. 공격자가 이 이름을 쉽게 변경할 수 있으므로 이 문자열을 직접 검색하는 것은 권장하지 않습니다. 대신 다음 명령어를 사용하여 시스템에서 사용 중인 오염된 모듈을 확인하면 새로운 변종을 노출할 수 있습니다.

이 세 가지 명령어는 오염 상태 또는 이 루트킷에서 사용되는 이름인 ***vmwfxs*** 모듈의 의도적인 로딩을 표시합니다.

**dmesg | grep taint**

**dmesg | grep vmwfxs**

**grep taint /var/log/kern.log**

영향을 받은 시스템에서 ***dmesg*** 명령어로 오염 상태를 검색할 때 출력은 아래와 유사할 것입니다. 출력을 평가하여 모듈 이름이 의심스럽거나 예상치 못한 지 확인하세요.

![dmesg check for tainted modules on Linux.](../images/phrack-rootkit-assets/image003.png)

***dmesg***는 링 버퍼이므로 시간이 지나면서 메시지가 롤아웃될 수 있습니다. 일부 시스템에서 더 지속적인 정보를 확인할 수 있는 다른 영역은 ***/var/log/kern.log***입니다. 아래는 시스템 재부팅 시 각 부팅 시 커널 모듈이 로드될 때마다 다중 오염 메시지가 표시되는 예시입니다. ***dmesg*** 명령어는 디스크에 저장된 ***/var/log/kern.log***와 달리 이러한 연속성을 표시하지 않습니다.

![Malicious Linux kernel module found in /var/log/kern.log](../images/phrack-rootkit-assets/image3.png)

Sandfly에서는 오염된 커널을 식별하지만, 한 단계 더 나아가 커널 오염이 있지만 원인을 일으킨 모듈이 목록에 없는 경우도 확인합니다. 이는 모듈이 로드된 후 목록에서 자신을 제거하여 숨기려는 시도일 수 있습니다. 불행히도 이 검사는 매우 유용하지만, 이를 광범위하게 실행할 수 있는 직접적인 커맨더 도구가 없기 때문에 사용 가능한 경우 우리 탐지 기능을 사용하는 것을 권장합니다.

![Kernel taint inconsistency detected by Sandfly.](../images/phrack-rootkit-assets/image4.png)

또한 드리프트 감지를 사용하는 고객의 경우 오염 상태가 예상 프로필에서 변경된 경우 경고합니다. 이 기능도 사용 가능한 경우 훌륭한 옵션입니다.

![Kernel taint drift detection.](../images/phrack-rootkit-assets/image005.png)

**숨겨진 파일 및 디렉토리**

루트킷이 설치되면 커널 모듈, 백도어 프로그램, 부팅 시 로드되도록 하는 지속 메커니즘을 숨기기 위해 파일을 생성합니다. 해당 파일은 다음과 같습니다:

**/usr/lib64/tracker-fs (모듈)**

**/usr/include/tracker-fs/tracker-efs (백도어)**

**/etc/init.d/tracker-fs**

**/etc/rc2.d/S55tracker-fs**

**/etc/rc3.d/S55tracker-fs**

**/etc/rc5.d/S55tracker-fs**

**숨겨진 악성 모듈**

악성 커널 모듈은 ***/usr/lib64/tracker-fs*** 디렉토리에 위치합니다. 이 파일은 모듈이 활성화된 상태에서는 볼 수 없지만, 아래와 같이 직접 참조하면 일반 시스템 유틸리티로 읽을 수 있습니다:

**stat /usr/lib64/tracker-fs**

**file /usr/lib64/tracker-fs**

위 두 명령어는 커널 모듈이 존재할 경우 파일 정보를 표시합니다. 표준 ***ls*** 명령어로 디렉토리 목록에서 볼 수 없더라도 말이죠.

이 예시에서 우리는 ***/usr/lib64*** 디렉토리에 대해 ***ls***를 실행했지만 모듈을 볼 수 없습니다. 하지만 파일 이름을 직접 지정하여 ***stat*** 및 ***file*** 명령어를 실행하면 실제로 존재하지만 단순히 보이지 않는다는 것을 확인할 수 있습니다.

![Kernel module hides from directory listing, but can be seen with other commands.](../images/phrack-rootkit-assets/image5.png)

**숨겨진 백도어 바이너리**

커널 모듈과 마찬가지로 백도어가 활성화될 때 실행되는 숨겨진 바이너리가 있습니다. 이 바이너리는 ***/usr/include/tracker-fs/tracker-efs***에 숨겨져 있습니다. 아래는 ***/usr/include*** 디렉토리에서 ***ls*** 명령어를 실행한 결과로, 숨겨진 ***tracker-fs*** 디렉토리가 표시되지 않습니다. 그러나 이 디렉토리로 이동하여 ***ls*** 명령어를 실행하면 백도어 바이너리가 아래와 같이 표시됩니다:

**cd /usr/include/tracker-fs**

**ls -al**

![Revealing hidden backdoor binary.](../images/phrack-rootkit-assets/image6.png)

**지속성(Persistence) 메커니즘**

백도어는 호스트에 여러 개의 중복된 지속성 메커니즘을 생성합니다. 이 변종에서 해당 파일은 다음 위치에 위치하며, 루트킷이 활성화되면 숨겨집니다:

**/etc/init.d/tracker-fs**

**/etc/rc2.d/S55tracker-fs**

**/etc/rc3.d/S55tracker-fs**

**/etc/rc5.d/S55tracker-fs**

이 파일들은 부팅 시 악성 커널 모듈을 삽입하는 간단한 스크립트를 포함합니다:

**#!/bin/bash**

***#***

**case “$1” in**

**‘start’)**

**/sbin/insmod /usr/lib64//tracker-fs**

**;;**

**‘stop’)**

**;;**

**esac**

**exit 0**

보안 팀은 단순히 *cat* 또는 파일 목록을 확인하여 데이터를 확인할 수 있습니다. 루트킷은 ***ls*** 명령어로 파일을 숨기지만, 다음과 같이 읽는 것을 방지하지 않습니다:

**cat /etc/init.d/tracker-fs**

**cat /etc/rc2.d/S55tracker-fs**

**cat /etc/rc3.d/S55tracker-fs**

**cat /etc/rc5.d/S55tracker-fs**

위 방법은 현재 버전에서 작동하지만, 파일 이름이 변경되면 작동하지 않습니다. 관리자가 파일 목록 명령어로 파일을 볼 수 없기 때문에, 이름이 변경되면 다른 방법으로 숨김을 해제하지 않는 한 해당 파일이 무엇인지 파악하기 어려워집니다.

**Systemd 지속성**

위 스크립트는 아래와 같이 ***systemd*** 서비스를 목록으로 표시하여 확인할 수 있습니다.

**systemctl status tracker-fs.service**

![](../images/phrack-rootkit-assets/image007.png)

Sandfly를 실행 중인 경우 Host -> Services 뷰에서 새로운 ***systemd*** 서비스를 확인할 수 있습니다. 아래에서 ***tracker-fs.service***를 볼 수 있습니다. 빨간색 아이콘은 이 호스트에서 예상치 않게 드리프트 감지 표시가 되었음을 의미합니다.

![텍스트, 스크린샷, 소프트웨어, 멀티미디어 소프트웨어이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image7.png)

![Systemd service drift detection.](../images/phrack-rootkit-assets/image8.png)

**숨겨진 파일 탐지 자동화**

위와 같이 수동으로 파일 숨김 해제를 수행하는 것이 번거롭고 오류가 발생하기 쉽다고 생각하신다면, 그 판단은 맞습니다. 우리는 고객들이 Sandfly를 사용하여 이 작업을 자동화할 것을 강력히 권장합니다. Sandfly는 이 루트킷 및 기타 루트킷에 의해 숨겨진 파일을 즉시 숨김 해제하여 이러한 문제를 매우 쉽게 찾을 수 있도록 합니다. Sandfly의 탐지는 파일 이름을 어떻게 변경하더라도 작동합니다. 아래에서는 모든 숨겨진 파일이 완전히 숨김 해제된 상태로 표시됩니다. 우리는 에이전트 없이, 빠르게, 안전하게 이 작업을 수행하도록 설계되었습니다.

![Hidden files de-cloaked and alerts generated.](../images/phrack-rootkit-assets/image9.png)

![Hidden file details revealed.](../images/phrack-rootkit-assets/image009.png)

**백도어 바이너리 문자열 분석**

백도어 바이너리에 대한 간단한 ***strings*** 명령어는 상황을 확인하는 악성 데이터를 표시합니다. 아래에서는 이 파일에서 포렌식 방지 문자열 등 매우 의심스러운 콘텐츠를 확인할 수 있습니다.

**strings /usr/include/tracker-fs/tracker-efs**

![텍스트, 스크린샷이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image10.png)

**통신 소켓**

커널 모듈과 백도어는 ***/proc*** 디렉토리에 위치한 소켓을 통해 통신합니다. 현재 버전에서는 ***/proc/acpi/pcicard***에 위치하며 다음 명령어로 확인할 수 있습니다:

**ls -al /proc/acpi/pcicard**

![Rootkit communications socket under /proc.](../images/phrack-rootkit-assets/image11.png)

Phrack 기사에서는 이 소켓을 통해 통신하는 백도어의 작동 방식을 상세히 설명합니다. 우리 분석에서는 시스템에 백도어를 초기화하는 단계를 넘어서는 자세히 조사하지 않았으며, 이는 곧 논의할 내용입니다.

**백도어 동작**

루트킷의 주요 목적은 지속적이고 은밀한 백도어를 생성하는 것입니다. 백도어는 특수 매직 패킷과 올바른 비밀번호가 결합되어 SSL 연결을 초기화할 때 활성화됩니다. 백도어는 **어떤 포트에서도** 활성화될 수 있습니다. 이는 방화벽만으로는 대상 시스템을 보호하지 못할 수 있다는 점을 이해하는 것이 중요합니다. 매직 패킷이 피해 시스템에 도달하면 백도어가 활성화될 수 있습니다. 활성 포트에서 실행될 수 있기 때문에 백도어 트래픽은 웹 서버나 SSH와 같은 암호화 서비스와 혼합될 수 있습니다. 또는 완전히 사용되지 않는 포트로 전송되어 다른 방어 메커니즘을 회피할 수도 있습니다.

**백도어 비밀번호**

백도어는 작동하기 위해 비밀번호가 필요합니다. 공개된 변종에서는 단일 값으로 설정되어 있지만, 이는 쉽게 변경될 수 있으며 팀은 이를 단독으로 검색하는 것에 의존할 수 없습니다. 그러나 비밀번호는 무단 사용자의 활성화 방지 역할을 합니다.

**백도어 기능**

백도어 자체는 아래 도움말 메뉴에서 확인할 수 있듯이 기본적이면서도 강력한 기능을 갖추고 있습니다:

![Korean backdoor commands.](../images/phrack-rootkit-assets/image011.png)

기본 명령어는 다음과 같습니다:

* 대상 시스템에서 쉘을 시작합니다.
* 파일 업로드/다운로드.
* 백도어를 통해 다른 시스템으로 이동하여 측면 이동 수행.
* SOCKS5 프록시 열기.
* 연결 정보 표시.

**숨겨진 백도어 프로세스**

백도어 바이너리는 ***/usr/include/tracker-fs/tracker-efs***에 위치합니다. 활성화되면 숨겨진 프로세스로 실행되며 ***ps***와 같은 시스템 명령어로 확인할 수 없습니다. 또한 ***ss***와 같은 도구에서 네트워크 포트 활동을 숨깁니다. 아래는 모든 활성 포트 프로세스를 목록으로 표시하는 ***ss*** 명령어의 출력 결과입니다. 항목 중 하나는 프로세스 데이터가 완전히 누락되어 있으며, 이는 활성 백도어입니다.

![스크린샷, 텍스트이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image12.png)

시스템 명령어로 프로세스가 숨겨져 있지만, Sandfly는 실제로 이를 완전히 노출(de-cloak)시킵니다.

![텍스트, 스크린샷, 소프트웨어, 멀티미디어 소프트웨어이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image13.png)

**백도어 포렌식 방지**

쉘은 명령어 기록과 시간 초과를 방지하기 위해 기본적인 포렌식 방지 기능을 활성화합니다. 이를 위해 다양한 사용이력 환경 변수를 ***/dev/null****로 설정합니다.* 또한 쉘 시간 초과를 0으로 설정하려고 시도합니다. 불행히도 프로세스가 숨겨져 있어 검사하기 어렵습니다. 그러나 무료 [sandfly-processdecloak](https://github.com/sandflysecurity/sandfly-processdecloak) 도구를 사용하여 숨겨진 프로세스를 노출시킬 수 있습니다:

[sandfly-processdecloak GitHub 리포지토리](https://github.com/sandflysecurity/sandfly-processdecloak)

![De-cloaking hidden Linux process with sandfly-processdecloak](../images/phrack-rootkit-assets/image013.png)

숨겨진(cloaked) PID를 얻으면 다음 명령어로 프로세스 환경을 확인할 수 있습니다:

**strings /proc/PID/environ**

숨겨진 프로세스(PID 2533)의 출력은 아래와 같이 이력 파일을 ***/dev/null***로 설정하는 의심스러운 환경 변수 설정을 보여줍니다.

![Suspicious anti-forensics process environment data.](../images/phrack-rootkit-assets/image14.png)

아래는 Sandfly가 보고한 활성 백도어의 포렌식 방지 기능입니다. 백도어 프로세스에 의해 생성된 쉘은 포렌식 방지 기능을 상속받습니다.

![Backdoor anti-forensics detected.](../images/phrack-rootkit-assets/image15.png)

**백도어 멀티-Hop, SOCKS5 프록시 및 파일 유틸리티**

백도어는 운영자가 여러 루트킷을 연결하여 시스템 간 이동할 수 있도록 합니다. 또한 파일 업로드/다운로드 및 SOCKS5 프록시 시작 기능도 포함됩니다.

아래는 ***trans***명령어의 도움말입니다. 공격자가 시스템 간 이동을 위해 사용할 수 있는 흥미로운 매개변수가 여러 개 있습니다. 포트 노크 및 프로토콜 유형 변경 등이 포함됩니다. 이 메커니즘을 통해 공격자는 감염된 호스트에 흔적을 남기지 않고 스텔스 루트킷을 사용하여 시스템 간 이동이 가능합니다.

![Lateral movement features in the backdoor.](../images/phrack-rootkit-assets/image015.png)

마찬가지로, SOCKS5 옵션에도 공격자가 활용할 수 있는 명령어가 있습니다:

![스크린샷이(가) 표시된 사진  AI 생성 콘텐츠는 정확하지 않을 수 있습니다.](../images/phrack-rootkit-assets/image16.png)

**백도어 쉘**

호스트에서 쉘을 실행하여 영향을 받은 시스템을 직접 공격할 수 있는 옵션도 있습니다.

![Shell with timing option for packets.](../images/phrack-rootkit-assets/image17.png)

쉘에는 패킷 스트림을 지연시키는 흥미로운 **“-t”** 옵션이 있습니다. 이는 상태 기반 네트워크 모니터링 규칙을 회피하거나 다중 Hop 연결에서의 타임아웃을 방지하기 위한 목적일 수 있습니다. 

쉘이 실행되면 백도어 부모 프로세스의 일부로 숨겨집니다. 이를 다시 노출하려면 Sandfly와 같은 특수 도구나 위에서 언급된 무료 프로세스 노출 도구가 필요합니다.

![Sandfly de-cloaks hidden backdoor shell.](../images/phrack-rootkit-assets/image017.png)

**Sandfly의 AI 분석 활용**

위 내용은 많은 정보를 포함하고 있지만, 최근 Sandfly 5.5에 AI LLM 통합을 도입했습니다. 에이전트 없는 Linux 포렌식 데이터는 우수하며, 이는 주요 LLM 제공업체 및 온프레미스 솔루션에서 매우 우수한 분석 결과를 제공합니다. 아래는 루트킷 경고에 대한 AI 분석 결과로, 발생 중인 상황을 정확히 요약한 내용입니다. 고객들은 이 기능을 사용하여 경고 분류(triage)에 도움을 받으시기를 권장합니다.

![Sandfly's AI Analyst provides powerful results.](../images/phrack-rootkit-assets/image18.png)

**감염된 시스템 정리**

이 질문을 자주 받기 때문에 명확히 밝히겠습니다: **루트킷에 영향을 받은 Linux 호스트를 정리하려고 시도하지 마십시오.** 시스템은 격리되어야 하며, 공격자가 시스템에 침입한 방법을 파악하기 위해 원인 분석을 수행한 후 파괴되어야 합니다. 루트 권한이 획득되면 시스템에 어떤 변경이 가해졌는지 확인할 수 없으며, 재구축해야 합니다.

**최종 결론**

이 문서가 광고처럼 보이지 않도록 노력했지만, 이처럼 은밀한 루트킷은 자동화된 탐지 작업이 필수적이며, 영향을 받은 시스템이 식별된 후에만 수동 검토가 필요합니다. 이 루트킷은 비교적 잘 알려진 기반 라이브러리(***khook***)를 사용합니다. 그러나 다중 호스트를 통해 사이런트로 작동하며 측면 이동을 가능하게 하는 강력한 백도어를 추가했습니다. Phrack 기사에서는 이 루트킷이 국가 차원의 도구 키트 일부라고 주장하며, 우리 분석과 다른 유출된 데이터에 따르면 이는 가능성이 높습니다.

고객 여러분은 모든 Linux 시스템에 주의를 기울여 주시기 바랍니다. 우리는 에이전트 없는 Linux 보안 솔루션을 사용하기 위한 무료 체험판과 사고 대응 라이선스를 제공합니다.

**감사의 말씀**

Phrack의 저자들에게 데이터 덤프와 초기 분석에 대해 감사드립니다. 자세한 내용은 그들의 웹사이트를 방문해 주시기 바랍니다:

[Phrack](https://sandflysecurity.com/blog/www.phrack.org)

위협 행위자의 하드 드라이브 원본 덤프와 Phrack의 분석 내용은 아래에 포함되어 있습니다:

[Phrack North Korean Data Dump](https://drive.proton.me/urls/ZQ1235FY7C#P0khjXI2uEtS)

**침해 지표**

아래에 침해 지표 목록을 포함합니다. 주의사항: 이 값들은 루트킷 작성자에 의해 쉽게 변경될 수 있으며, 짧은 시간 내에 오래된 정보가 될 수 있습니다. Linux에서 파일 이름이나 다른 취약한 지표를 검색하는 대신 일반적인 공격 전술을 추적하는 것을 권장합니다. 또한 Linux 악성 소프트웨어를 찾기 위해 해시 값을 사용하지 않도록 권장합니다. 해시 값은 매우 신뢰할 수 없습니다.

**/usr/lib64/tracker-fs**

**/usr/include/tracker-fs/tracker-efs**

**/etc/init.d/tracker-fs**

**/etc/rc2.d/S55tracker-fs**

**/etc/rc3.d/S55tracker-fs**

**/etc/rc5.d/S55tracker-fs**

**/proc/acpi/pcicard**
`

Phrack은 아래에 전체 데이터 덤프와 유출된 정보의 PDF 기사를 제공했습니다. 이 아카이브에는 다중 플랫폼용 활성 악성 소프트웨어 바이너리가 포함되어 있으므로 주의해서 다루시기 바랍니다:

[Phrack 북한 데이터 덤프](https://drive.proton.me/urls/ZQ1235FY7C#P0khjXI2uEtS)

**루트킷 세부 정보**
이러한 정교한 루트킷을 탐지하는 것은 매우 어렵지만, 다음과 같은 방법을 통해 가능성을 높일 수 있습니다.

-   **무결성 검사**: 시스템 파일의 무결성을 정기적으로 검사하여 예상치 못한 변경 사항을 탐지합니다. \`AIDE\`나 \`Tripwire\`와 같은 도구를 사용할 수 있습니다.
-   **메모리 포렌식**: 루트킷은 디스크가 아닌 메모리에서 주로 활동하므로, \`Volatility\`나 \`LiME\`과 같은 도구를 사용하여 메모리 덤프를 분석하는 것이 효과적입니다.
-   **네트워크 트래픽 분석**: 비정상적인 프로토콜 사용이나 암호화된 트래픽의 증가를 모니터링합니다.

![이미지 3: 메모리 포렌식 결과 예시](/images/phrack-rootkit-assets/image003.png)

## 기술적 세부사항

### 파일 숨기기 메커니즘

루트킷은 \`sys_getdents\`와 \`sys_getdents64\` 시스템 콜을 후킹하여 파일 목록을 반환하기 전에 특정 파일 이름을 필터링합니다. 필터링할 파일 이름은 설정 파일에 암호화된 형태로 저장됩니다.

\`\`\`c
asmlinkage long hooked_getdents(unsigned int fd, struct linux_dirent __user *dirent, unsigned int count) {
    // ... 원본 getdents 호출 ...
    // ... 반환된 결과에서 악성 파일 필터링 ...
    return new_count;
}
\`\`\`

### 네트워크 연결 은폐

루트킷은 \`/proc/net/tcp\` 및 \`/proc/net/udp\` 파일의 내용을 생성하는 함수를 후킹합니다. 이를 통해 특정 IP 주소나 포트와 관련된 연결 정보를 숨길 수 있습니다.

![이미지 4: 네트워크 은폐 로직](/images/phrack-rootkit-assets/image004.png)

### 백도어 통신

백도어는 ICMP 또는 DNS 터널링을 사용하여 C2(Command and Control) 서버와 통신합니다. 모든 통신 내용은 AES-256으로 암호화되어 중간에서 가로채더라도 내용을 파악하기 어렵게 만듭니다.

## 결론

이 루트킷은 현대적인 Linux 시스템을 대상으로 하는 정교한 위협의 대표적인 예입니다. 시스템 관리자와 보안 전문가는 이러한 위협에 대응하기 위해 전통적인 파일 기반 탐지를 넘어 메모리 포렌식, 네트워크 트래픽 분석 등 다각적인 접근 방식을 채택해야 합니다. Sandfly와 같은 에이전트리스 EDR 솔루션은 커널 수준의 무결성을 검사하고 의심스러운 시스템 콜 동작을 탐지하여 이러한 위협을 식별하는 데 도움을 줄 수 있습니다.

`,
    publishDate: "2025-08-14",
    categories: ["Linux Security", "Rootkits", "Malware Analysis", "Cybersecurity"],
    categoriesKo: ["Linux 보안", "루트킷", "악성코드 분석", "사이버보안"],
    url: "https://sandflysecurity.com/blog/phrack-linux-stealth-rootkit-analysis",
    imageUrl: "/images/phrack-rootkit-assets/image001.png",
    author: "SandFly 팀",
    readTime: 18
  }
];