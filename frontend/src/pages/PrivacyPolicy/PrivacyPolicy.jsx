import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 text-white">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-500" style={{ fontFamily: "Monoton, cursive" }}>
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">Last Updated: February 2026</p>
        </div>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Introduction</h2>
            <p className="mb-4">
              NovaCinema ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">1. Information We Collect</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-red-300">Personal Information</h3>
              <p>When you register, make bookings, or contact us, we may collect:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                <li>Full name and email address</li>
                <li>Phone number and mailing address</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-red-300">Usage Information</h3>
              <p>We automatically collect information about your interactions with our website, including:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                <li>Pages visited and time spent on each page</li>
                <li>Links clicked and search queries</li>
                <li>Browser and device information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-red-300">Device Information</h3>
              <p>We collect technical information including IP address, browser type, operating system, and device identifiers.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Provide and maintain our services</li>
              <li>Process your movie bookings and payments securely</li>
              <li>Send transaction confirmations and support communications</li>
              <li>Improve website performance and user experience</li>
              <li>Prevent fraudulent activities and enhance security</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">3. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption, firewalls, and secure servers to protect your information. However, no method of transmission is 100% secure. We encourage you to use strong passwords and keep your account information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">4. Your Rights & Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Access your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at novacinema@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">5. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies before providing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">6. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted here with an updated date. Your continued use of our website indicates acceptance of any updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">7. Contact Us</h2>
            <p className="mb-4">For privacy inquiries, reach out to:</p>
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

export default PrivacyPolicy;
