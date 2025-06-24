'use client';

import React from 'react';
import Link from 'next/link';
import { CloudIcon, CommandLineIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const deploymentSteps = [
  {
    step: 1,
    title: 'DigitalOcean 계정 준비',
    description: 'DigitalOcean 계정을 생성하고 필요한 리소스를 준비합니다.',
    details: [
      'DigitalOcean 계정 생성 및 결제 정보 등록',
      'API 토큰 생성 (선택사항)',
      'SSH 키 페어 생성 및 등록',
      '적절한 데이터센터 지역 선택',
    ],
    commands: [
      '# SSH 키 생성',
      'ssh-keygen -t rsa -b 4096 -C "your_email@example.com"',
      '',
      '# 공개 키를 DigitalOcean에 추가',
      'cat ~/.ssh/id_rsa.pub',
    ],
  },
  {
    step: 2,
    title: 'Droplet 생성 및 구성',
    description: 'Sandfly용 Ubuntu Droplet을 생성하고 기본 보안 설정을 구성합니다.',
    details: [
      'Ubuntu 22.04 LTS 이미지 선택',
      '최소 4GB RAM, 2 vCPU 권장',
      '방화벽 및 보안 그룹 설정',
      '자동 백업 활성화 권장',
    ],
    commands: [
      '# Droplet 연결',
      'ssh root@your_droplet_ip',
      '',
      '# 시스템 업데이트',
      'apt update && apt upgrade -y',
      '',
      '# 방화벽 설정',
      'ufw allow OpenSSH',
      'ufw allow 443/tcp',
      'ufw enable',
    ],
  },
  {
    step: 3,
    title: 'Docker 설치',
    description: 'Sandfly 컨테이너 실행을 위한 Docker와 Docker Compose를 설치합니다.',
    details: [
      'Docker Engine 최신 버전 설치',
      'Docker Compose 설치',
      '사용자를 docker 그룹에 추가',
      'Docker 서비스 자동 시작 설정',
    ],
    commands: [
      '# Docker 설치',
      'curl -fsSL https://get.docker.com -o get-docker.sh',
      'sh get-docker.sh',
      '',
      '# Docker Compose 설치',
      'curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose',
      'chmod +x /usr/local/bin/docker-compose',
      '',
      '# 사용자 권한 설정',
      'usermod -aG docker $USER',
    ],
  },
  {
    step: 4,
    title: 'Sandfly 설치',
    description: 'Sandfly Security 플랫폼을 다운로드하고 설치합니다.',
    details: [
      'Sandfly 라이센스 키 준비',
      'Docker 이미지 다운로드',
      '환경 설정 파일 구성',
      '초기 관리자 계정 설정',
    ],
    commands: [
      '# 설치 디렉토리 생성',
      'mkdir -p /opt/sandfly',
      'cd /opt/sandfly',
      '',
      '# Sandfly 이미지 다운로드',
      'docker pull sandfly/sandfly-server:latest',
      '',
      '# 설정 파일 생성',
      'cat > docker-compose.yml << EOF',
      'version: "3.8"',
      'services:',
      '  sandfly:',
      '    image: sandfly/sandfly-server:latest',
      '    ports:',
      '      - "443:443"',
      '    volumes:',
      '      - ./data:/opt/sandfly/data',
      '    environment:',
      '      - LICENSE_KEY=your_license_key',
      'EOF',
    ],
  },
  {
    step: 5,
    title: '서비스 시작 및 확인',
    description: 'Sandfly 서비스를 시작하고 정상 동작을 확인합니다.',
    details: [
      'Docker Compose로 서비스 시작',
      '웹 인터페이스 접속 확인',
      '초기 설정 마법사 완료',
      '시스템 상태 및 로그 확인',
    ],
    commands: [
      '# Sandfly 서비스 시작',
      'docker-compose up -d',
      '',
      '# 서비스 상태 확인',
      'docker-compose ps',
      '',
      '# 로그 확인',
      'docker-compose logs -f sandfly',
    ],
  },
];

const requirements = [
  {
    category: '시스템 요구사항',
    items: [
      'Ubuntu 22.04 LTS 또는 CentOS 8+',
      '최소 4GB RAM, 권장 8GB+',
      '최소 2 vCPU, 권장 4+ vCPU',
      '최소 20GB 저장공간, 권장 100GB+',
    ],
  },
  {
    category: '네트워크 요구사항',
    items: [
      'SSH 접속 (포트 22)',
      'HTTPS 웹 인터페이스 (포트 443)',
      '모니터링 대상 호스트로 SSH 연결',
      '인터넷 연결 (라이센스 및 업데이트)',
    ],
  },
  {
    category: '보안 요구사항',
    items: [
      'SSL/TLS 인증서 (Let\'s Encrypt 권장)',
      '강력한 관리자 비밀번호',
      '방화벽 및 보안 그룹 설정',
      '정기적인 백업 구성',
    ],
  },
];

const troubleshooting = [
  {
    issue: 'Docker 권한 오류',
    solution: '사용자를 docker 그룹에 추가한 후 재로그인하세요.',
    command: 'sudo usermod -aG docker $USER && newgrp docker',
  },
  {
    issue: 'Sandfly 서비스 시작 실패',
    solution: '라이센스 키가 올바르게 설정되었는지 확인하세요.',
    command: 'docker-compose logs sandfly',
  },
  {
    issue: '웹 인터페이스 접속 불가',
    solution: '방화벽에서 443 포트가 열려있는지 확인하세요.',
    command: 'sudo ufw status && sudo ufw allow 443/tcp',
  },
  {
    issue: 'SSH 연결 문제',
    solution: 'SSH 키 권한과 DigitalOcean 설정을 확인하세요.',
    command: 'chmod 600 ~/.ssh/id_rsa && ssh -v user@host',
  },
];

const optimizations = [
  {
    title: '성능 최적화',
    description: '대규모 환경을 위한 성능 튜닝',
    tips: [
      'SSD 스토리지 사용',
      'CPU 집약적 작업을 위한 전용 vCPU',
      'RAM 디스크 활용',
      '네트워크 최적화 설정',
    ],
  },
  {
    title: '보안 강화',
    description: '추가 보안 조치 적용',
    tips: [
      'Fail2ban 설치 및 구성',
      'SSH 키 전용 인증',
      '정기적인 보안 업데이트',
      '침입 탐지 시스템 구성',
    ],
  },
  {
    title: '모니터링 설정',
    description: '시스템 모니터링 및 알림',
    tips: [
      'DigitalOcean 모니터링 활성화',
      '디스크 사용량 알림 설정',
      'CPU 및 메모리 임계값 설정',
      '로그 중앙화 구성',
    ],
  },
];

const Page = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <CloudIcon className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">DigitalOcean 클라우드 배포</h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            DigitalOcean 클라우드에서 Sandfly Security를 빠르고 안전하게 배포하는 방법을 
            단계별로 안내합니다. 프로덕션 환경에 최적화된 설정을 제공합니다.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">10분</div>
              <div className="text-sm text-gray-400">평균 설치 시간</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">$20/월</div>
              <div className="text-sm text-gray-400">최소 비용</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-400">가용성</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">5단계</div>
              <div className="text-sm text-gray-400">배포 과정</div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">시스템 요구사항</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">{req.category}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Deployment Steps */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">배포 단계</h2>
          
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {deploymentSteps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeStep === step.step
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {step.step}. {step.title}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          {deploymentSteps.map((step) => (
            activeStep === step.step && (
              <div key={step.step} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">작업 항목</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      <CommandLineIcon className="h-5 w-5 inline mr-2" />
                      명령어
                    </h4>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <pre className="text-cyan-400 text-sm whitespace-pre-wrap">
                        {step.commands.join('\n')}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                    disabled={activeStep === 1}
                    className="px-6 py-2 bg-gray-700 text-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-600 transition-colors"
                  >
                    이전 단계
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(deploymentSteps.length, activeStep + 1))}
                    disabled={activeStep === deploymentSteps.length}
                    className="px-6 py-2 bg-cyan-600 text-white rounded-md disabled:opacity-50 hover:bg-cyan-700 transition-colors"
                  >
                    다음 단계
                  </button>
                </div>
              </div>
            )
          ))}
        </section>

        {/* Troubleshooting */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">문제 해결</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">{item.issue}</h3>
                <p className="text-gray-300 mb-4">{item.solution}</p>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <code className="text-cyan-400 text-sm">{item.command}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optimization Tips */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">최적화 및 보안 강화</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {optimizations.map((opt, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CogIcon className="h-8 w-8 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">{opt.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{opt.description}</p>
                <ul className="space-y-2">
                  {opt.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="mt-20 max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg text-center">
          <ShieldCheckIcon className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            배포 지원이 필요하신가요?
          </h2>
          <p className="text-gray-300 mb-8">
            전문가 팀이 DigitalOcean 배포 과정에서 발생할 수 있는 
            모든 문제를 해결해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
            >
              전문가 지원 요청
            </Link>
            <Link 
              href="/resources/documentation" 
              className="inline-block bg-gray-700 text-gray-300 px-8 py-3 rounded-md font-semibold hover:bg-gray-600 transition-colors"
            >
              상세 문서 보기
            </Link>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
            추가 리소스
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            DigitalOcean 배포와 관련된 더 자세한 정보와 가이드를 확인해보세요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/white-papers" 
              className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-cyan-700"
            >
              클라우드 보안 백서
            </Link>
            <Link 
              href="/resources/sandfly-university" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              교육 프로그램
            </Link>
            <Link 
              href="/resources/product-faqs" 
              className="inline-block rounded-md bg-gray-800 px-8 py-3 text-base font-semibold text-gray-300 ring-1 ring-gray-300 hover:bg-gray-700"
            >
              자주 묻는 질문
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;