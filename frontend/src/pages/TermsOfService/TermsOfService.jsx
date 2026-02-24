import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 text-white">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-500" style={{ fontFamily: "Monoton, cursive" }}>
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">Last Updated: February 2026</p>
        </div>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">1. Agreement to Terms</h2>
            <p>
              By accessing and using NovaCinema, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue using our website and services immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">2. Use License</h2>
            <p className="mb-4">Permission is granted to view our website for personal, non-commercial use only. You are not permitted to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Modify or reproduce any content without permission</li>
              <li>Use content for commercial purposes</li>
              <li>Attempt to reverse engineer or hack our systems</li>
              <li>Remove copyright or proprietary notices</li>
              <li>Access our website using automated tools or bots</li>
              <li>Engage in any unlawful activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">3. User Accounts</h2>
            <p className="mb-4">When you create an account, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your password</li>
              <li>Accept responsibility for all account activities</li>
              <li>Not share your account with others</li>
              <li>Immediately notify us of unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">4. Movie Bookings & Payments</h2>
            <p className="mb-4">
              All bookings are subject to availability and our booking policies. By making a booking:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>You confirm all booking details are accurate</li>
              <li>Full payment must be completed at booking</li>
              <li>Cancellations are subject to our refund policy</li>
              <li>We reserve the right to cancel invalid bookings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">5. Prohibited Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, threaten, or abuse others</li>
              <li>Post offensive, obscene, or harmful content</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Engage in fraudulent or deceptive practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">6. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" without warranties of any kind. We do not guarantee that the website will be error-free, uninterrupted, or secure. Your use of our services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, NovaCinema and its owners shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">8. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our website constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-400">9. Contact Us</h2>
            <p className="mb-4">If you have questions about these Terms, please contact us:</p>
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

export default TermsOfService;
