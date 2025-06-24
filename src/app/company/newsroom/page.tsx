import React from 'react';

const newsArticles = [
  {
    title: 'Sandfly Security Secures Funding from Gula Tech Adventures & Sorenson Capital',
    date: '25 March 2024',
    source: 'Press Release',
    content: `
      <p class="mb-4">Sandfly Security, the agentless Linux Security Company, celebrates securing seed funding from Gula Tech Adventures and Sorenson Capital to meet growing market demand for its comprehensive Linux security solution. Industries that power the world's infrastructure, including telecommunication services, manufacturing, and networking companies, rely on Sandfly to secure their Linux environments. Sandfly will use the additional funds to expand product capabilities and accelerate the company's go-to-market strategy.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-4 text-cyan-400">Linux: The OS that Powers our World, Yet Comprehensive Protection Is Hard to Achieve</h3>
      <p class="mb-4">Nearly all critical infrastructure runs on Linux, yet, to date, no security solution is compatible with the hundreds of versions of the popular operating system. Traditional approaches that use an agent to secure Linux systems face compatibility, performance, and stability hurdles. These solutions often cause excessive CPU usage, stability, and performance impacts, leading to productivity losses and vulnerable critical systems to attack. Sandfly's agentless approach solves these issues, giving customers the widest compatibility, performance, and safety for securing Linux.</p>
      <p class="mb-4">"Linux runs the internet—95% of cloud workloads run on Linux. Industrial apps in robotics, edge devices, networking gear, and most critical infrastructure run on Linux. Yet, there are no good tools available to secure it that do not impact stability and performance," said Craig Rowland, CEO and Founder of Sandfly Security. "Linux security is hard to achieve—it's highly distributed, fragmented, and protection tools cannot disrupt mission-critical applications. This is why agent-based systems often won't work, and we're seeing strong demand for our approach as we eliminate the biggest problem: loading an agent."</p>
      <h3 class="text-2xl font-semibold mt-6 mb-4 text-cyan-400">A seasoned founder with deep roots in network intrusion</h3>
      <p class="mb-4">Craig Rowland is a seasoned entrepreneur with a track record of start-ups acquired by giants like Cisco Systems. Starting his career alongside U.S. Air Force Information Warfare Center veterans, he broke into computer networks professionally and developed intrusion detection and vulnerability scanning products. Currently, he serves as the CEO of Sandfly Security, a platform for agentless intrusion detection and incident response for Linux.</p>
      <p class="mb-4">"Craig is one of the rare entrepreneurs who has repeatedly proven he can build lasting companies that solve tough problems," said Ron Gula, co-founder of Tenable Network Security and founder of Gula Tech Adventures. "The world relies on Linux, and we know how important it is to secure it—yet organizations don't—leaving critical systems vulnerable. Existing agent-based solutions have compatibility and performance impacts, are hard to deploy, and likely break things. The market is desperate for a solution that works reliably, is easy to deploy, and is effective with what it promises to do. That's Sandfly Security."</p>
      <p class="mb-4">Visit sandflysecurity.com to learn more about securing your Linux environments.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-4 text-cyan-400">About Sandfly Security</h3>
      <p>Agentless, compatible, and fast to deploy, Sandfly Security goes beyond traditional endpoint detection capabilities to secure Linux boxes without latency issues or cumbersome deployments. Sandfly protects virtually any Linux system, from modern cloud deployments to decade-old devices, regardless of distribution or CPU architecture. Sandfly hunts for signs of compromise, tracks SSH credentials, audits for weak passwords, detects unauthorized changes with drift detection, and allows custom modules to find new and emerging threats. Sandfly does this with the utmost safety, performance, and compatibility on Linux. We do it without loading agents on your endpoints. <em>Investors include Gula Tech Adventures, Sorenson Capital, and Alt Ventures New Zealand.</em></p>
    `
  }
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12">Newsroom</h1>
        <div className="max-w-4xl mx-auto">
          {newsArticles.map((article, index) => (
            <article key={index} className="mb-12 p-8 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-6">{article.date} - {article.source}</p>
              <div
                className="text-lg leading-8 text-gray-300 space-y-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
