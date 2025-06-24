import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto px-6 py-16">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Ready to Protect Linux? Let's Talk.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A Linux security expert will reach out to discuss your requirements.
          </p>
        </section>

        <section className="mt-12 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-300">Reason for contact</label>
              <select id="reason" name="reason" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white">
                <option>Interested in buying</option>
                <option>Press Inquiry</option>
                <option>Partner Inquiry</option>
                <option>General Question</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">First Name</label>
                <input type="text" name="first-name" id="first-name" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">Last Name</label>
                <input type="text" name="last-name" id="last-name" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white" />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
              <input type="text" name="company" id="company" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
              <input type="tel" name="phone" id="phone" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white"></textarea>
            </div>

            <div>
              <label htmlFor="how-did-you-hear" className="block text-sm font-medium text-gray-300">How did you hear about us?</label>
              <input type="text" name="how-did-you-hear" id="how-did-you-hear" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-white" />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="personal-use" name="personal-use" type="checkbox" className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-700 rounded bg-gray-800" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="personal-use" className="font-medium text-gray-300">I intend to use Sandfly Security for personal use</label>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="marketing-consent" name="marketing-consent" type="checkbox" className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-700 rounded bg-gray-800" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="marketing-consent" className="font-medium text-gray-300">I consent to receiving marketing communications from Sandfly Security.</label>
                <p className="text-gray-500">All communications are in accordance with our <a href="/privacy-policy" className="underline hover:text-cyan-400">terms and privacy policy</a>.</p>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;
