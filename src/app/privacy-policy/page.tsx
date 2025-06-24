import React from 'react';

const policyHtml = `
  <p class="mb-6 text-lg">As a cybersecurity vendor, your data, your privacy, your security and our compliance with regulation of this content is of high importance to us.</p>
  
  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Introduction</h2>
  <div class="space-y-4">
    <p>Sandfly Security complies with the New Zealand Privacy Act 2020 (the Act) working with personal information. <em>Personal information</em> is information about an identifiable individual (a natural person).</p>
    <p>This policy defines how we will collect, use, disclose and protect your personal information.</p>
    <p>This policy does not limit or exclude any of your rights under the Act. For further information on the Act, visit <a href="https://www.privacy.org.nz/" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">www.privacy.org.nz</a>.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Changes to this policy</h2>
  <div class="space-y-4">
    <p>We may change this policy by uploading a revised version onto this website. The changes will apply from the date that we upload the revised policy.</p>
    <p>This policy was last updated on November 10th, 2021.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Who we collect your personal information from</h2>
  <div class="space-y-4">
    <p>We collect personal information about you from:</p>
    <ul class="list-disc list-inside pl-4 space-y-2">
      <li>you, when you provide that personal information to us, including via the website and any related service, through any registration or subscription process, through any contact with us (e.g. telephone call or email), or when you buy or use our services and products</li>
      <li>third parties where you have authorized this or the information is publicly available.</li>
    </ul>
    <p>If possible, we will collect personal information from you directly.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">How we use your personal information</h2>
  <div class="space-y-4">
    <p>We will use your personal information:</p>
    <ul class="list-disc list-inside pl-4 space-y-2">
      <li>to verify your identity</li>
      <li>to provide services and products to you</li>
      <li>to market our services and products to you, including contacting you electronically (e.g. by text or email for this purpose)</li>
      <li>to improve the services and products that we provide to you</li>
      <li>to undertake credit checks on you (if necessary)</li>
      <li>to bill you and to collect money that you owe us, including authorizing and processing credit card transactions</li>
      <li>to respond to communications from you, including a complaint</li>
      <li>to conduct research and statistical analysis (on an anonymised basis)</li>
      <li>to protect and/or enforce our legal rights and interests, including defending any claim</li>
      <li>for any other purpose authorized by you or the Act.</li>
    </ul>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Disclosing your personal information</h2>
  <div class="space-y-4">
    <p>We may disclose your personal information to:</p>
    <ul class="list-disc list-inside pl-4 space-y-2">
        <li>another company within our group</li>
        <li>any business that supports our services and products, including any person that hosts or maintains any underlying IT system or data centre that we use to provide the website or other services and products</li>
        <li>a credit reference agency for the purpose of credit checking you</li>
        <li>other third parties (for anonymised statistical information)</li>
        <li>a person who can require us to supply your personal information (e.g. a regulatory authority)</li>
        <li>any other person authorized by the Act or another law (e.g. a law enforcement agency)</li>
        <li>any other person authorized by you.</li>
    </ul>
    <p>A business that supports our services and products may be located outside New Zealand. This may mean your personal information is held and processed outside New Zealand.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Protecting your personal information</h2>
  <div class="space-y-4">
    <p>We will take reasonable steps to keep your personal information safe from loss, unauthorized activity, or other misuse.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Accessing and correcting your personal information</h2>
  <div class="space-y-4">
    <p>Subject to certain grounds for refusal set out in the Act, you have the right to access your readily retrievable personal information that we hold and to request a correction to your personal information. Before you exercise this right, we will need evidence to confirm that you are the individual to whom the personal information relates and belongs.</p>
    <p>In respect of a request for correction, if we think the correction is reasonable and we are reasonably able to change the personal information, we will make the correction. If we do not make the correction, we will take reasonable steps to notify you on the outcome of your request.</p>
    <p>If you want to exercise either of the above rights, email us at <a href="mailto:privacy@sandflysecurity.com" class="text-cyan-400 hover:underline">privacy@sandflysecurity.com</a>. Your email should provide evidence of who you are and set out the details of your request (e.g. the personal information, or the correction, that you are requesting).</p>
    <p>We may at our discretion charge you our reasonable costs of providing to you copies of your personal information or correcting that information per your request.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Internet use</h2>
  <div class="space-y-4">
    <p>While we take reasonable steps to maintain secure internet connections, if you provide us with personal information over the internet, the provision of that information is at your own risk.</p>
    <p>If you post your personal information on the website’s support forum, you acknowledge and agree that the information you post is publicly available.</p>
    <p>If you follow a link on our website to another site, the owner of that site will have its own privacy policy relating to your personal information. We suggest you review that site’s privacy policy before you provide personal information.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Cookies</h2>
  <div class="space-y-4">
    <p>We use cookies (an alphanumeric identifier that we transfer to your computer’s hard drive so that we can recognize your browser) to monitor your use of the website. You may disable cookies by changing the settings on your browser, although this may mean that you cannot use all of the features of the website.</p>
  </div>

  <h2 class="text-3xl font-semibold mt-8 mb-4 text-cyan-400">Contacting Us</h2>
  <div class="space-y-4">
    <p>If you have any questions about this privacy policy, our privacy practices, or if you would like to request access to, or correction of, your personal information, you can contact us at <a href="mailto:privacy@sandflysecurity.com" class="text-cyan-400 hover:underline">privacy@sandflysecurity.com</a>.</p>
  </div>
`;

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12">Privacy Policy</h1>
          <div 
            className="prose prose-invert prose-lg max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: policyHtml }}
          />
        </section>
      </main>
    </div>
  );
};

export default Page;
