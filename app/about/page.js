"use client"
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-purple-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">About SwiftLinks</h1>
          <p className="text-xl text-purple-700 mb-8">Redefining link shortening with speed, security, and simplicity.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Story</h2>
            <p className="mb-4 text-gray-700">
              SwiftLinks was born from a simple need: creating short, memorable links that don't compromise on security or analytics.
            </p>
            <p className="mb-4 text-gray-700">
              Founded in 2023, our team of developers and security experts set out to build a link shortening service that prioritizes both user experience and data protection.
            </p>
            <p className="text-gray-700">
              Today, SwiftLinks is trusted by individuals and businesses worldwide to create billions of shortened links annually, all with unparalleled speed and reliability.
            </p>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/about-team.png"
              alt="SwiftLinks Team"
              fill={true}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 px-8 md:px-16 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">What Sets Us Apart</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Our optimized infrastructure ensures your shortened links load instantly, reducing bounce rates and improving user experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Bank-Level Security</h3>
              <p className="text-gray-600">Every link is protected with advanced encryption and security measures to prevent malicious attacks and data breaches.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Detailed Analytics</h3>
              <p className="text-gray-600">Gain valuable insights with our comprehensive analytics dashboard, tracking clicks, geographic data, and referral sources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-12 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Our Technology</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-64 md:h-80">
              <Image
                src="/tech-stack.png"
                alt="SwiftLinks Technology Stack"
                fill={true}
                className="object-contain"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <p className="mb-4 text-gray-700">
                SwiftLinks leverages cutting-edge technology to deliver the fastest and most secure link shortening experience available.
              </p>
              <p className="mb-4 text-gray-700">
                Our distributed edge network ensures minimal latency regardless of where your users are located, while our proprietary caching system delivers near-instantaneous redirects.
              </p>
              <p className="text-gray-700">
                Behind the scenes, we utilize Next.js, React, and Tailwind CSS for our frontend, with a robust Node.js backend and MongoDB database to handle millions of requests per second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 px-8 md:px-16 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Team Member Cards - Replace with actual team members */}
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/team-member-${member}.png`}
                    alt={`Team Member ${member}`}
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-purple-700">Team Member {member}</h3>
                  <p className="text-purple-500 text-sm">Position Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 md:px-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience the SwiftLinks difference?</h2>
          <p className="text-lg mb-8 text-purple-100">
            Join thousands of individuals and businesses who trust SwiftLinks for their link shortening needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shorten">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-purple-100 transition-colors">
                Try SwiftLinks Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-purple-900 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How long do shortened links remain active?",
                answer: "SwiftLinks shortened URLs never expire unless you explicitly set an expiration date. We're committed to link permanence."
              },
              {
                question: "Is there a limit to how many links I can create?",
                answer: "Free accounts can create up to 100 links per month. Premium plans offer unlimited link creation and additional features."
              },
              {
                question: "Can I customize my shortened URLs?",
                answer: "Yes! Premium users can create custom branded links that reflect their business or personal brand."
              },
              {
                question: "Are SwiftLinks URLs secure?",
                answer: "Absolutely. We use industry-leading encryption and security protocols to ensure your links and data remain protected."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/faq">
              <button className="text-purple-600 font-semibold hover:text-purple-800">
                View All FAQs →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}