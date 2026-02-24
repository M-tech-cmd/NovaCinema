import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 text-white">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-500" style={{ fontFamily: "Monoton, cursive" }}>
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">Last Updated: February 2026</p>
        </div>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">What Are Cookies?</h2>
            <p>
              Cookies are small files stored on your device that remember information about your visits to our website. They help us provide a better browsing experience and understand how users interact with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-red-300">Essential Cookies</h3>
              <p>
                Required for basic website functionality. These enable you to navigate, log in, and access secure features. Without them, the website cannot function properly.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-red-300">Performance Cookies</h3>
              <p>
                Help us understand how you use our website. They track which pages are popular, identify errors, and help us improve overall website performance.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-red-300">Functional Cookies</h3>
              <p>
                Remember your preferences and settings, such as language, username, and region, so you don't have to re-enter them on future visits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-red-300">Marketing Cookies</h3>
              <p>
                Used to deliver personalized advertisements and measure campaign effectiveness. They track your interests across websites.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Cookie Information</h2>
            <div className="bg-slate-800 rounded-lg overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-red-500">
                    <th className="text-left py-3 px-4 text-red-400">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-red-400">Purpose</th>
                    <th className="text-left py-3 px-4 text-red-400">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="py-3 px-4">session_id</td>
                    <td className="py-3 px-4">Maintains your login session</td>
                    <td className="py-3 px-4">Session</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">user_preferences</td>
                    <td className="py-3 px-4">Saves your preferences and settings</td>
                    <td className="py-3 px-4">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">analytics_token</td>
                    <td className="py-3 px-4">Tracks website usage data</td>
                    <td className="py-3 px-4">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">cart_items</td>
                    <td className="py-3 px-4">Stores your booking selections</td>
                    <td className="py-3 px-4">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Third-Party Cookies</h2>
            <p>
              We allow trusted third-party services (such as payment processors and analytics providers) to set cookies on your device. These are governed by their own privacy policies, which we recommend you review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">How to Control Cookies</h2>
            <p className="mb-4">You can manage cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
              <li>View what cookies are stored on your device</li>
              <li>Delete individual cookies or all cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Disable third-party cookies</li>
              <li>Clear cookies automatically when closing the browser</li>
            </ul>
            <p className="text-amber-200 text-sm bg-amber-900 bg-opacity-20 rounded p-3">
              <strong>Note:</strong> Disabling cookies may affect website functionality and prevent you from accessing certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Your Cookie Consent</h2>
            <p>
              When you first visit our website, we ask for your consent to use cookies (except essential cookies, which are always enabled). You can update your preferences anytime through your account settings or browser controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Policy Updates</h2>
            <p>
              We may update this Cookie Policy periodically. Changes will be posted here with an updated date. Your continued use of our website indicates acceptance of any updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Contact Us</h2>
            <p className="mb-4">Questions about our cookie practices? We're happy to help:</p>
            <div className="bg-slate-800 rounded-lg p-4 space-y-2">
              <p><span className="text-red-400 font-semibold">Email:</span> novacinema@gmail.com</p>
              <p><span className="text-red-400 font-semibold">Phone:</span> +254 758247543</p>
              <p><span className="text-red-400 font-semibold">Location:</span> Nairobi, Kenya</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
