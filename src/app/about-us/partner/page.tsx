import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
            Partners and MSSPs
          </h1>
          <h2 className="mt-8 text-2xl font-semibold text-center text-gray-300">
            Incident Responders, Hunters And Security Integrators.
          </h2>
          <div className="mt-8 text-lg leading-8 text-gray-300 space-y-6">
            <p>
              Sandfly can solve your Linux attack detection and response problems. Because it covers all types of Linux systems through an agentless, SSH-based approach, your Linux coverage is up and running in minutes.
            </p>
            <p>
              Reporting and integration with your existing monitoring systems is easy through Sandfly’s library of REST-based APIs. MSSPs can also develop their own Sandfly investigation modules to support any custom requirements. You can offer Linux monitoring to all your clients as a MSSP – or as a reseller.
            </p>
            <p>
              See what your customers think of Sandfly’s unique and comprehensive coverage while at the same time boosting your team’s capacity to monitor and secure Linux.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
