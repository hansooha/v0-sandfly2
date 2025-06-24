import React from 'react';
import { ShieldCheckIcon, CpuChipIcon, ServerIcon, WifiIcon, CircleStackIcon, CogIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Agentless by Design',
    description: 'Our technology eliminates the need to install software on monitored devices, simplifying management and reducing risk for critical systems that must always work.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Minimal Performance Impact',
    description: 'Since no agents run continuously, Sandfly has little to no effect on device performance or stability, which is essential for critical infrastructure applications.',
    icon: CpuChipIcon,
  },
  {
    name: 'Full EDR Capabilities',
    description: 'Edge devices get the same protection as full servers, including advanced drift detection to find evasive and novel intruder activity.',
    icon: ServerIcon,
  },
  {
    name: 'Monitor Attacker Havens',
    description: 'Attackers target unprotected edge devices that act as chokepoints for valuable data. Sandfly lets you operate where the attackers are.',
    icon: WifiIcon,
  },
  {
    name: 'Effortless Scalability',
    description: 'Avoid the complexity of managing individual agents. Sandfly is ideal for organizations with extensive networking infrastructure and distributed systems.',
    icon: CircleStackIcon,
  },
  {
    name: 'Wide Device Support',
    description: 'We protect a vast range of Linux-based systems, from network gear and IoT devices to industrial controls and robotics.',
    icon: CogIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        <section className="text-center py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Intruders Lurking on the Edges</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-8">
              Nation-state actors and Advanced Persistent Threat (APT) groups increasingly target networking gear and Linux-based embedded devices. Detecting threats on these systems is essential to safeguard critical infrastructure.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-cyan-400">Secure All Your Linux Devices</h2>
              <p className="mt-4 text-lg text-gray-400">Sandfly has the industry&apos;s widest compatibility across Linux devices.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature) => (
                <div key={feature.name} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                  <feature.icon className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.name}</h3>
                  <p className="text-gray-400 leading-7">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Linux Threats Unmasked</h2>
            <p className="text-lg text-gray-300 mb-8">
              Ride along with Sandfly as we hunt for a compromised embedded Linux device using drift detection.
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/pZMOeVHEanU" 
                title="Sandfly Drift Detection on Embedded Linux" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;

